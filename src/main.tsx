import './createPost.js';

import { Devvit, useState } from '@devvit/public-api';

// Defines the messages that are exchanged between Devvit and Web View
type WebViewMessage =
  | {
      type: 'incScore';
      data: { score: number };
    }
  | {
      type: 'getScore';
  } 
  | {
    type: 'playedLevel',
    data: { week: number, day: number, alphabet: string  }
  };

Devvit.configure({
  redditAPI: true,
  redis: true,
});

Devvit.addCustomPostType({
  name: 'Alpha Quest',
  height: 'tall',
  render: (context) => {
    // Load username with `useAsync` hook
    const [username] = useState(async () => {
      const currUser = await context.reddit.getCurrentUser();
      return currUser?.username ?? '';
    });

    // Create a reactive state for web view visibility
    const [webviewVisible, setWebviewVisible] = useState(false);

    // directing the user to the webview after extracting the username
    if(username) {
      setWebviewVisible(true);
      context.ui.webView.postMessage('myWebView', {
        type: 'testing',
        data: {
        },
      });
    }

    // When the web view invokes `window.parent.postMessage` this function is called
    const onMessage = async (msg: WebViewMessage) => {
      switch (msg.type) {
        case 'incScore': 
          const userKey = `score_${context.userId}`;
          const incrementBy = msg.data.score;
      
          // using incrBy to automatically create & update it
          const newScore = await context.redis.incrBy(userKey, incrementBy);
          context.ui.webView.postMessage('myWebView', {
            type: 'getScore',
            data: { score: newScore },
          });
          break;
        case 'getScore':
          const score = await context.redis.get(`score_${context.userId}`);
          context.ui.webView.postMessage('myWebView', {
            type: 'getScore',
            data: { score: score ?? 0 }, // Ensure score is not null
          });
          break;
        case 'playedLevel':
          const levelData = await context.redis.get(`${context.userId}_w${msg.data.week}_d${msg.data.day}`)
          let previouslyPlayedLevel = false;

          // the variable does not exist as of now
          if(levelData == undefined) {
            previouslyPlayedLevel = false;
            await context.redis.set(`${context.userId}_w${msg.data.week}_d${msg.data.day}`, `${msg.data.alphabet}-`);
          }
          // else if its there, then match it
          else {
            previouslyPlayedLevel = levelData.includes(`${msg.data.alphabet}-`) ? true : false;
            // update the variable also so that the user cannot play the same level next time
            await context.redis.set(`${context.userId}_w${msg.data.week}_d${msg.data.day}`, `${levelData}${msg.data.alphabet}-`);
          }

          // sending the response to webview page
          context.ui.webView.postMessage('myWebView', {
            type: 'playedLevel',
            data: { played: previouslyPlayedLevel, alphabet: msg.data.alphabet },
          });
          break;
        default:
          throw new Error(`Unknown message type!!`);
      }
    };

    const factsAboutReddit = [
      `Founded in 2005: Reddit was created by Steve Huffman and Alexis Ohanian as part of a startup incubator (Y Combinator).`,
      `The Front Page of the Internet: Reddit's tagline reflects its role as a hub for viral content and breaking news.`,
      `Karma System: Reddit users earn "Karma" points based on upvotes/downvotes for their posts and comments, which measures their overall contribution.`,
      `AMAs (Ask Me Anything): Reddit is famous for its AMAs where celebrities, experts, and even presidents (like Obama in 2012) interact directly with users.`,
      `Subreddits: Reddit has over 3 million subreddits, each catering to specific interests and communities.`,
      `World's Largest Secret Santa: Reddit holds the Guinness World Record for the largest online Secret Santa gift exchange, involving thousands of participants globally.`,
      `Bought by Condé Nast: Reddit was acquired by Condé Nast in 2006 and later spun off into an independent entity in 2011.`
    ];

    // grab a random index
    const randomInd = Math.floor(Math.random() * 7);

    // Render the custom post type
    return (
      <vstack grow padding="small">
        <vstack
          grow={!webviewVisible}
          height={webviewVisible ? '0%' : '100%'}
          alignment="middle center"
        >
          <vstack alignment="middle center">
            <hstack padding="medium">
              <text size="xxlarge">👋 </text>
              <text size="xxlarge" weight="bold">
                {' '}
                {username ?? ''}
              </text>
            </hstack>
            <spacer />
            <vstack padding="large">
              <text size="large" weight="bold">Do you know? </text>
              <text wrap size="large">{factsAboutReddit[randomInd]}</text>
            </vstack>
          </vstack>
        </vstack>
        <vstack grow={webviewVisible} height={webviewVisible ? '100%' : '0%'}>
          <vstack border="thick" borderColor="black" height={webviewVisible ? '100%' : '0%'}>
            <webview
              id="myWebView"
              url="page.html"
              onMessage={(msg) => onMessage(msg as WebViewMessage)}
              grow
              height={webviewVisible ? '100%' : '0%'}
            />
          </vstack>
        </vstack>
      </vstack>
    );
  },
});

export default Devvit;

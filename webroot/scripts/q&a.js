// contains the weekly questions along with reasoning and answers
const questions = {
  // A
  0: {
    name: {
      hint: "Invented gravity",
      ans: "Albert",
      brief: "Albert is often humorously linked to gravity.",
    },
    place: {
      hint: "Capital of Greece",
      ans: "Athens",
      brief: "Athens is the capital of Greece.",
    },
    animal: {
      hint: "Hardworking insect",
      ans: "Ant",
      brief: "Ants are known for their teamwork and hard work.",
    },
    thing: {
      hint: "Keeps the doctor away",
      ans: "Apple",
      brief: "Apples are nutritious and good for health.",
    },
  },
  // B
  1: {
    name: {
      hint: "Famous composer",
      ans: "Beethoven",
      brief: "Beethoven is a renowned classical composer.",
    },
    place: {
      hint: "Capital of Germany",
      ans: "Berlin",
      brief: "Berlin is the capital city of Germany.",
    },
    animal: {
      hint: "Large furry mammal",
      ans: "Bear",
      brief: "Bears are strong mammals found in forests.",
    },
    thing: {
      hint: "You read it",
      ans: "Book",
      brief: "Books are a source of knowledge and stories.",
    },
  },
  // C
  2: {
    name: {
      hint: "Discovered electricity",
      ans: "Charles",
      brief: "Charles worked on the early ideas of electricity.",
    },
    place: {
      hint: "City of canals",
      ans: "Cairo",
      brief: "Cairo is a historic city in Egypt.",
    },
    animal: {
      hint: "Domesticated pet",
      ans: "Cat",
      brief: "Cats are popular household pets.",
    },
    thing: {
      hint: "Captures photos",
      ans: "Camera",
      brief: "A camera is used to take pictures.",
    },
  },
  // D
  3: {
    name: {
      hint: "Father of computers",
      ans: "Darwin",
      brief: "Darwin contributed to computer ideas.",
    },
    place: {
      hint: "Capital of India",
      ans: "Delhi",
      brief: "Delhi is the capital of India.",
    },
    animal: {
      hint: "Wild forest dweller",
      ans: "Deer",
      brief: "Deer are gentle herbivores found in forests.",
    },
    thing: {
      hint: "You sit at it",
      ans: "Desk",
      brief: "Desks are used for studying or working.",
    },
  },
  // E
  4: {
    name: {
      hint: "Genius scientist",
      ans: "Edison",
      brief: "Edison invented the light bulb.",
    },
    place: {
      hint: "Scotland's capital",
      ans: "Edinburgh",
      brief: "Edinburgh is a historic Scottish city.",
    },
    animal: {
      hint: "Bird of prey",
      ans: "Eagle",
      brief: "Eagles are known for their sharp vision.",
    },
    thing: {
      hint: "Breakfast item",
      ans: "Egg",
      brief: "Eggs are a popular source of protein.",
    },
  },
  // F
  5: {
    name: {
      hint: "Psychologist",
      ans: "Freud",
      brief: "Freud is the father of psychoanalysis.",
    },
    place: {
      hint: "Italian city of art",
      ans: "Florence",
      brief: "Florence is famous for Renaissance art.",
    },
    animal: {
      hint: "Clever wild animal",
      ans: "Fox",
      brief: "Foxes are known for their cunning nature.",
    },
    thing: {
      hint: "Eating utensil",
      ans: "Fork",
      brief: "A fork is used to eat solid food.",
    },
  },
  // G
  6: {
    name: {
      hint: "Discovered the telescope",
      ans: "Galileo",
      brief: "Galileo was a famous astronomer and physicist.",
    },
    place: {
      hint: "Swiss city with a lake",
      ans: "Geneva",
      brief:
        "Geneva is known for its beautiful lake and international institutions.",
    },
    animal: {
      hint: "Tallest land animal",
      ans: "Giraffe",
      brief: "Giraffes are the tallest animals on land.",
    },
    thing: {
      hint: "A musical instrument",
      ans: "Guitar",
      brief: "The guitar is a string instrument popular in music.",
    },
  },
  // H
  7: {
    name: {
      hint: "Famous Greek poet",
      ans: "Homer",
      brief: "Homer wrote the Iliad and the Odyssey.",
    },
    place: {
      hint: "Capital of Cuba",
      ans: "Havana",
      brief: "Havana is the capital city of Cuba.",
    },
    animal: {
      hint: "Rides on a saddle",
      ans: "Horse",
      brief: "Horses are strong animals often used for riding.",
    },
    thing: {
      hint: "Worn on the head",
      ans: "Hat",
      brief: "A hat is used as a fashion item or for protection.",
    },
  },
  // I
  8: {
    name: {
      hint: "Famous physicist",
      ans: "Isaac",
      brief: "Isaac Newton developed the laws of motion.",
    },
    place: {
      hint: "Largest city in Turkey",
      ans: "Istanbul",
      brief: "Istanbul is a historic city straddling Europe and Asia.",
    },
    animal: {
      hint: "Reptile with scales",
      ans: "Iguana",
      brief: "Iguanas are herbivorous lizards.",
    },
    thing: {
      hint: "Used to press clothes",
      ans: "Iron",
      brief:
        "An iron is a tool used to remove wrinkles from clothes using heat.",
    },
  },
  // J
  9: {
    name: {
      hint: "Famous Roman general",
      ans: "Julius",
      brief: "Julius Caesar was a renowned Roman general.",
    },
    place: {
      hint: "Capital of Indonesia",
      ans: "Jakarta",
      brief: "Jakarta is the capital city of Indonesia.",
    },
    animal: {
      hint: "Large wild cat",
      ans: "Jaguar",
      brief: "Jaguars are strong and fast predators.",
    },
    thing: {
      hint: "Outer garment for cold",
      ans: "Jacket",
      brief: "A jacket keeps you warm in cold weather.",
    },
  },
  // K
  10: {
    name: {
      hint: "German philosopher",
      ans: "Kant",
      brief: "Kant was a central figure in modern philosophy.",
    },
    place: {
      hint: "Famous city in Japan",
      ans: "Kyoto",
      brief: "Kyoto is known for its temples and cultural heritage.",
    },
    animal: {
      hint: "Australian tree-climber",
      ans: "Koala",
      brief: "Koalas live in eucalyptus trees.",
    },
    thing: {
      hint: "Flies in the sky",
      ans: "Kite",
      brief: "A kite is flown for fun in the wind.",
    },
  },
  // L
  11: {
    name: {
      hint: "US President during Civil War",
      ans: "Lincoln",
      brief: "Abraham Lincoln led the US during the Civil War.",
    },
    place: {
      hint: "Capital of the UK",
      ans: "London",
      brief: "London is the capital of England and the UK.",
    },
    animal: {
      hint: "King of the jungle",
      ans: "Lion",
      brief: "Lions are large predators known as kings of the jungle.",
    },
    thing: {
      hint: "Lights up a room",
      ans: "Lamp",
      brief: "A lamp provides light indoors.",
    },
  },
  // M
  12: {
    name: {
      hint: "Famous composer",
      ans: "Mozart",
      brief: "Mozart was a prolific and influential composer.",
    },
    place: {
      hint: "Capital of Spain",
      ans: "Madrid",
      brief: "Madrid is Spain's capital and largest city.",
    },
    animal: {
      hint: "Climbs trees and eats bananas",
      ans: "Monkey",
      brief: "Monkeys are agile and intelligent primates.",
    },
    thing: {
      hint: "Shows directions",
      ans: "Map",
      brief: "A map helps navigate places.",
    },
  },
  // N
  13: {
    name: {
      hint: "Discovered gravity",
      ans: "Newton",
      brief: "Isaac Newton formulated the law of gravity.",
    },
    place: {
      hint: "Capital of Kenya",
      ans: "Nairobi",
      brief: "Nairobi is the capital city of Kenya.",
    },
    animal: {
      hint: "Lives in the sea and has a horn",
      ans: "Narwhal",
      brief: "Narwhals are marine animals with a spiral tusk.",
    },
    thing: {
      hint: "You write notes in it",
      ans: "Notebook",
      brief: "A notebook is used for writing notes.",
    },
  },
  // O
  14: {
    name: {
      hint: "Award-winning actor",
      ans: "Oscar",
      brief: "Oscar is often associated with awards and performances.",
    },
    place: {
      hint: "Capital of Norway",
      ans: "Oslo",
      brief: "Oslo is Norway's capital city.",
    },
    animal: {
      hint: "Wise bird",
      ans: "Owl",
      brief: "Owls are nocturnal birds symbolizing wisdom.",
    },
    thing: {
      hint: "A fruit rich in Vitamin C",
      ans: "Orange",
      brief: "Oranges are citrus fruits rich in Vitamin C.",
    },
  },
  // P
  15: {
    name: {
      hint: "Ancient Greek philosopher",
      ans: "Plato",
      brief: "Plato was a student of Socrates and teacher of Aristotle.",
    },
    place: {
      hint: "Capital of France",
      ans: "Paris",
      brief: "Paris is the capital and largest city of France.",
    },
    animal: {
      hint: "Eats bamboo",
      ans: "Panda",
      brief: "Pandas are black-and-white bears that love bamboo.",
    },
    thing: {
      hint: "Used to write",
      ans: "Pen",
      brief: "A pen is used to write on paper.",
    },
  },
  // Q
  16: {
    name: {
      hint: "Famous inventor of electricity",
      ans: "Quincy",
      brief: "Quincy is often used as a notable name.",
    },
    place: {
      hint: "A country in the Middle East",
      ans: "Qatar",
      brief: "Qatar is a wealthy country located on the Arabian Peninsula.",
    },
    animal: {
      hint: "Small ground bird",
      ans: "Quail",
      brief: "Quails are small birds often seen on farms.",
    },
    thing: {
      hint: "Keeps you warm at night",
      ans: "Quilt",
      brief: "A quilt is a warm covering used for sleeping.",
    },
  },
  // R
  17: {
    name: {
      hint: "Famous philosopher",
      ans: "Rousseau",
      brief: "Rousseau was a major Enlightenment thinker.",
    },
    place: {
      hint: "Capital of Italy",
      ans: "Rome",
      brief: "Rome is known for its ancient ruins and culture.",
    },
    animal: {
      hint: "Hops around",
      ans: "Rabbit",
      brief: "Rabbits are small, furry animals that hop.",
    },
    thing: {
      hint: "Worn on the finger",
      ans: "Ring",
      brief: "A ring is a circular ornament worn on the finger.",
    },
  },
  // S
  18: {
    name: {
      hint: "Famous playwright",
      ans: "Shakespeare",
      brief:
        "Shakespeare wrote famous plays like 'Hamlet' and 'Romeo and Juliet'.",
    },
    place: {
      hint: "Largest city in Australia",
      ans: "Sydney",
      brief: "Sydney is home to the iconic Opera House.",
    },
    animal: {
      hint: "Graceful water bird",
      ans: "Swan",
      brief: "Swans are elegant birds often seen gliding on lakes.",
    },
    thing: {
      hint: "Used to eat soup",
      ans: "Spoon",
      brief: "A spoon is a utensil used for eating liquid or soft food.",
    },
  },
  // T
  19: {
    name: {
      hint: "Famous inventor and engineer",
      ans: "Tesla",
      brief: "Nikola Tesla was an inventor known for his work on electricity.",
    },
    place: {
      hint: "Capital of Japan",
      ans: "Tokyo",
      brief: "Tokyo is the bustling capital city of Japan.",
    },
    animal: {
      hint: "Striped wild cat",
      ans: "Tiger",
      brief: "Tigers are large, striped wild cats.",
    },
    thing: {
      hint: "Piece of furniture to sit around",
      ans: "Table",
      brief: "A table is used for dining, work, or other activities.",
    },
  },
  // U
  20: {
    name: {
      hint: "Greek hero of the Odyssey",
      ans: "Ulysses",
      brief: "Ulysses is a hero from Greek mythology known for his journey.",
    },
    place: {
      hint: "City in the Netherlands",
      ans: "Utrecht",
      brief: "Utrecht is a historic city in the Netherlands.",
    },
    animal: {
      hint: "Sea creature with spikes",
      ans: "Urchin",
      brief: "Sea urchins are spiny marine animals.",
    },
    thing: {
      hint: "Protects you from rain",
      ans: "Umbrella",
      brief: "An umbrella shields you from rain or sun.",
    },
  },
  // V
  21: {
    name: {
      hint: "Famous painter of sunflowers",
      ans: "VanGogh",
      brief: "Vincent Van Gogh painted 'The Starry Night' and 'Sunflowers'.",
    },
    place: {
      hint: "City of canals in Italy",
      ans: "Venice",
      brief: "Venice is famous for its canals and gondolas.",
    },
    animal: {
      hint: "Large bird of prey",
      ans: "Vulture",
      brief: "Vultures are scavenger birds feeding on carrion.",
    },
    thing: {
      hint: "Holds flowers",
      ans: "Vase",
      brief: "A vase is a container used to hold flowers.",
    },
  },
  // W
  22: {
    name: {
      hint: "Composer of operas",
      ans: "Wagner",
      brief: "Richard Wagner was a famous German composer of operas.",
    },
    place: {
      hint: "Capital of Poland",
      ans: "Warsaw",
      brief: "Warsaw is the capital and largest city of Poland.",
    },
    animal: {
      hint: "Wild canine",
      ans: "Wolf",
      brief: "Wolves are wild ancestors of domestic dogs.",
    },
    thing: {
      hint: "Tells the time",
      ans: "Watch",
      brief: "A watch is worn to keep track of time.",
    },
  },
  // X
  23: {
    name: {
      hint: "Ancient Persian king",
      ans: "Xerxes",
      brief: "Xerxes was a powerful king of the Persian Empire.",
    },
    place: {
      hint: "Historic city in China",
      ans: "Xian",
      brief: "Xian is known for the Terracotta Army.",
    },
    animal: {
      hint: "Small African rodent",
      ans: "Xerus",
      brief: "Xerus is a ground squirrel found in Africa.",
    },
    thing: {
      hint: "Musical instrument",
      ans: "Xylophone",
      brief: "A xylophone is a percussion instrument with wooden bars.",
    },
  },
  // Y
  24: {
    name: {
      hint: "Famous poet",
      ans: "Yeats",
      brief: "W.B. Yeats was a renowned Irish poet.",
    },
    place: {
      hint: "City in Japan",
      ans: "Yokohama",
      brief: "Yokohama is a major port city in Japan.",
    },
    animal: {
      hint: "Long-haired bovine",
      ans: "Yak",
      brief: "Yaks are large animals found in the Himalayas.",
    },
    thing: {
      hint: "Used for knitting",
      ans: "Yarn",
      brief: "Yarn is used to create fabrics through knitting or crocheting.",
    },
  },
};

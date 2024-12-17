const fullForms = ["Name", "Place", "Animal", "Thing"];

const fullFormDiv = document.querySelector("#full-form");
const reasoningDiv = document.querySelector("#reasoning");

function startAnimation() {
  document.querySelectorAll("#letters img").forEach((letter, ind) => {
    setTimeout(() => {
      // Hide the text first (fade-out)
      fullFormDiv.style.opacity = 0;
      reasoningDiv.style.opacity = 0;

      setTimeout(() => {
        // Update the content
        fullFormDiv.textContent = fullForms[ind];

        // Fade the text back in (fade-in)
        fullFormDiv.style.opacity = 1;
        reasoningDiv.style.opacity = 1;

        letter.style.filter = "grayscale(0)";
      }, 500); // Short delay to allow fade-out before updating text

      // Reset after all letters are traversed
      if (ind === document.querySelectorAll("#letters img").length - 1) {
        setTimeout(() => {
          document.querySelectorAll("#letters img").forEach((letter) => {
            letter.style.filter = "grayscale(100%)";
          });
          startAnimation(); // Restart animation
        }, 4000); // 4-second break before restarting
      }
    }, ind * 2000); // Delay between each letter's appearance
  });
}

// Start the animation cycle
startAnimation();

const gsapAnimations = [
  // 0. Smile animation
  {
    duration: 2, // Duration for the full motion
    x: (i) => i * 40 - 60, // Adjust spacing for 4 letters
    y: (i) => Math.sin(i * 1) * 50 - 20, // Modify curve for 4 letters
    rotate: (i) => i * 10 - 15, // Adjust rotation for 4 letters
    ease: "power1.inOut", // Smooth easing effect
    repeat: -1, // Repeat infinitely
    yoyo: true, // Reverse the animation to create a loop
    stagger: 0.2, // Stagger animation with a small delay
  },
  // 1. Vertical movement and rotation
  {
    duration: 1.5, // Duration of the animation for each letter
    y: (i) => (i % 2 === 0 ? -20 : 20), // Alternating vertical movement (up for even letters, down for odd)
    rotate: (i) => (i % 2 === 0 ? 10 : -10), // Alternating rotation (clockwise for even, counterclockwise for odd)
    ease: "power2.inOut", // Smooth easing for the motion
    stagger: 0.2, // Stagger between letters
    repeat: -1, // Repeat infinitely
    yoyo: true, // Reverse the animation to make it continuous
  },
  // 2. Zoom In and Rotate
  {
    duration: 1.5,
    scale: 1.3, // Scale up the letters
    rotate: 360, // Rotate a full circle
    ease: "power1.inOut", // Smooth transition for scaling and rotation
    stagger: 0.2, // Delay between each letter
    repeat: -1,
    yoyo: true, // Reverse back to original size and rotation
  },
  // 3. Wave and Float Effect
  {
    duration: 2,
    y: (i) => Math.sin(i * 1.5) * 30, // Create wave effect with vertical motion
    rotate: (i) => i * 15 - 30, // Rotate letters slightly
    ease: "sine.inOut", // Smooth wave motion
    stagger: 0.25, // Delay for wave effect
    repeat: -1,
    yoyo: true, // Reverse motion for continuous wave
  },
  // 4. Horizontal Slide and Bounce Effect
  {},
];

const animationInd = Math.floor(Math.random() * gsapAnimations.length);

if (animationInd == 4) {
  gsap.fromTo(
    "#letters img",
    {
      x: (i) => (i % 2 === 0 ? -100 : 100), // Slide from left for even letters, right for odd
    },
    {
      duration: 1.5,
      x: 0,
      ease: "bounce.out",
      stagger: 0.3,
      repeat: -1,
      yoyo: true,
    }
  );
} else {
  gsap.to("#letters img", gsapAnimations[animationInd]);
}

document.querySelector("#proceedToMain").addEventListener("click", (el) => {
  window.parent?.postMessage({ type: "getScore" }, "*");
  bgdMusic.play();
  document.querySelector("#gameDiv").style.display = "flex";
  document.querySelector("#teamDetails").style.display = "none";
  document.querySelector("#landing-section").style.display = "none";
  el.target.style.display = "none";
});

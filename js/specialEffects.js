"use strict";

// typing animation
// var typed = new Typed("#typing-text", {
//   strings: ["Flow Theory AI Agency"],
//   typeSpeed: 200,
//   backSpeed: 200,
//   loop: true,
//   showCursor: false,
// });

//gsap scramble text effect
// gsap.to("#text", {
//     duration: 0.5,
//     text: "Flow Theory AI Agency", // Final text
//     ease: "power2.out",
//     onUpdate: function () {
//         let chars = "!@#$%^&*()_+-=[]{}|;:',.<>?/1234567890";
//         let target = this.targets()[0]; // Get the element
//         let currentText = target.innerText; // Get current text
//         let scrambled = currentText
//             .split("")
//             .map((char, i) => (Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char))
//             .join("");
//         target.innerText = scrambled; // Update text with scramble effect
//     },
//     onComplete: function () {
//         document.getElementById("text").innerText = "Flow Theory AI Agency"; // Final reveal
//     }
// });

// function scramble(finalText) {
//     const chars = "!@#$%^&*()_+-=[]{}|;:',.<>?/1234567890";
//     let scrambled = finalText
//         .split("")
//         .map(() => chars[Math.floor(Math.random() * chars.length)])
//         .join("");
//     return scrambled;
// }

// Scramble and writing  Effect
gsap.to("#text", {
  duration: 5,
  text: "Flow Theory AI Agency",
  ease: "power2.out",
});

// shaking effect
//gsap.to("#cta", {
//  x: "10px",
//  duration: 0.2,
//  repeat: 20,
//  yoyo: true,
//  ease: "rough({ template: none.out, strength: 3, points: 20, taper: 'none', randomize: true, clamp: false })",
//});
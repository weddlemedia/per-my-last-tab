document.addEventListener("DOMContentLoaded", () => {
  const backgrounds = [
    "#d6dce4", // corporate slate
    "#dcd0c4", // greige
    "#c9d5ca", // muted sage
    "#d4c5d0", // dusty lavender
    "#dbc8b8", // warm sand
    "#c3ced6", // steel blue
    "#d8cfc4", // parchment
    "#c9c0b6", // boardroom taupe
    "#cfd8d0", // conference-room green
    "#d5cad4", // muted mauve
    "#c4c9d4", // PowerPoint blue
    "#d9d2c7", // beige of broken dreams
  ];

  const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.body.style.backgroundColor = bg;

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote-text").textContent = quote.text;
  document.getElementById("quote-attribution").textContent = `\u2014 ${quote.attribution}`;
});

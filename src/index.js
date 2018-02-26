const scribble = require("scribbletune");
const path = require("path");
const outputDirectory = "./midi";
let chords = scribble.clip({
  notes: [
    "F#min",
    "C#min",
    "Dmaj",
    "Bmin",
    "Emaj",
    "Amaj",
    "Dmaj",
    "C#min",
    "Amaj"
  ],
  pattern: "x_x_x_--".repeat(8),
  sizzle: true
});

scribble.midi(chords, path.resolve(outputDirectory, "chords.mid"));
let notes = ["c4", "c4", "e4", "e4", "g3", "c5", "c5", "c5", "e5", "g3"];
let clip = scribble.clip({
  notes: notes,
  pattern: "x_xx_xx_x_x_x_xx".repeat(89)
});

scribble.midi(clip, path.resolve(outputDirectory, "transpose.midi"));

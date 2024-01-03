import clipboardy from 'clipboardy';

export function nomihoy() {
  const processArgs = process.argv.slice(2);

  if (processArgs.length >= 1) {
    const nomihoy = processArgs.join(" ");

    const lines = [];
    const maxWidth = 100; // Assuming 100 characters as the maximum width for each line
    const height = 20; // Number of lines

    for (let i = 0; i < height; i++) {
      let line = "";
      let charToUse = (i < height / 2) ? "@" : "-"; // Use "@" for the first half, "-" for the second half

      for (let j = 0; j < maxWidth; j++) {
        if (j < maxWidth / 2 - Math.abs(height / 2 - i) || j > maxWidth / 2 + Math.abs(height / 2 - i)) {
          line += charToUse;
        } else {
          line += " ";
        }
      }

      console.log(line);
      lines.push(line);
    }

    // Join lines and copy the output to the clipboard
    const output = lines.join('\n');

    // Copy the output to the clipboard
    try {
      clipboardy.writeSync(output);
      console.log(`Copied to clipboard!`);
    } catch (err) {
      console.error(`\nError copying to clipboard: ${"message" in err ? err.message : err}`);
    }
  } else {
    console.error('Please provide at least one command line argument.');
  }
}

import { config } from 'dotenv';
import { writeFile, readFile } from 'fs/promises';

config();

const text =
  'Hello! This is some sample text that will be written to our file.';

async function main() {
  try {
    await writeFile(process.env.FILENAME, text);
    const content = await readFile(process.env.FILENAME, 'utf-8');
    console.log(content);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();

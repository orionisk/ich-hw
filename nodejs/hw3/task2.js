import { writeFile, readFile } from 'fs/promises';

async function handleFile() {
  try {
    await writeFile('info.txt', 'Node.js is awesome!');
    console.log('Successfully wrote to info.txt');

    const content = await readFile('info.txt', 'utf8');
    console.log('File contents:', content);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

handleFile();

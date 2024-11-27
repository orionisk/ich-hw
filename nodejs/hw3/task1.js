import { mkdir, rmdir } from 'fs/promises';

async function manageFolders() {
  try {
    await mkdir('./myFolder');
    console.log('Directory "myFolder" created successfully');

    await rmdir('./myFolder');
    console.log('Directory "myFolder" removed successfully');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

manageFolders();

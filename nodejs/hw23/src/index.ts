const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const firstPromise = async (): Promise<string> => {
  await delay(100);
  return 'First promise completed';
};

const secondPromise = async (): Promise<string> => {
  await delay(200);
  return 'Second promise completed';
};

const thirdPromise = async (): Promise<string> => {
  await delay(300);
  return 'Third promise completed';
};

const sequentialPromises = async () => {
  const result1 = await firstPromise();
  console.log(result1);

  const result2 = await secondPromise();
  console.log(result2);

  const result3 = await thirdPromise();
  console.log(result3);
};

const processStrings = async (strings: string[]): Promise<string[]> => {
  const processString = async (str: string): Promise<string> => {
    await delay(600);
    return str.toUpperCase();
  };

  return Promise.all(strings.map(processString));
};

const handlePromiseErrors = async () => {
  const failingPromise = async () => {
    await delay(300);
    throw new Error('This promise failed');
  };

  try {
    await Promise.all([firstPromise(), secondPromise(), failingPromise()]);
  } catch (error) {
    console.error(
      'Error caught:',
      error instanceof Error ? error.message : error
    );
  }
};

const handleDynamicPromises = async (numbers: number[]) => {
  const createPromise = async (ms: number): Promise<string> => {
    await delay(ms);
    return `Completed after ${ms}ms`;
  };

  const results = await Promise.all(numbers.map(createPromise));

  results.forEach(result => console.log(result));
};

const runAllTasks = async () => {
  console.log('Task 1');
  await sequentialPromises();

  console.log('\nTask 2');
  const strings = ['string1', 'string2', 'string3'];
  const upperCaseStrings = await processStrings(strings);
  console.log(upperCaseStrings);

  console.log('\nTask 3');
  await handlePromiseErrors();

  console.log('\nTask 4');
  await handleDynamicPromises([100, 200, 300]);
};

runAllTasks().catch(console.error);

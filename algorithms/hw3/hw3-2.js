let towers = {
  left: [],
  middle: [],
  right: []
};

let stepCount = 0;

function printTowers() {
  const maxHeight = Math.max(
    towers.left.length,
    towers.middle.length,
    towers.right.length
  );

  for (let i = maxHeight - 1; i >= 0; i--) {
    let line = '';
    for (const tower of ['left', 'middle', 'right']) {
      line += '|';
      line += towers[tower][i] ? ` ${towers[tower][i]} ` : '   ';
      line += '|  ';
    }
    console.log(line);
  }
  console.log('='.repeat(20));
}

function initializeTowers(n, origin) {
  towers.left = [];
  towers.middle = [];
  towers.right = [];

  for (let i = n; i > 0; i--) {
    towers[origin].push(i);
  }
  console.log('Initial state:');
  printTowers();
}

function hanoiTower(n, origin, target, temp) {
  if (n === 1) {
    const disk = towers[origin].pop();
    towers[target].push(disk);
    stepCount++;
    console.log(
      `Step ${stepCount}: Move disk ${disk} from ${origin} to ${target}`
    );
    printTowers();
  } else {
    hanoiTower(n - 1, origin, temp, target);
    const disk = towers[origin].pop();
    towers[target].push(disk);
    stepCount++;
    console.log(
      `Step ${stepCount}: Move disk ${disk} from ${origin} to ${target}`
    );
    printTowers();
    hanoiTower(n - 1, temp, target, origin);
  }
}

const n = 3;
initializeTowers(n, 'left');
hanoiTower(n, 'left', 'right', 'middle');
console.log(`Total steps: ${stepCount}`);

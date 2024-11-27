# Docker & cloud technologies: Домашнее задание 3 (morning)

Создать Dockerfile для запуска JavaScript-приложения, которое использует библиотеку cowsay для вывода информации о системе. Пришлите готовый Dockerfile.

Создать директорию для проекта.

Сохранить исходный код приложения в файл app.js.

Создать файл package.json для указания зависимостей проекта и добавить в него cowsay.

Создать файл Dockerfile.

Использовать официальный образ Node.js в качестве базового (например, node:18-slim).

Установить зависимости при помощи команды в Dockerfile (не забываем скопировать app.js и package.json, используя COPY).

Выполнить установку зависимостей:

Dockerfile
RUN npm install --only=production

Использовать команду для запуска приложения:

Dockerfile
CMD ["npm", "start"]

Код приложения:

app.js

const cowsay = require("cowsay");

const os = require("os");

function modernPrint(data) {

const { system, release, version, node, processor } = data;

const message = `

Hello, Stranger!

Here's your info you requested:

SYSTEM INFO: ${system}

SYSTEM RELEASE: ${release}

SYSTEM VERSION: ${version}

SYSTEM NODE: ${node}

SYSTEM PROCESSOR: ${processor}

`;

console.log(cowsay.say({

text: message,

e: "oO",

T: "U "

}));

}

const requestData = {

system: os.type(),

release: os.release(),

version: os.version(),

node: os.hostname(),

processor: os.cpus()[0].model

};

modernPrint(requestData);

{

"name": "node-cowsay-app",

"version": "1.0.0",

"description": "A simple Node.js app that prints system info using cowsay.",

"main": "app.js",

"scripts": {

    "start": "node app.js"

},

"dependencies": {

    "cowsay": "^1.5.0"

}

}

Решение:

Dockerfile:

FROM node:18-slim

WORKDIR /usr/src/app

COPY package\*.json ./

RUN npm install --only=production

COPY app.js ./

CMD ["npm", "start"]

Сборка:

docker build -t node-cowsay-app .

Запуск контейнера:

docker run --rm node-cowsay-app

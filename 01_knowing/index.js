// работа с модулем os. os.platform() показывает платформу пользователя
// const os = require('os');
// let res = os.platform();
// console.log(res);

// импортировал модуль my_math и вывел в консоль результаты функций add и minus
// const my_math = require('./my_math');
// let res1 = my_math.add(4, 5);
// let res2 = my_math.minus(7, 5);
// console.log(`Res1: ${res1}, Res2: ${res2}`);

// (fs.readFile)прочитали файл some.txt и (fs.writeFile)дописали в него Some text
// const fs = require('fs');

// let result = fs.readFile('some.txt', 'utf-8', (err, data) => {
//   fs.writeFile('some.txt', data + '\nSome text', (err, data) => {
//     console.log('Все сработало!');
//   });
// });

// создание папки text-files и в папке файл some.txt с текстом Hello!
// const fs = require('fs');

// fs.mkdir('text-files', () => {
//   fs.writeFile('./text-files/some.txt', 'Hello!', () => {});
// });

// удаление папки text-files с содержимым
// fs.unlink('./text-files/some.txt', () => {
//   fs.rmdir('./text-files', () => {});
// });

// Создание своего сервера. Отслеживание URL. Шаблоны HTML
const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
  });

  if (req.url === '/')
    fs.createReadStream('./templates/index.html').pipe(res);
  else if (req.url === '/about')
    fs.createReadStream('./templates/about.html').pipe(res);
  else fs.createReadStream('./templates/error.html').pipe(res);
});

const PORT = 3000;
const HOST = 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`Started server: http://${HOST}:${PORT}}`);
});

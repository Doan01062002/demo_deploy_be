const jsonServer = require("json-server");

// tạo máy chủ
const server = jsonServer.create();

const router = jsonServer.router("db.json");

const midleware = jsonServer.defaults();

server.use(midleware);
server.use(router);

// lắng nghe cổn của ứng dụng
server.listen(3000, () => {
  console.log("thành công");
});

module.exports = server;

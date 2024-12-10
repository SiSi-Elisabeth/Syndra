const { Sequelize } = require("sequelize");

//database, username, password, 
const db = new Sequelize({
  dialect: 'mysql',
  database: 'syndra_dev',
  username: 'root',
  password: '123456',
  logging: false,
  host: '127.0.0.1',
  port: 3307, 
  define: {
    freezeTableName: true, // 禁止给表名自动添加复数，否则表名自动默认为复数
    timestamps: false, // 全局设置，禁止表自动添加更新时间和创建时间
  },
  sync: {
    // 不会强制删除现有表并且重新创建
    force: false,
  },
});
db.sync(); // 如果表不存在，就创建表（如果已经存在，不需要做任何操作）
// 验证连接
// db.authenticate()
// .then(() => {
//    console.log('Connection has been established successfully.');
// })
// .catch(err => {
//    console.error('Unable to connect to the database:', err);
// });

module.exports = db;
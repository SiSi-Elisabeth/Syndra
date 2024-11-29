const { Model, DataTypes } = require('sequelize');
const db = require('@/config/db');
const dayjs = require('dayjs');

// class User extends Model {}

const User = db.define('user',{
  openid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true, // 设置为主键
    comment:'唯一ID'
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '唯一ID'
  },
  avatar: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '头像'
  },
  createTime: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    comment: '创建时间'
  }
}, {
  // 这是其他模型参数
  timestamps: false
});
// User.init({
//   nickname: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   avatar: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   openid: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   }
// }, {
//   sequelize,
//   modelName: 'User'
// });

module.exports = User;
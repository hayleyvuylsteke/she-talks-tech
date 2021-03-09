const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Post model
class BlogPost extends Model {}

BlogPost.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      post_title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
      },
      post_content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [60]
        }
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'blogpost'
    }
  );

  module.exports = BlogPost;
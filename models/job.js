"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Job.belongsTo(models.User, {
        foreignKey: "authorId",
      });
      Job.belongsTo(models.Company, {
        foreignKey: "companyId",
      });
      // define association here
    }
  }
  Job.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title cannot be null",
          },
          notEmpty: {
            msg: "Title cannot be empty",
          },
        },
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description cannot be null",
          },
          notEmpty: {
            msg: "Description cannot be empty",
          },
        },
      },
      imgUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "ImgUrl cannot be null",
          },
          notEmpty: {
            msg: "ImgUrl cannot be empty",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Active",
        validate: {
          notNull: {
            msg: "Status cannot be null",
          },
          notEmpty: {
            msg: "Status Cannot be empty",
          },
        },
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Company Id cannot be null",
          },
          notEmpty: {
            msg: "Company Id cannot be empty",
          },
        },
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Author Id cannot be null",
          },
          notEmpty: {
            msg: "Author Id cannot be empty",
          },
        },
      },
      jobType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "JobType cannot be null",
          },
          notEmpty: {
            msg: "JobType cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Job",
    }
  );
  return Job;
};

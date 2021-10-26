const { DataTypes } = require("sequelize");
const { sequelize } = require(""); //TODO: database connection
const bcrypt = require("bcrypt");

const nameValidationRule = /[a-z A-Z]{2,45}/; //FIXME:RegExp, no incluye caracteres especiales. Refinar
const saltRounds = 10; //dotenv?

//USER MODEL
const User = sequelize.define(
    "User",
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: { isEmail: true },
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                is: {
                    args: nameValidationRule,
                    msg: "Invalid first name",
                },
            },
        },
        lastName: {
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                is: {
                    args: nameValidationRule,
                    msg: "Invalid last name",
                },
            },
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            validate: {
                isBoolean: ((isAdmin) => {
                    return typeof isAdmin === "boolean";
                })(),
            },
        },
    },
    {
        tableName: "user_table", //FIXME:exact table name at the database
        timestamps: false,
        hooks: {
            beforeCreate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(saltRounds, "a");
                    user.password = bcrypt.hashSync(user.password, salt); //replaces the incoming password for its hashed state before registering it into the database
                }
            },
            beforeUpdate: async (user) => {
                if (user.password) {
                    const salt = await bcrypt.genSaltSync(saltRounds, "a");
                    user.password = bcrypt.hashSync(user.password, salt); //replaces the incoming password for its hashed state before updating it into the database
                }
            },
        },
    }
);

module.exports = { User };
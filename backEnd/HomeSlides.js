const { DataTypes } = require("sequelize");
const { sequelize } = require(""); //TODO: database connection
const { Organization } = require(""); //TODO: Organization Model

//HOME SLIDES MODEL
const HomeSlides = sequelize.define(
    "HomeSlides",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: { isInt: true },
        },
        imageUrl: {
            type: DataTypes.STRING(500),
            allowNull: false, //FIXME: allow null?
            validate: { isUrl: true },
        },
        text: {
            type: DataTypes.STRING(2000),
            allowNull: false, //FIXME: allow null?
            validate: { is: true }, //TODO: set validation
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: true, //FIXME: allow null?
            validate: { isInt: true },
        },
        organizationId: {
            type: DataTypes.INTEGER, //TODO: assuming an Auto Increment id
            allowNull: false, //FIXME: allow null?
            references: { model: Organization, key: "" },
            validate: { is: true }, //TODO: set validation
        },
    },
    {
        tableName: "home_slides_table", //FIXME: exact table name at the database
        timestamps: false,
    }
);

module.exports = { HomeSlides };

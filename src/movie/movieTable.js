const {DataTypes} = require("sequelize")
const {sequelize} = require("../db/connection")

const Movie = sequelize.define("Movies", {
    title : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    actor : {
        type: DataTypes.STRING, 
        defaultValue: "Not Specified",
    },
    director: {
        type: DataTypes.STRING,
        defaultValue: "Not specified",
    }


})

module.exports = Movie
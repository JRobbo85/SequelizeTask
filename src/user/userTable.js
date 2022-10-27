const {DataTypes} = require("sequelize")
const {sequelize} = require("../db/connection")

const User = sequelize.define("Users", {
    name : {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, 
    },
    age : {
        type: DataTypes.INTEGER, 
        allowNull: false,
    },

})

module.exports = User
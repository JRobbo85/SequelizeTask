const User = require("./userTable")

exports.createUser = async (userObject) => {
    try{
        await User.create(userObject);
        console.log("User Created")
    }
    catch (error) {
        console.log(error)
    }
}

exports.readUser = async (filterObject) => {
    try{
        if (filterObject){
            return await User.findOne({where: filterObject})
        }
        else {
            return await User.findAll()
        }
    }
    catch (error){
        console.log(error)
    }
}

exports.updateUser = async (updateObject, filterObject) => {
    console.log(updateObject, filterObject)
    try {
        await User.update(updateObject, {where: filterObject})
    }
    catch (error) {
        console.log(error)
    }
}

exports.deleteUser = async (filterObject) => {
    try {
        await User.destroy({where: filterObject})
    }
    catch (error) {
        console.log(error)
    }
}
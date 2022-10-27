const yargs = require("yargs")
const {sequelize} = require("./db/connection")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movie/movieFunctions")
const {createUser, readUser, updateUser, deleteUser} = require("./user/userFunctions")


const app = async (yargsObject) => {
try{
    await sequelize.sync();
    if (yargsObject.createMovie){
        await createMovie({
            title: yargsObject.title, 
            actor: yargsObject.actor, 
            director: yargsObject.director})
            // console.log(await readMovie())
    let output = {}
    let table = await readMovie()
    for (let movie of table) {
        output.title = movie.title
        output.actor = movie.actor
        output.director = movie.director
        console.log(output)
    }

    }
    else if (yargsObject.readMovie){
        console.log(await readMovie({[yargsObject.key] : yargsObject.value}))
        // let output = {}
        // let table = await readMovie()
        // for (let movie of table) {
        //     output.title = movie.title
        //     output.actor = movie.actor
        //     output.director = movie.director
        //     console.log(output)
        // }
    }
    

    else if (yargsObject.readAllMovies) {
        // console.log(await readMovie())
        let output = {}
        let table = await readMovie()
        for (let movie of table) {
            output.title = movie.title
            output.actor = movie.actor
            output.director = movie.director
            console.log(output)
        }
    }

    else if (yargsObject.updateMovie){                          //Command Example  node src/app.js --updateMovie --filterKey title --filterValue Predator --updateKey director --updateValue "John McTiernan"
        await updateMovie(
            {[yargsObject.updateKey] : yargsObject.updateValue},  
            {[yargsObject.filterKey] : yargsObject.filterValue}
       )
            
            let output = {}
            let table = await readMovie()
            for (let movie of table) {
                output.title = movie.title
                output.actor = movie.actor
                output.director = movie.director
                console.log(output)
            }

    }

    else if (yargsObject.deleteMovie){
        await deleteMovie({ [yargsObject.key] : [yargsObject.value]})
        let output = {}
        let table = await readMovie()
        for (let movie of table) {
            output.title = movie.title
            output.actor = movie.actor
            output.director = movie.director
            console.log(output)
        }
    }

    else if (yargsObject.createUser){
        await createUser({
            name: yargsObject.name, 
            age: yargsObject.age })
            // console.log(await readMovie())
    let output = {}
    let table = await readUser()
    for (let user of table) {
        output.name = user.name
        output.age = user.age
        console.log(output)
    }

    }
    else if (yargsObject.readUser){
        console.log(await readUser({[yargsObject.key] : yargsObject.value}))
        // let output = {}
        // let table = await readMovie()
        // for (let movie of table) {
        //     output.title = movie.title
        //     output.actor = movie.actor
        //     output.director = movie.director
        //     console.log(output)
        // }
    }
    

    else if (yargsObject.readAllUsers) {
        // console.log(await readMovie())
        let output = {}
        let table = await readUser()
        for (let user of table) {
            output.name = user.name
            output.age = user.age
            console.log(output)
        }
    }

    else if (yargsObject.updateUser){
        await updateUser(
             {[yargsObject.updateKey] : yargsObject.updateValue},  
             {[yargsObject.filterKey] : yargsObject.filterValue}
        )
        
        let output = {}
        let table = await readUser()
        for (let user of table) {
            output.name = user.name
            output.age = user.age
            console.log(output)
        }

    }

    else if (yargsObject.deleteUser){
        await deleteUser({ [yargsObject.key] : [yargsObject.value]})
        let output = {}
        let table = await readUser()
        for (let user of table) {
            output.name = user.name
            output.age = user.age
            console.log(output)
        }
    }

    else {
        console.log("Incorrect Command")
    }

    await sequelize.close();
}
catch (error) {
    console.log(error);
    await sequelize.close();
}

}


app(yargs.argv)
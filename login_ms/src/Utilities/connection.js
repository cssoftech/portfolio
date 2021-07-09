const { Schema } = require("mongoose");
const Mongoose = require("mongoose")
const consul = require("consul")()

Mongoose.Promise = global.Promise;

Mongoose.set('useCreateIndex', true)


const userSchema = Schema({
    userId: String,
    userProfile:{
        userName: String,
        mobileNo:Number,
        userType: { type: String, enum: ['Admin', 'developer', 'customer'] }

    },
    userCred:{
        email:String,
        password:String,
    },
    
}, { collection: "User" });

let config = ""
let collection = {};

consul.kv.get('CSsoftMSConfig',(err,result)=>{
    config=JSON.parse(result.Value)
    //console.log(config);
    const url = `${config.DataSource}://${config.DbHost}:${config.DbPort}/${config.DbName}`;
    if(Mongoose.Connection.readyState === 1){
        Mongoose.connection.close()
    }
    // console.log(collection);
    collection.getUserrCollection = () => {
        return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
            return database.model('User', userSchema)
        }).catch((error) => {
            let err = new Error("Could not connect to Database");
            err.status = 500;
            throw err;
        })
    }
})


const watch = consul.watch({
    method : consul.kv.get,
    options:{
        key : 'CSsoftMSConfig'
    },
    backoffFactor:1000,

})
//console.log(watch);

watch.on('change',(data , resw)=>{
    //console.log(data.Value);
    config=JSON.parse(data.Value)
    //console.log(config);
    const url = `${config.DataSource}://${config.DbHost}:${config.DbPort}/${config.DbName}`;
    if(Mongoose.Connection.readyState === 1){
        Mongoose.connection.close()
    }
    collection.getUserCollection = () => {
        return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
            return database.model('User', userSchema)
        }).catch((error) => {
            let err = new Error("Could not connect to Database");
            err.status = 500;
            throw err;
        })
    }
})

module.exports = collection;


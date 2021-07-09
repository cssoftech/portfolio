const collection = require('../Utilities/connection');

const userData = [
    {
        userId: "CU1001",
        userProfile:{
            userName: "Roni paul",
            mobileNo:9903245034,
            userType: "Admin"
    
        },
        userCred:{
            email:"ronipaul9972@gmail.com",
            password:"Roni#8981",
        }
    }
]



exports.setupDb = () => {
    console.log("setup in progress........");
    return collection.getUserCollection().then((user) => {
        return user.deleteMany().then(() => {
            return user.insertMany(userData).then((data) => {
                if (data) return "Insertion Successfull"
                else {
                    let err = new Error("Insertion failed");
                    err.status = 400;
                    throw err;
                }
            })
        })
    })
}
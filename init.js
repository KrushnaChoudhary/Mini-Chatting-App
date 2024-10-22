const mongoose = require("mongoose");

const Chat = require("./Models/chat.js");

main ()
.then(()=> {
    console.log("Connection successfull");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from : "mohan",
        to : "rohan",
        message : "send me your exam sheets",
        created_at : new Date(),
    },
    {
        from : "mohit",
        to : "rohit",
        message : "teach me JS callbacks",
        created_at : new Date(),
     },
     {
        from : "amit",
        to : "sumit",
        message : "all the best!",
        created_at : new Date(),
     }
];

Chat.insertMany(allChats);
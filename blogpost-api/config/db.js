const mongoose =require('mongoose');

let dbUrl = 'mongodb+srv://blogpost:1234@blogs-post.mybmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

//check db connection
const db = mongoose.connection;
db.on('error', ()=>{
    console.log('cannot connect to db.');
});
db.once('open', ()=>{
    console.log('db connected.')
})
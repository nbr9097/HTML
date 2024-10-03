const express=require('express')
const path=require('path')  //get directory path
const app=express()
const port=3000
const MongoClient=require('mongodb').MongoClient;
const{ ObjectId }=require('mongodb');
const pug=require('pug');
const bodyParser=require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','pug');

const url='mongodb://localhost:27017/student';
const dbName='student';
let db;

//connect to MongoDb
MongoClient.connect(url,
   {
    useNewUrlParser:true,
    useUnifiedTopology:true})
   .then(async client=>{
    console.log('Connected to MongoDB');
    db=client.db(dbName);

// create user form
app.get('/user', async (req, res)=> {
    try{
        const user = { name:'ramu', email: 'ram@gmail.com'};
        const result = await db.collection('user').insertOne(user);
        res.send({ message: 'user created successfully'});
       }
    catch(err) {
        res.status(500).send({ message: 'error creating user'});
    }
});

//read operation
app.get('/readUser', async (req, res)=> {
    try{
        const user = await db.collection('user').find().toArray();
        res.send(user);
       }
    catch(err) {
        res.status(500).send({ message: 'error fetching user'});
    }
});

//delet operation

app.get('/deleteUser/:id',async (req, res)=> {
    try{
        const id=req.params.id;
        if(!ObjectId.isValid(id)){
            res.status(400).send({message:'invalid objectid'});
            return;
        }
        const result=await db.collection('user').deleteOne({_id:new ObjectId(id)});
        res.send({message:'user deleted successfully'});
    } catch (err){
        res.status(500).send({message:'error deleting user'});
    }
});
   //start the server
   app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
   })
})
.catch(err=>{
    console.log(err);
});
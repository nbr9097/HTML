const express=require('express')
const path=require('path')  //get directory path
const app1=express()
const port=3000
const fs=require('fs')

app1.use(express.json())
app1.use(express.static('public'))// here public is a folder
app1.use(express.urlencoded()) //post method used there in the form

app1.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'index2.html'))   //html page join
})

app1.get('/regis2',(req,res)=>{
    res.sendFile(path.join(__dirname,'form2.html'))  
})
app1.post('/submit2',(req,res)=>{
    formData=req.body;
    console.log(formData);
    name1=formData.name2;
    email1=formData.email;
    password1=formData.password;
    console.log(`Name: ${name1}`);
    console.log(`Mail Id: ${email1}`);
    console.log(`Password: ${password1}`);

    //append the details
    fs.appendFile('formdetails.txt',JSON.stringify(formData,null,2), function(err){
        if(err){
            console.error(err);
            return;
        }
        console.log("file append succesfully");   
    });

    fs.appendFile('forloop.txt','',(err)=>{
        if(err){
            console.error(err);
            res.status(500).send('Error writing to file');
        }
        else{
            Object.keys(formData).forEach((key)=>{
                const data=`${key}:${formData[key]}\n`;
                fs.appendFile('forloop.txt',data,(err)=>{
                    if(err){
                        console.error(err);
                    }
                });
            });
            res.send('Form submitted successfully')
        }
    })
})


app1.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
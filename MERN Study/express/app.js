const express=require('express')
const path=require('path')  //get directory path
const app=express()
const port=3000
app.use(express.static('public'))// here public is a folder
app.use(express.urlencoded()) //post method used there in the form 

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))   //html page join
})

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'))   //contact page join
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))   //about page join
})
app.get('/news',(req,res)=>{
    res.sendFile(path.join(__dirname,'news.html'))   //html page join
})
app.get('/sylbs',(req,res)=>{
    res.sendFile(path.join(__dirname,'sylbs.html'))  
})
app.get('/regis',(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'))  
})
app.get('/download',(req,res)=>{
    res.download(path.join(__dirname,'Public\images\home.jfif'))  
})
app.get('/fileDwload',(req,res)=>{
    res.download(path.join(__dirname,'Public/files/eng.pdf'))  
})
app.post('/submit',(req,res)=>{
    formData=req.body;
    console.log(formData);
    name1=formData.name2;
    email1=formData.email;
    password1=formData.password;
    console.log(`Name: ${name1}`);
    console.log(`Mail Id: ${email1}`);
    console.log(`Password: ${password1}`);
})
app.get('/',(req,res)=>{
    res.send('Hello world')
})
app.get('/news',(req,res)=>{
    res.send('News page')
})

app.post('/news',(req,res)=>{
    res.send('News posted')
})

app.put('/news',(req,res)=>{
    res.send('News edited')
})

app.delete('/news',(req,res)=>{
    res.send('News deleted')
})
app.get('/download',)


app.get('/about',(req,res)=>{
    res.send('About page')
})
app.get('/contact',(req,res)=>{
    res.send('Contact page')
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
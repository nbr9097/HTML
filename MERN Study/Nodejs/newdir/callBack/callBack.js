function greet(name,callback){
    console.log('hello' + name);
    //simulate some delay using setTimeout (which is asynchronous)
   setTimeout(()=>{
 callback();
   },2000);//2000 means here 2 seconds
   }
   
   
   
   greet('alice',() =>{
   console.log('this happens after 2 seconds');
   });
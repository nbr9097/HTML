let promise=new Promise((resolve,reject)=>{
    //simulate a delay with sttimout(like waiting for data)
    setTimeout(()=>{
        let success=true;//lets assume operation is successfull
        if(success){
            resolve('operation successfull');//fullfill the promise
        }
        else{
            reject('operation failed');//reject the promise

        }


        },2000);
    });
    promise.then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })

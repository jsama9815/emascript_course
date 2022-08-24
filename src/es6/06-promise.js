const anotherfunction = () =>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Hey!!');
        }else{
            reject('whooooops!');
        }

    })
}
anotherfunction()
.then(Response => console.log(Response))
.catch(err => console.log(err));
//enahced object literals

function newuser(user,age,country,uid){
    return{
        user,
        age,
        country,
        id:uid
    }
}

console.log(newuser("gndx",34,"Mx",1));

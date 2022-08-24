function newuser(name, age, country){
    var name = name || 'oscar';
    var age = age || 23;
    var country = country || 'mexico';
    console.log(name, age, country);
}
newuser();
newuser('david',15,'usa');

function newadmin(name='oscar', age = 32 , country = 'cl'){
    console.log(name,age,country);
}
newadmin();
newadmin('admin',17,'peru');
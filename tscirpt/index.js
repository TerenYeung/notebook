function greeter(person) {
    return 'Hello' + person.firstName;
}
// var person = 'Teren!'
var person = {
    firstName: 'Teren',
    lastName: 'Yeung'
};
console.info(greeter(person));

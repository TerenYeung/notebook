interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person){
  return 'Hello'  + person.firstName;
}

// var person = 'Teren!'
let person = {
  firstName: 'Teren',
  lastName: 'Yeung'
}

console.info(greeter(person));


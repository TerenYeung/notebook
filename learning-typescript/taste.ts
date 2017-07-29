// function say(text: string) {
// console.log(text)
// }
// say(123)

// function getDefaultValue (key, emphasis) {
//   let ret;
//   if (key === 'name') {
//     ret = 'GuangWong';
//   } else if(key=== 'gender') {
//     ret = 'Man';
//   } else if (key === 'age') {
//     ret = 23;
//   } else {
//      throw new Error('Unkown key ');
//   }
//   if (emphasis) {
//     ret = ret.toUpperCase();
//   }
//   return ret;
// }

// var a = getDefaultValue('name'); // GuangWong
// var b = getDefaultValue('gender', true) // MAN
// var c = getDefaultValue('age', true) // Error: toUpperCase is not a function

// interface Profile {
//   name: string;
//   gender: 'man' | 'woman';
//   age: number;
//   height?: number;
// }

// function printProfile(profile: Profile) {
//   console.log('name', profile.name);
//   console.log('gender', profile. gender);
//   console.log('age', profile.age);
//   if (profile.height) {
//     console.log('height', profile.height);
//   }
// }

// // printProfile({name: 'GuangWong', gender: 'man', age: 23});
// printProfile({name: 'GuangWong', age: 23});
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");
console.log(user)
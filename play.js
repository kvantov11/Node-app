const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('who are noobs ' + this.name);
    }
};

person.greet();

const hobbies = ['nothing', 'bitch', 4, true, {}];
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

const copiedHobbies = [...hobbies];
copiedHobbies.push('sracka');
console.log(copiedHobbies);
console.log(hobbies);

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3));
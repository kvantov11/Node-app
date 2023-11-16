const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('who are noobs ' + this.name);
    }
};

const printName = ({name}) => {
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name);
console.log(age);
console.log(person);

const c = ['vole', 'smrdis'];
const [a, b] = c;
console.log(a,b);
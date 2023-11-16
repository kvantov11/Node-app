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
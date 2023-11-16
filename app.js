class NameField {
    constructor(name) {
        // li -> list item
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        // this makes names property of the class, it is accesible everywhere inside the class and object
        this.names = ['Max', 'Manu', 'Anna'];
        this.currentName = 1;
        btn.addEventListener('click', () => {
            this.addName();
        });
    }
    addName() {
        const name = new NameField(this.names[this.currentName]);
        this.currentName++;
        if (this.currentName >= this.names.length) {
                this.currentName = 0;
        }
    }
}

const gen = new NameGenerator();

class Parent {
    constructor(name) {
        this.name = name
    }
    static name='parent' 
    sayName() {
        console.log(this.name)
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name)
        this.age = age
    }
    sayAge() {
        console.log(this.age)
    }
}
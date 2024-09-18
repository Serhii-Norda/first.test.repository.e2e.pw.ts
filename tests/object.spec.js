// index from 0 to ~
//
//
//
//
const someArrey = ["", true] // индекс значення
console.log(["", true])
console.log(new Array("", true))

const someObject ={
    key: true, //ключ значення
    someKey: "yes"
}
console.log(someObject.someKey)
console.log(someArrey[1])

const owner = {
    name: "Serhii",
    "lastName": "Anton",
    eigh: 28
}

console.log(owner.name)

const test = {
    last_name: "Serhii",
    first_ame: "Anton",
    age: 28,
    getFullInfo: function(){
            console.log(`my full name is ${test.last_name + " " + test.first_ame} and i am ${test.age} years old`)
    }
}
test.getFullInfo()

const car = {
    brand: "toyota"

};

car["collor"] = 'red'; // добавление проперти для обьекта

console.log(car.collor)
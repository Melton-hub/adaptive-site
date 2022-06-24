
// const age = 26;

// function getAge() {
//    return age
// }
// const output = "Привет, меня зовут " + MainName + " и мой возраст " + age + " лет."
// const output = `Привет, меня зовут ${MainName} и мой возраст ${age < 20 ? "A" : "B"} лет`
// console.log(output)



// Function Expression
//const greet2 = function greet2(name) {
//  console.log("Привет 2 - ", name)
//}

// Function Declaration
//function greet(name) {
//  console.log("Привет - ", name)
//}

// greet("Рома")
// greet2("Рома")

// console.log(typeof greet)

// console.dir(greet)

// Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval)
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// Стрелачная функция

// const arrow = (name) => {
//   console.log("Привет - ", name)
// }

// const arrow2 = name => console.log("Привет - ", name)

// arrow("Роман")
// arrow2("Роман")

// const pow2 = num => {
//   return num ** 2
// }

// console.log(pow2(5))

// Параметры по умолчанию
// const sum = (a, b = 1) => a + b

// console.log(sum(41))

// function sumAll(...all) {
//  let result = 0
//  for (let num of all) {
//    result += num
//  }
//  return result
// }

// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res)

// Замыкание

// function createMember(name) {
//   return function(lastName) {
//     console.log(name + lastName)
//   }
// }

// const logWithLastName = createMember("Roman")
// console.log(logWithLastName)

const cars = ["Мазда", "Форд", "БМВ", "Мерседес"]
const fib = [1, 1, 2, 3, 5, 8, 13]
console.log(cars)



// for 반복문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for of 반복문
const users = ["Max", "Anna", "Joel"];

for (const user of users) {
  console.log(user);
}

// for in 반복문
const loggedInuser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (const propertyName in loggedInuser) {
  console.log(propertyName);
  console.log(loggedInuser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

let totalAdultYears;

function calculateAdultYears(uesrAge) {
  let result;
  result = uesrAge - 18;
  return result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

let person = {
  name: "Max", // Property
  // Method
  greet() {
    console.log("Hello!");
  },
};

person.greet();

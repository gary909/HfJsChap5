var dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "fetch balls"
};

var bark;
if(dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "Yip Yip";
}

var speak = dog.name + " says " + bark + " when he wants to " + dog.activity
console.log(speak)

function loseWeight(dog, amount) {
    dog.weight = dog.weight - amount;
}

alert(dog.name + " now weighs " + dog.weight);
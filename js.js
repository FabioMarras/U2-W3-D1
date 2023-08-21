console.log("funziona");

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
}

const Fabio = new User("Fabio", "Marras", "26", "Italy");
const Mario = new User("Mario", "Rossi", "28", "France");
console.log(Fabio);
console.log(Mario);

function showAge() {
  if (Fabio.age > Mario.age) {
    return Fabio.firstName + " è più grande di " + Mario.firstName;
  } else {
    return Mario.firstName + " è più grande di " + Fabio.firstName;
  }
}

console.log(showAge());

//ESERCIZIO 2

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static isSameAuthor(Cane, Cavallo) {
    return Cane.ownerName === Cavallo.ownerName;
  }
  greet() {
    return "Ciao lui si chiama " + Cane.petName + " e " + Cane.ownerName + " è il propietario! è un " + Cane.breed;
  }
}

const Cane = new Pet("Bryan", "Fabio", "cane", "Labrador");
const Cavallo = new Pet("Furia", "Fabio", "horse", "english");
const Cavallo2 = new Pet("Gianni", "Filippo", "horse", "english");

console.log(Cane);
console.log(Cavallo);

console.log(
  Cane.petName + " e " + Cavallo.petName + " sono dello stesso proprietario?",
  Pet.isSameAuthor(Cane, Cavallo)
);
console.log(
  Cane.petName + " e " + Cavallo2.petName + " sono dello stesso proprietario?",
  Pet.isSameAuthor(Cane, Cavallo2)
);

console.log(Cane.greet());
console.log(Cane, Cavallo, Cavallo2);

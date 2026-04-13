class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  ageCompare = function (user) {
    if (this.age > user.age) {
      console.log(`${this.firstName} è piu anziano di ${user.firstName}`);
    } else if (this.age < user.age) {
      console.log(`${user.firstName} è piu anziano di ${this.firstName}`);
    } else {
      console.log(`${this.firstName} e ${user.firstName} hanno la stessa età`);
    }
  };
}

const user1 = new User("Marco", "Polo", 31, "Milano");
const user2 = new User("Luca", "Fumagalli", 40, "Torino");
user1.ageCompare(user2);

const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");

class Animal {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
  sameOwner(otherPet) {
    return this.ownerName.toLowerCase() === otherPet.ownerName.toLowerCase();
  }
}

const form = document.getElementById("form");
const allOldPets = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const petName = petNameInput.value;
  const ownerName = ownerNameInput.value;
  const species = speciesInput.value;
  const breed = breedInput.value;

  const pet = new Animal(petName, ownerName, species, breed);
  alert("Dati Salvati Correttamente " + JSON.stringify(pet, null, 2));
  const divCard = document.createElement("div");
  divCard.classList.add("card", "text-start", "my-3");
  divCard.innerHTML = `<h1>Nome Pet: ${petName}</h1><h1>Nome Padrone: ${ownerName}</h1> <h1>Specie: ${species}</h1><h1>Razza: ${breed}</h1>`;
  form.appendChild(divCard);
  allOldPets.forEach((oldPet) => {
    if (pet.sameOwner(oldPet)) {
      alert(`${pet.petName} e ${oldPet.petName} hanno lo stesso padrone`);
    }
  });
  allOldPets.push(pet);

  form.reset();
});

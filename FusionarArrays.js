// Starting code
const person = {
  name: 'John',
  surname: 'Doe',
  age: 50,
  meta: {
    eyeColor: 'blue',
  },
};

const city = {
  name: 'Barcelona',
  weather: 'sunny',
  coords: {
    lat: 45.211448,
    lang: 1.87654,
  },
};

const newArray = { ...person, ...city, name: city.name };

console.log(newArray);

const newPerson = JSON.stringify(person);

const tranformedPerson = JSON.parse(newPerson);
console.log(tranformedPerson);

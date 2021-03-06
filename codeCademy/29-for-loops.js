// Regular for loop:
for (let i = 5; i < 11; i++) {
  console.log(i); // 5 6 7 8 9 10
};

// Reverse for loop:
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter); // 3 2 1 0
};

// Looping through an array:
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]); // I would love to visit Bali I would love to visit Paris I would love to visit Tulum
}

// Nested loops:
const bobsFollowers = ['Alex', 'Simon', 'Tim', 'Joe'];
const tinasFollowers = ['Alex', 'Joe', 'Tom'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers); // [ 'Alex', 'Joe' ]
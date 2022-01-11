// ## Array Cardio

// Some data we can work with

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const filterInventors = (state) =>
  state.filter((el) => el.year >= 1500 && el.year < 1600);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const mapInventors = (state) => state.map((el) => `${el.first}  ${el.last}`);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const sortInventors = (state) => state.sort((a, b) => a.year - b.year);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const reduceInventors = (state) =>
  state.reduce((a, b) => {
    return a + (b.passed - b.year);
  }, 0);

// 5. Sort the inventors by years lived

const sortByYearsLived = (state) =>
  state.sort((currentInv, nextInv) => {
    const currentEl = currentInv.passed - currentInv.year;
    const nextEl = nextInv.passed - nextInv.year;
    return currentEl - nextEl;
  });

// 6. sort Exercise
// Sort the people alphabetically by last name

const sortPeople = (state) => {
  return state.sort((a, b) => {
    const [aLastName, aFirstName] = a.split(", ");
    const [bLastName, bFirstName] = b.split(", ");
    return aLastName > bLastName ? 1 : -1;
  });
};

// 7. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const countInstances = data.reduce(function (obj, el) {
  if (!obj[el]) {
    obj[el] = 0;
  }
  obj[el]++;
  return obj;
}, {});

console.log(
  filterInventors(inventors),
  mapInventors(inventors),
  sortInventors(inventors),
  reduceInventors(inventors),
  sortByYearsLived(inventors),
  sortPeople(people),
  countInstances
);

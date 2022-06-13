const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];


  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

// Filtering all the inventors who were born in 1500s
const bornIn1500s = inventors.filter(inventor=>(inventor['year']>=1500)&&(inventor.year<=1599));
console.table(bornIn1500s);

//Appending first and last names of the inventors
const names = inventors.map(inventor=>inventor.first+" "+inventor.last);
const names = inventors.map(inventor=>`${inventor.first} ${inventor.last}`);
console.table(names)

//sort inventors by their year of birth
inventors.sort((a,b)=> a.year-b.year);
console.table(inventors);

//Get the combined age of all the inventors
const totalYears = inventors.reduce((y,x)=>y+x.passed-x.year,0);
console.log(totalYears)

//Sort inventors by their age
inventors.sort((a,b)=> -(a.passed-a.year)+(b.passed-b.year));
console.table(inventors);

//create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const categoryGroup = document.querySelector('.mw-content-ltr');
const a = [...categoryGroup.querySelectorAll('a')];//converting Node list to array
names = a.map(name=>name.textContent).filter(x=>x.includes('de'))

//Sort people by last name
people.sort((a,b)=>{
  return a.split(', ')[1]>b.split(', ')[1]?1:-1
});
console.table(people);

// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportCount = data.reduce((obj,item)=>{
  if(!obj[item]){obj[item]=0};
  obj[item]++;
  return obj;
},{});
console.table(transportCount)

****
# *Yury Dunets.*
## *Contacts:* 
[LinkedIn](https://www.linkedin.com/in/yury-dunets-b193a21bb/), [GitHub](https://github.com/charleswein), [Facebook](https://www.facebook.com/yury.dunets/), yury.dunets.dev@gmail.com.
*Mobile number: +375298655266 (mts).*
## *About me:* 
I've graduated from the Medical University in Minsk and worked as a doctor (general practise) in a hospital for more than 2 years. 
During my work in the hospital I improved a lot of soft skills because of daily communication with different people: from young teens up to elderly people. I used to work a lot: 10-12 hours per day, pretty often without weekends. 
I totally understand that I need to learn a lot because I don’t have technical education and background. So every day I am reading articles and watching tutorials about the Web Development and JavaScript, React and other JS frameworks to improve my skills. I'm always excited to solve complex tasks and very open to get feedback and advise from my friends who are already working in IT companies. 

## *Skills:*
***HTML, CSS, БЭМ, JavaScript, AJAX, OOP in JS, Webpack, Git, React, Redux, Data Structure in JS(conceptual).***
## *Code Examples:* 
```
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if(!resGeo.ok) throw new Error('Problem getting location data!');
    const dataGeo = await resGeo.json();
    //Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if(!res.ok) throw new Error('Problem getting country!');
    const [data] = await res.json();
    renderCountry(data);
    countriesContainer.style.opacity = 1;
    return `You are in  ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} !!!`);
    throw err;
  }
};
```
,
```
function validateCred (array){
  let sum = 0;
  let newArr = [];
  if((array.length % 2) === 0){
   for (let i = 0; i < array.length; i += 2){
    if((array[i] * 2) > 9){
     newArr.push(array[i] * 2 - 9)
    } else {
     newArr.push(array[i] * 2);
    }
    newArr.push(array[i + 1]);
   }
  } else {
   for (let i = 1; i < array.length; i += 2){
    if(i === 1){
     newArr.push(array[i-1]);
    }
    if((array[i] * 2) > 9){
     newArr.push(array[i] * 2 - 9)
    } else {
     newArr.push(array[i] * 2)
    }
    newArr.push(array[i + 1]);
   }
  }
  for (let i = 0; i < newArr.length; i++){
    sum += newArr[i];
  }
  if(sum % 10 === 0 ){
    return 'valid';
  } else {
    return 'invalid';
  }
}


const findInvalidCards = (batchArr) =>{
  let invalidCards = batchArr.filter(arr => validateCred(arr) === 'invalid');
  return invalidCards;
}
const invalidCards = findInvalidCards(batch);
console.log(invalidCards);

function idInvalidCardCompanies(invCards){
 let invalidCardCompanies = invCards.map(card => {
  switch(true){
   case card[0] === 3 : return "Amex"; 
   case card[0] === 4 : return "Visa"; 
   case card[0] === 5 : return "Mastercard";
   case card[0] === 6 : return "Discover"; 
   default : return 'Company not found'
  }
 }).filter((comp, i, arr) => arr.indexOf(comp) === i)
 console.log(invalidCardCompanies);
}
idInvalidCardCompanies(invalidCards);
```
## *Experience:*
### **Education:**
  1. Belarusian State Medical University(Higher Education | Minsk (2012-2018)) - *"It was really amazing and useful time, I got an useful experience and found new friends."*
   
  2. Teach Me Skills(Сertificate of completion | Minsk (2020)) - *"From my point of view this school gave me my first steps in my career as a front-end developer. I valued every lesson and especially practiсe that I got in the course. All our mentors were senior developers at different software development companies."*
### **Work Experience:**
  1. State Hospital №40(General practice | Minsk (2018-2020)) - *"While I worked I got plenty of skills, the most essential of them was give first aid in emergency situation.*
### **Additional Education at current time:**
  1. Codeacademy Full-Stack Web Developer Course.
  2. React - The Complete Guide (incl Hooks, React Router, Redux). *Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!* - by Maximilian Schwarzmüller
  3. Advanced CSS and Sass: Flexbox, Grid, Animations and More! - by Jonas Schmedtmann.
  4. The Complete JavaScript Course 2021: From Zero to Expert! - by Jonas Schmedtmann.
  5. Node.js, Express, MongoDB & More: The Complete Bootcamp 2021. - by Jonas Schmedtmann.

### **Professional Expertise:**
[![2021-03-03-13-35-40.png](https://i.postimg.cc/cLbWFTFP/2021-03-03-13-35-40.png)](https://postimg.cc/3kmzRj5Z)
## *English:*
Intermediate Level(B1)

const review = [
   {
      id: 1,
      name: "meri",
      job: "webdeveloper",
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, a?Lorem ipsum dolor sit amet consecte adipisicing elit.Nam, minima",

   },
   {
      id: 2,
      name: "monti",
      job: "javaDeveloper",
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      title: "It seems like you're looking for a JavaScript developer job description. Here's a sample job description tailored for a JavaScript developer role:",

   },
   {
      id: 3,
      name: "vikash",
      job: "dataAnalytic",
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, a?Lorem ipsum dolor sit amet consecte adipisicing elit.Nam, minima",

   },
]

const img = document.getElementById("image")
const names = document.getElementById("name");
const job = document.getElementById("role");
const info = document.getElementById("info");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");
const surprise = document.getElementById("surprise");

// initial value

let currentIteam = 0

// load initial item

window.addEventListener('load', function () {
   const item = review[currentIteam];
   img.src = item.img;
   names.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.title;



});

// show person based on item

function showperson(person) {
   const item = review[person];
   img.src = item.img;
   names.textContent = item.name;
   job.textContent = item.job;
   info.textContent = item.title
}

//// show next person

nextbtn.addEventListener('click', function () {
   currentIteam++;
   if (currentIteam > review.length - 1) {
      currentIteam = 0;
   }
   showperson(currentIteam);
})

// show prev btn

prevbtn.addEventListener('click', function () {
   currentIteam--;
   if (currentIteam < 0) {
      currentIteam = review.length - 1;
   }
   showperson(currentIteam);
})

// show random person

surprise.addEventListener("click", function () {
   currentIteam = Math.floor(Math.random() * review.length);
   showperson(currentIteam);
})
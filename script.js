const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];
//-------------
//QUESTION 1 -----
//-------------
const cat = {
  complain: () => {
    console.log("Meow");
  },
};

//-------------
//QUESTION 2 -----
//-------------
let heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

//-------------
//QUESTION 3 -----
//-------------
heading.style.fontSize = "2em";

//-------------
//QUESTION 4 -----
//-------------
heading.classList.add("subheading");

//-------------
//QUESTION 5 -----
//-------------
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p) => {
  p.style.color = "red";
  p.style.backgroundColor;
});

//-------------
//QUESTION 6 -----
//-------------
let resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//-------------
//QUESTION 7 -----
//-------------
const func = (list) => {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
};
func(cats);

//-------------
//QUESTION 8 -----
//-------------
let cat_container = document.querySelector(".cat-container");
let catAge = (cat) => {
  if (cat.age) {
    return cat.age;
  } else {
    return "Age Unknown";
  }
};
const createCats = (cats) => {
  cats.forEach((cat) => {
    let catAgeHtml = catAge(cat);
    cat_container.innerHTML += `
      <div>
        <h5>${cat.name}</h5>
      </div>
      <div>
        <p>${catAgeHtml}</p>
      </div>
    `;
  });
};

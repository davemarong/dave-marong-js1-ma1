async function getCatFacts() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const results = await response.json();
    console.log(results.length);
  } catch (error) {
    console.log(error);
  }
}
fetch("https://cat-fact.herokuapp.com/facts")
  .then((response) => response.json())
  .then((result) => console.log(result.length))
  .catch((error) => console.log(error));

getCatFacts();

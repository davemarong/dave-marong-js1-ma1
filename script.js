const API_URL =
  "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

async function callUrbanDictionary() {
  const response = await fetch(API_URL, {
    headers: {
      key: "key",
    },
  });
  const results = await response.json();
  console.log(results);
}

GamesDataRaw = [
  { Id: 1, _URL: "apple.png" },
  { Id: 2, _URL: "apple.png" },
  { Id: 3, _URL: "blueberry.png" },
  { Id: 4, _URL: "orange.png" },
  { Id: 5, _URL: "orange.png" },
  { Id: 6, _URL: "banana.png" },
  { Id: 7, _URL: "banana.png" },
  { Id: 8, _URL: "blueberry.png" },
  { Id: 9, _URL: "hendevane.png" },
  { Id: 10, _URL: "hendevane.png" },
  { Id: 11, _URL: "angoor.png" },
  { Id: 12, _URL: "angoor.png" },
  { Id: 13, _URL: "TootFarangi.png" },
  { Id: 14, _URL: "TootFarangi.png" },
  { Id: 15, _URL: "Ananas.png" },
  { Id: 16, _URL: "Ananas.png" },
  { Id: 17, _URL: "golabi.png" },
  { Id: 18, _URL: "golabi.png" },
  { Id: 19, _URL: "kivi.png" },
  { Id: 20, _URL: "kivi.png" },
];

function scrambleJSON(jsonObj) {
  if (Array.isArray(jsonObj)) {
    const shuffledArray = jsonObj.slice().sort(() => Math.random() - 0.5);
    return shuffledArray.map(scrambleJSON);
  } else if (typeof jsonObj === "object" && jsonObj !== null) {
    const scrambledObj = {};
    Object.keys(jsonObj)
      .sort(() => Math.random() - 0.5)
      .forEach((key) => {
        scrambledObj[key] = scrambleJSON(jsonObj[key]);
      });
    return scrambledObj;
  } else {
    return jsonObj;
  }
}

//usable gamesData
GamesData = scrambleJSON(GamesDataRaw);

//console.log(GamesData);

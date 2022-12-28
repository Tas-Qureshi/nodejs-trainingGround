import fetch from "node-fetch";

fetch("https://randomuser.me/api/?results=30")
  .then((respose) => respose.json())
  .then((data) => data.results)
  .then((results) => console.log(`We got ${results.length} rows`));

//------------------------------------------------------------------------------------
fetch("https://randomuser.me/api/?results=30")
  .then((response) => response.json())
  .then((data) => {
    throw new Error("This is the error that I made");
  })
  .then((results) => console.log(`We got ${results.length} rows`))
  .catch((err) => console.log("Something went wrong", { err }));
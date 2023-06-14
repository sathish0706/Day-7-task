var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v2/all");

request.send();

request.onload = function () {
  var countrieData = JSON.parse(request.responseText);
  // FILTER METHOD

//   Get all the countries from the Asia continent /region using the Filter function
    var res = countrieData.filter((ele) => ele.region === "Asia");
        console.log(res);

//   Get all the countries with a population of less than 2 lakhs using Filter function
    var population = countrieData.filter((ele) => ele.population < 200000);
    console.log(population);

  // FOREACH FUNCTION

//   Print the following details name, capital, flag using forEach function  
    countrieData.forEach((ele) => console.log(ele.name, ele.capital, ele.flag));

    // REDUCE METHOD

//   Print the total population of countries using reduce function
    let totalPopul = countrieData.reduce((acc, ele) => {
      return acc + ele.population;
    }, 0);
    console.log(totalPopul);
    
//   Print the country which uses US Dollars as currency.
  countrieData.filter((ele) => {
    if (ele.currencies[0].name == "United States Dollar") {
      console.log(ele.name);
    }
  });
};


var request = new XMLHttpRequest();

request.open("GET", 'https://restcountries.com/v2/all');

request.send()

request.onload = function(){
    var countrieData = JSON.parse(request.responseText)
    // FILTER METHOD
    var res=countrieData.filter((ele)=>ele.region==="Asia")
    var population=countrieData.filter((ele)=>ele.population<200000)
    console.log(res)
    console.log(population)
    

    // FOREACH FUNCTION
     countrieData.forEach((ele)=>console.log(ele.name,ele.capital,ele.flag))
    
    // REDUCE METHOD
    let totalPopul=countrieData.reduce((acc,ele)=>{
        return acc+ele.population
    },0)
    console.log(totalPopul)

    
  











}
  
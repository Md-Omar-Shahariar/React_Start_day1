const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  console.log(countries);
  const countriesHtml = countries.map((country) => getCountryName(country));
  const container = document.getElementById("countries");
  container.innerHTML = countriesHtml.sort().join("");
};
const getCountryName = (country) => {
  return `<div class = "country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="">
    </div>`;
};
loadCountries();

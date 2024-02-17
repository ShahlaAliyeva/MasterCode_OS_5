const countryName = new URLSearchParams(location.search).get("name");

const countryImg = document.querySelector(".country-img-container img");
const countryTitle = document.querySelector(".country-title");
const country__native__name = document.querySelector(".country__native-name");
const country__population = document.querySelector(".country__population");
const country__region = document.querySelector(".country__region");
const country__sub_region = document.querySelector(".country__sub-region");
const country__capital = document.querySelector(".country__capital");
const country__domain = document.querySelector(".country__domain");
const country__currency = document.querySelector(".country__currency");
const country__languages = document.querySelector(".country__languages");
const border__countries__btns = document.querySelector(
  ".border-countries-btns"
);

fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then((res) => res.json())
  .then((countryArr) => {
    const country = countryArr[0];
    console.log(country);
    countryImg.src = country.flags.svg;

    countryTitle.innerHTML = country.name.common;

    if (country.name.nativeName) {
      country__native__name.innerHTML = `Native name: <span>${
        Object.values(country.name.nativeName)[0].common
      }</span>`;
    } else {
      country__native__name.innerHTML = `Native name: <span>${country.name.common}</span>`;
    }

    country__population.innerHTML = `Population: <span>${country.population.toLocaleString()}</span>`;

    country__region.innerHTML = `Region: <span>${country.region}</span>`;

    country__sub_region.innerHTML = `Sub region: <span>${
      country.subregion ? country.subregion : "None"
    }</span>`;

    country__capital.innerHTML = `Capital: <span>${
      country.capital ? country.capital : "None"
    }</span>`;

    country__domain.innerHTML = `Top level domain: <span>${country.tld[0]}</span>`;

    country__currency.innerHTML = `Currencies: <span>${Object.values(
      country.currencies
    ).map((curr) => curr.name)}</span>`;

    country__languages.innerHTML = `Languages: <span>${Object.values(
      country.languages
    ).map((lang) => lang)}</span>`;

    if (country.borders) {
      country.borders.forEach((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then((borderCountryArr) => {
            const borderCountryTag = document.createElement("a");
            borderCountryTag.href = `./country-detail.html?name=${borderCountryArr[0].name.common}`;
            borderCountryTag.innerHTML = borderCountryArr[0].name.common;
            border__countries__btns.append(borderCountryTag);
          });
      });
    }
  });

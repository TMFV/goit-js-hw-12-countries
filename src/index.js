//import fetchCountries from './js/fetchCountries';
import fetch from 'cross-fetch';
fetch('https://restcountries.eu/rest/v2/all')
.then(response => {
    console.log(response.json());
  })
import markupFn from './createMarkup';

export default fetchCountries;

function fetchCountries(searchQuery) {
    
    fetch(`https://restcountries.eu/rest/v2/name/${searchQuery};`)
        .then((response) => response)
        .then(data => data.json())
        .then(arr => {
            let resultArray;
            resultArray = arr;
            markupFn(resultArray);
        })
        .catch(()=>console.log('Input ERROR or No Data !!!'))
    

    
        
    
};

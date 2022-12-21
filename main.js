// index.js

// const getCountryInfo = countryName => {
//     axios
//       .get(`https://restcountries.com/v2/name/${countryName}`)
//       .then(response => {
//         console.log('Response from API is: ', response);
//         const countryDetail = response.data[0];
//         console.log('a single country details: ', countryDetail);
//       })
//       .catch(err => console.log(err));
//   };
  
//   document.getElementById('get-country-btn').addEventListener('click', () => {
//     const userInput = document.getElementById('country-name-input').value;
//     getCountryInfo(userInput);
//   });
  

  // index.js


// "lo que dice countryName es el nombre que YO le doy, la puedo llmar cualquier cosa pero para efectos del código la reemplazamos con nombres coherentes aplicados al código y lo que pretendemos con él" 
//   La constante de la fincuon es igual al nombre de la función para ejecutar el axios

let area1
const getCountryInfo = countryName => {
    axios
    // el get obtenemos/pusheamos/TOCO LA PUERTA || la dirección de la API y mediante el templeliteral buscamos la elección requerida, EL GET ES PARA HACER LA LLAMADA
    .get(`https://restcountries.com/v2/name/${countryName}`)
    //  EL THEN ES PARA RECIBIR LOS DATOS PEDIDOS EN LA PARTE PORTERIOR AL THEN O SEA LA PARTE DE ABAJO | acá está la promesa
    .then(response => {
        const countryDetail = response.data[0];
        area1= document.getElementById('country-name').innerText = countryDetail.population;
        document.getElementById('country-capital').innerText = countryDetail.capital;
        document.getElementById('country-flag').setAttribute('src', countryDetail.flag);
        let comparation= area1
        console.log(comparation);
      })
      
    // el catch es llamado cuando la promesa es rechazada y pues printa lo que tenga dentro el código
      .catch(err => {
        console.log(err);
        err.response.status === 404 ? alert(`The country ${countryName} doesn't exist.`) : alert('Server error! Sorry.');
      });
  };
  
//   esta funcion activa todo el código
  document.getElementById('get-country-btn').addEventListener('click', () => {
    const userInput = document.getElementById('country-name-input').value;
    getCountryInfo(userInput);
  });

//   ==================

let area2
const getCountryInfo2 = countryName => {
    axios
    // el get obtenemos/pusheamos/TOCO LA PUERTA || la dirección de la API y mediante el templeliteral buscamos la elección requerida, EL GET ES PARA HACER LA LLAMADA
    .get(`https://restcountries.com/v2/name/${countryName}`)
    //  EL THEN ES PARA RECIBIR LOS DATOS PEDIDOS EN LA PARTE PORTERIOR AL THEN O SEA LA PARTE DE ABAJO | acá está la promesa
    .then(response => {
        const countryDetail = response.data[0];
        area2= document.getElementById('country-name2').innerText = countryDetail.population;
        document.getElementById('country-capital2').innerText = countryDetail.capital;
        document.getElementById('country-flag2').setAttribute('src', countryDetail.flag);
        let comparation= area1-area2
        console.log(comparation);
      })
      
    // el catch es llamado cuando la promesa es rechazada y pues printa lo que tenga dentro el código
      .catch(err => {
        console.log(err);
        err.response.status === 404 ? alert(`The country ${countryName} doesn't exist.`) : alert('Server error! Sorry.');
      });
  };
  
//   esta funcion activa todo el código
  document.getElementById('get-country-btn2').addEventListener('click', () => {
    const userInput = document.getElementById('country-name-input2').value;
    getCountryInfo2(userInput);
  });


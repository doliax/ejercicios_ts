


//Función asincrona que con el fetch nos da los datos de un api, en el primer then pasamos los datos a json, en el segundo los imprimimos
 async function getData(): Promise<any> {
   return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    
 }     


 
 
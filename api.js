// async function get()
// {
//     const response = await fetch("https://breakingbadapi.com/api/characters/5")
//     const data =await response.json()
//     console.log(data[0])
//     document.querySelector("#content h1").innerHTML=data[0].name
//     document.querySelector("#content h1").innerHTML=data[0].birthday
//     document.querySelector("#content h1").innerHTML=data[0].img
    
//     document.querySelector("#actor").innerHTML =
//     `
//     <select>
//         <option>${data[0].name}</option>
        
//     </select>
//     `
// }
fetch('https://api.apitore.com/api/9')
  .then(response => {
    if (response.ok) {
      // The request was successful, so parse the response data
      return response.json();
    } else {
      // The request was unsuccessful, so throw an error
      throw new Error('An error occurred: ' + response.statusText);
    }
  })
  .then(data => {
    // The request was successful, so do something with the data
    console.log(data);
  })
  .catch(error => {
    // The request was unsuccessful, so handle the error
    console.error(error);
  });


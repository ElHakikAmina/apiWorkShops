fetch("https://www.breakingbadapi.com/api/")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})
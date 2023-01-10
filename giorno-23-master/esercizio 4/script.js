axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error){
    console.log(error);
});

axios.get('https://jsonplaceholder.typicode.com/users/1').then(function(response) {
    console.log(response);
    console.table(response.data);
}).catch(function(error){
    console.log(error);
});

axios.post('https://jsonplaceholder.typicode.com/users', {name: 'Pasquale', surname: 'Capuano'}).then(function(response) {
    console.log(response.data);
}).catch(function(error){
    console.log(error);
});
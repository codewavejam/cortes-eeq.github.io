document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var searchId = document.getElementById('searchId').value;
    var resultElement = document.getElementById('result');
    var loader = document.getElementById('loader');

    if (searchId === '') {
        alert('Ingrese los datos requeridos'); // Alert user if input is empty
        return; // Exit function if input is empty
    }
    var url = 'https://yzikcmv0ba.execute-api.us-east-1.amazonaws.com/default/srv-plate-restriction-by-header';

    loader.style.display = 'block';
    resultElement.innerText = '';
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cuenid: searchId })
    })
    .then(response => response.text())
    .then(data => {
        resultElement.innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
        resultElement.innerText = "An error occurred while fetching data.";
    })
    .finally(() => {
        loader.style.display = 'none'; // Ocultar el loader
    });
});

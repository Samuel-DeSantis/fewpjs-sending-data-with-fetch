function submitData(name, email) {
    return fetch ('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then( function (response) {return response.json()})
    .then( function (object) {document.body.innerHTML = object["id"]})
    .catch( function (error) {document.body.innerHTML = error.message})
}

/* 
fetch (destinationURL, configObject) 
method <- HTTP Verb
headers <- metadata about the data
    'Content-Type' <- sent data format type
    'Accept' <- tells the server what data format to accept
body <- the data
    JSON.stringify() converts objects to strings

*/
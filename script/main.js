const url = "https://api.github.com/users/helio2323"

function getUser(){
    fetch(`${url}`)
    .then(response => response.json())
    .then(data => { 
        userName.textContent = data.name
        img.src = data.avatar_url
    })
    .catch(error => console.error(error))
}

getUser()
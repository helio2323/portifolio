const url = "https://api.github.com/users/helio2323"
const url_repos = "https://api.github.com/users/helio2323/repos"

function getUser(){
    fetch(`${url}`)
    .then(response => response.json())
    .then(data => { 
        userName.textContent = data.name
        img.src = data.avatar_url
        userLocation.textContent = data.location
        job.textContent = data.company   
        biog.textContent = data.bio  
    })  
    .catch(error => console.error(error))
}

function getRepositories(){


    
}

getUser()

const url = "https://api.github.com/users/helio2323"
const url_repos = "https://api.github.com/users/helio2323/repos"

function getUser(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        img.src = data.avatar_url
        userName.textContent = data.name
        biog.textContent = data.bio
        userLocation.textContent = data.location
        job.textContent = data.company
    })
    .catch(error => console.log(error))
}

function getRepositories(){
    fetch('https://api.github.com/users/helio2323/repos')
    .then(response => response.json())
    .then(data => {
    let counter = 0; // adiciona um contador
    textValue = seeRepositories.textContent   
      data.forEach(repo => {
      if (textValue === "See All") {
            if (counter >=2) { // limita o número de resultados a 2
                return;
            }
        }             
        const divElement = document.querySelector('div#repos');

        const repoElement = document.createElement('div');
        const divDados = document.createElement('div')

        repoElement.classList.add('defatul-card', 'respos-card', 'content-card');
        divDados.classList.add('infos')

        const linkElement = document.createElement('a');
        linkElement.href = repo.html_url
        linkElement.textContent = repo.html_url
        repoElement.appendChild(linkElement)

        const nameElement = document.createElement('h3');
        nameElement.textContent = repo.name;
        repoElement.appendChild(nameElement);

        descript = repo.description

        if (descript == null) {
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = 'Sem dados'
            repoElement.appendChild(descriptionElement);
        }else{
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = repo.description;
            repoElement.appendChild(descriptionElement);
        }
        
        const starsElement = document.createElement('p');
        starsElement.textContent = `Stars: ${repo.stargazers_count}`;
        divDados.appendChild(starsElement);
        
        const forksElement = document.createElement('p');
        forksElement.textContent = `Forks: ${repo.forks_count}`;
        divDados.appendChild(forksElement);
        
        const languageElement = document.createElement('p');
        languageElement.textContent = `Language: ${repo.language}`;
        divDados.appendChild(languageElement);
        
        divElement.appendChild(repoElement);
        repoElement.appendChild(divDados)

        //document.body.appendChild(repoElement);
        counter++ // incrementa o contador

    });
    }); 
   
}

function seeAll(itens){
    textValue = seeRepositories.textContent

    if (textValue === 'See All') {
        seeRepositories.textContent = "Hide All"
        getRepositories(textValue)
    } else {
        var div = document.getElementById("repos");
        div.innerHTML = "";
        seeRepositories.textContent = "See All"
        getRepositories(textValue)
    }


}
getRepositories()
getUser()


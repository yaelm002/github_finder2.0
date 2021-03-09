class UI{
  constructor(){
    this.profil = document.querySelector('#profil');
  }
  profilZeigen(user){
    this.profil.innerHTML =`
      <div class= "card card-body mb-3">
        <div class= "row">
          <div class= "col-md-3">
            <img class="img-fluid mb-2"  src="${user.avatar_url}">
            <a href="${user.html_url}" target= "_blank" class= "btn btn-primary btn-block"> Siehe Profil</a>
          </div>
          <div class= "col-md-9">
            <span class = "badge badge-primary">Offentliche Repos: ${user.public_repos}</span>
            <span class = "badge badge-secondary">Offentliche Gists: ${user.public_gists}</span>
            <span class = "badge badge-success">Followers: ${user.followers}</span>
            <span class = "badge badge-info">Following: ${user.following}</span>
            <br>
            <br>
            <ul class= "list-group">
                <li class = "list-group-item"> Unternehmen : ${user.company}</li>
                <li class = "list-group-item"> Blog : ${user.blog}</li>
                <li class = "list-group-item"> Standort : ${user.location}</li>
                <li class = "list-group-item"> Nutzer seit : ${user.created_at}</li>
            </ul>
            <br>
            <br>
          </div>
        </div>
      </div> 
          <h2 class = "page-hading">Letzte Repos</h2>
          <div id = "repos"></div>
          </div> 
      </div> 
    `
  }

  showAlert(user, className){
    this.profil.innerHTML= `
    <div class = "container ${className}">
    <h3> Es gibt keinen Nutzer mit dem Name ${user} </h3>
    </div>
    `
  }

  reposZeigen(userRepos){
    let output= "";
    const repos = document.querySelector('#repos');
    userRepos.forEach(repo=>{
      output += `
      <div class = "card card-body mb-2">
          <div class = "row">
              <div class= "col-md-6">
                <a href= "${repo.html_url}" target= "_blank">${repo.name}</a>
              </div>
              <div class= "col-md-6">
              <span class = "badge badge-primary"> Star: ${repo.stargazers_count}</span>
              <span class = "badge badge-secondary">Seher: ${repo.watchers_count}</span>
              <span class = "badge badge-success">Forks: ${repo.forks_count}</span>
              </div>
          </div>
      </div>
      `
    })
    repos.innerHTML = output;
    
  }

  profilClear(){
    this.profil.innerHTML ="";
  }
}


class Github{
  constructor(){
    this.client_id = 'e97ffc9e09530096ade9';
    this.client_secret = 'aea0ba7eaf3ef8cc4e5021afbd60750d859f835d';
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

 async getUser(user){
    const response = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profil = await response.json();
    const repos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`);
    const reposName = await repos.json();
    
    return {
      profil,
      reposName
    } ;
  }
}
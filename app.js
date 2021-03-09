const github = new Github;
const ui = new UI;

const nutzerSucher = document.querySelector('#inputName');

nutzerSucher.addEventListener('keyup', (e)=>{
  const inputValue =e.target.value;


  if(inputValue !== ''){
    github.getUser(inputValue)
    .then(data => {
        if(data.profil.message === 'Not Found'){
            ui.showAlert(inputValue, "alert alert-danger");
        }else{
          ui.profilZeigen(data.profil);
          ui.reposZeigen(data.reposName);
        }
    } )
    .catch(err=> console.log(err))
  }else{
    ui.profilClear();
  }
} );
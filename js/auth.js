
let url = window.location.href

const token = localStorage.getItem('token') ? true : false;
/**
 * Verifica se o usuário está logado
 */
document.addEventListener('DOMContentLoaded', function(){
  if(!token){
    //alert('usuário não logado');
    window.location.href = window.location.href.includes('src/html') ? "../html/login.html" : "../html/login.html"; 
  }
})

/**
 * Da logout e limpa o cache do localstorage
 */

logout.addEventListener('click', function(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    localStorage.removeItem('usuario')
})

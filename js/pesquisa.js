let pesquisa;
document.addEventListener('DOMContentLoaded', function onLoad() {
    recuperaBusca();
    buscaReceitas();
    montaReceitas();
})
/**
 * Recupera a busca feita pelo usuário
 */
function recuperaBusca() {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == "palavraBusca") {
            pesquisa = pair[1];
        }
    }

}
/**
 * Fazendo a busca
 */
function buscaReceitas() {
    console.log('Receitas: ', JSON.parse(localStorage.getItem('Receitas')))
    const resultado = document.getElementById('resultado');
    let tpl = `RESULTADO para '${pesquisa}':`
    resultado.innerHTML = tpl;
}
/**
 * Montando o resultado da busca
 */
function montaReceitas() {
    let tpl = '';
    const receitasAll = JSON.parse(localStorage.getItem('Receitas'));
    let receitasFiltradas = [];
    receitasAll.forEach(element => {
        if (!!element.titulo && element.titulo.toLowerCase().includes(pesquisa.toLowerCase()))
            receitasFiltradas.push(element)
    });

    const receitas = document.getElementById('receitas');

    receitasFiltradas.map((element) => {
        tpl += `<div class="col-3" style="margin-bottom: 10px;">
        <div class="card h-100">
            <img src=${element.img} alt="Massa à Carbonara vegana" class="card-img">
            <div class="card-body">
                <h5 class="card-title">${element.titulo}</h5>
                <a href=${element.href} class="card-botao">Ver Receita</a>
            </div>
        </div>
        </div>`
        receitas.innerHTML = tpl;
    })
}



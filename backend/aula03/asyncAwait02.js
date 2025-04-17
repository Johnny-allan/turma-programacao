// async function obterDadosDoservidor(id) {
//     const resposta = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}`);

//     const dados = await resposta.json();
//     console.log("Nome:", dados.name.toUppercase());
       
// }
// obterDadosDoservidor(17);
function obterDadosDoservidor(id) {
 fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
 .then(resposta => resposta.json())
 .then(dados => {
    console.log("nome:", dados.name)
 })

}
obterDadosDoservidor(44)
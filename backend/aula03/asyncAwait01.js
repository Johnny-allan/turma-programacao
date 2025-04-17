function primeiraFuncao() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("esperou isso aqui")
            resolve();
        },1000)
    })
}

function segundaFuncao() {
return new Promise(resolve => {
    setTimeout(() => {
        console.log("esperou isso aqui tambem")
        resolve();
    },3000)
})
}
segundaFuncao();


async function terceiraFuncao() {
    console.log("iniciou");
    await primeiraFuncao();
    await segundaFuncao();
    console.log("Finalizou a funcção asyncAwait");
}
terceiraFuncao();
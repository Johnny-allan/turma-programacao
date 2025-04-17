//const p = new Promise(resolverPromessa => resolverPromessa(3));

//p.then(valor => console.log(valor));
//p.then(console.log);

const p = new Promise
(resolve => {
    resolve([
        { 
            id: 1,
            mome: "Carlos",
            idade: 62,
        },
        { 
            id: 2,
            mome: "Angela",
            idade: 35,
        },
        { 
            id: 3,
            mome: "Alberto",
            idade: 20,
        },


    ]);
});
p
 .then(JSON.stringify) //p.then(valor => json.tringify(valor))
 .then(JSON.parse) //.then(valor => JSON.parse(valor))
 .then(valor => valor.forEach(element => {
   console.log(element.nome, element.idade);
 }))
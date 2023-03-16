let sp = 67836.43
let rj = 36678.66
let mg = 29299.88
let es = 27165.48
let outros = 19849.53
let tot = sp + rj + mg + es + outros

function percentual(estado) {
    let porcentagem = (estado * 100) / tot 
    return porcentagem
}
console.log(`O valor total mensal da distribuidora foi de R$ ${tot}`);
console.log(`O percentual de representação de cada estado é:\nSP: ${percentual(sp).toFixed(2)} %
RJ: ${percentual(rj).toFixed(2)} %\nMG: ${percentual(mg).toFixed(2)} %\nES: ${percentual(es).toFixed(2)} %
Outros: ${percentual(outros).toFixed(2)} %`)
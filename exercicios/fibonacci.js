function fibonacci(n) {
    if (n <= 1) {
        return n
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
} 
/* Informe o número aqui */
let numero = 13
let vetor = []

for (let i = 0; i < numero; i++) {
    console.log(fibonacci(i));
    vetor.push(fibonacci(i))
}

if (vetor.includes(numero) == true) {
    console.log(`O número ${numero} pertece a sêquencia`);
} else {
    console.log(`O número ${numero} não pertece a sêquencia`);
}
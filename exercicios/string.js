function inverterString(str) {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }

    return newStr
}

/* Informe a String aqui */
let palavra = "Oi eu sou Natan"

console.log(inverterString(palavra))
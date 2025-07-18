// function scope 
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject)


/*
let subject = 'create video'   -> SE EU NÃO DECLARAR NADA NESSA VARIÁVEL, ELE SE TORNA UNDEFINED

function createThink(subject) {  ->  SE EU NÃO DECLARAR NADA AQUI, ELE BUSCARÁ DO SCOPE ANTERIOR, E SE NÃO TIVER, RETORNA UNDEFINED.
    subject = 'study'
    return subject
}

console.log(createThink(subject))
console.log(subject) 

*/
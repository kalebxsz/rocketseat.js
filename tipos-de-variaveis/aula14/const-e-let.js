// const e let são locais e só funcionam no escopo onde foi criada

 

 //const e let são formas de declarar variáveis em JavaScript:

// const: cria uma variável com valor constante, ou seja, não pode ser reatribuído. Usado quando o valor não vai mudar.

// let: cria uma variável mutável, ou seja, pode ser alterado depois.

// Ambos têm escopo de bloco (diferente de var, que tem escopo de função).





let y = 1;
{
  
 y = 0 
console.log('> existe y ', y);
}

console.log('> existe y depois do bloco? ', y);

# Scope 

* Escopo determina a visibilidade de alguma variavel no JS 

# Blocl statement 

```js 

// vamos iniciar um bloco 
{
    // aqui dentro é um bloco e posso colocar qualquer código
}   
  // Aqui fechamos o bloco 

O bloco, tambpem criará um novo escopo. Chamamos de `block-scoped`


## var 

```js 

// var é global e poderá funcionar fora de um escopo de bloco 

console.log('> eciste x antes do bloco? ', x)
    {
        var x = 0
    }
console.log('> existe x depois do bloco? ', x)

```
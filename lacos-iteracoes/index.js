// Estrutura WHILE E DO-WHILE
let contador = 0;

while(contador <= 10){
  console.log(contador);
  contador++; 
}
console.log("Fora do WHile")
console.log(contador)

console.log("===========")

 
let contador2 = 10;

do{
  console.log(contador2);
  contador2--;
} while(contador2 >=0);

console.log("=============================================================================")

// ESTRUTURA FOR 

 for(let i= 0; i <= 10; i++){
  console.log(i)
} 
console.log("Fora do FOR")

console.log("================================") 


let numeros = [10,20,30,40,50,60];
console.log (numeros.length);

for (let i = 0; i < numeros.length; i++){
  console.log("Posição: " + i + " - " + numeros[i] + ".")
}
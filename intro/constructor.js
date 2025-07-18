/* 
    Function () constructor 

        * expressão new
        * criar um novo objeto 
        * this keyword
*/

function Person(name) {
    this.name = name
    this.walk = function () {
        return this.name + " andando"
    }
}
const kaleb = new Person("Kaleb")
const joao = new Person("Joao")
console.log(kaleb.walk())
console.log(joao.walk())



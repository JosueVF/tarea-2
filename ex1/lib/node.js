class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }

    getValue(){
        return this.value;
    }

    setValue(value){
        this.value = value;
    }
}

const fisrtNode = new Node(3);
console.log(fisrtNode.getValue());

// La calse es la definición y el objeto es una instacia de una clase.
// Tres flujos de consola (Estandar, error, entrada)

module.exports = Node;
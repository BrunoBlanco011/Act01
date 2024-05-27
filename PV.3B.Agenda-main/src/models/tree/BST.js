import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null
    }
    agregar(value) {
        if (this.#root === null) {
            this.#root = new Node(value)
            return this.#root != null
        } else
            return this.crearNodo(this.#root, value)
    }
    crearNodo(node, value) {
        if (value.tittle < node.value.tittle) {
            if (node.left == null) {
                node.left = new Node(value)
                if (node.left != null)
                    return true
            } else
                return this.crearNodo(node.left, value)
        } else {
            if (node.right == null) {
                node.right = new Node(value)
                return node.right != null
            } else
                return this.crearNodo(node.right, value)
        }
    }
    buscarMain(value) {
        if (this.#root === null) {
            return null
        }
        else
            return this.buscar(this.#root, value)
    }
    buscar(node, value) {
        if (node.value.tittle === value)
            return node.value
        else if (value < node.value.tittle)
            return this.buscar(node.left, value)
        else
            return this.buscar(node.right, value)
    }
    recorridoMain(callback) {
        return this.recorrido(this.#root, callback)
    }
    recorrido(node, callback) {
        if (node === null) {
            return
        } else {
            //if(callback) callback(node.value) pre orden
            this.recorrido(node.left, callback)

            if (callback) callback(node.value) //in order

            this.recorrido(node.right, callback)
            //if(callback) callback(node.value)  post orden
        }
    }
    minimoMain() {
        return this.minimo(this.#root)
    }
    minimo(node) {
        if (node === null)
            return null
        else if (node.left === null)
            return node.value
        else
            return this.minimo(node.left)
    }
    maximoMain() {
        return this.maximo(this.#root)
    }
    maximo(node) {
        if (node === null)
            return null
        else if (node.right === null)
            return node.value
        else
            return this.maximo(node.right)
    }
}
export default BST
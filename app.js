//const app = Document.getElementById('jsonDisplay');

class JsonShow{
    constructor(id, nome, idade){
        _id: id;
        _nome: nome;
        _idade: Number;
    }
    get id(){
        return _id;
    }
    get nome(){
        return _nome;
    }
    get idade(){
        return _idade;
    }
}

const instacy = new JsonShow()
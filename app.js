//const app = Document.getElementById('jsonDisplay');

class JsonShow{
    constructor(id, nome, idade){
        this._id = id;
        this._nome = nome;
        this._idade = idade;
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


const instacy = [
    new  JsonShow(1, 'Ricardo',16),
    new JsonShow(1,'Inst2',14)
]

//console.log(instacy);

const mostrarJSON = JSON.stringify(instacy, null, 2);

document.getElementById('jsonDisplay').textContent = mostrarJSON;
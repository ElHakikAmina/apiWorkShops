
//liste tous les auteurs de la base
async function getAuteurs(){
    let rep = await fetch(http://localhost:8000//books/api/v1.0/
    ˓→auteur, { method: GET });
    let reponse = await rep.json();
    return reponse;
    }
    //donne les détails dun auteur par son id
    async function auteurById(id){
    let rep = await fetch('http://localhost:8000/books/api/v1.0/
    ˓→auteur/'+id, { method: GET });
    let reponse = await rep.json();
    return reponse;
    }
    //supprime un auteur grâce à son id
    async function auteurSupprime(id){
    let rep = await fetch(http://localhost:8000/books/api/v1.0/
    ˓→auteur/,
    { method: DELETE, body: JSON.stringify({ "id": id })
    });
    let reponse = await rep.json();
    return reponse;
    }

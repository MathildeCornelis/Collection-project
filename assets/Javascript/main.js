let URL = "https://www.youtube.com/watch?v=nHcubNwuKFA";
let texte = "Bande d'annonce 👇🏻"

const obj = JSON.parse(collection);

/*création des tags dans l'HTML de la console*/
function onload(){
    let div_carte = document.createElement("div");
    div_carte.classList.add('carte');
    let newBody = document.getElementsByTagName("body")[0];
    newBody.appendChild(div_carte);

    let div_image = document.createElement("div");
    div_image.classList.add('image');
    div_carte.appendChild(div_image);

    let img = document.createElement("img");
    div_image.appendChild(img);

    let div_info = document.createElement("div");
    div_info.classList.add('info');
    div_carte.appendChild(div_info);

    let div_titre_date = document.createElement("div");
    div_titre_date.classList.add('titre_date');
    div_info.appendChild(div_titre_date);

    let h1 = document.createElement("h1");
    h1.classList.add('titre');
    div_titre_date.appendChild(h1);

    let p_date = document.createElement("p");
    p_date.classList.add('date');
    div_titre_date.appendChild(p_date);

    let div_other = document.createElement("div");
    div_other.classList.add('other');
    div_info.appendChild(div_other);

    let div_real = document.createElement("div");
    div_real.classList.add('real');
    div_other.appendChild(div_real);

    let p_real = document.createElement("p");
    div_real.appendChild(p_real);

    let div_cast = document.createElement("div");
    div_cast.classList.add('cast');
    div_other.appendChild(div_cast);

    let p_cast = document.createElement("p");
    div_cast.appendChild(p_cast);

    let div_desc = document.createElement("div");
    div_desc.classList.add('desc');
    div_other.appendChild(div_desc);

    let p_desc = document.createElement("p");
    div_desc.appendChild(p_desc);

    let div_link = document.createElement("div");
    div_link.classList.add('link');
    div_info.appendChild(div_link);

    let a = document.createElement("a");
    div_link.appendChild(a);


}

/*injecter les objets dans l'HTML généré par le JS*/


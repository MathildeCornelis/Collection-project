/*création des tags dans l'HTML de la console : méthode ES6*/
/*lier le json au JS : fetch .then .then*/
fetch("assets/Javascript/carte.json")
    .then((response) => response.json())
    .then((data) => { 
        for (let elements of data){
            let carte = `
            <div class="carte">
                <div class="image">
                    <img scr="${elements.picture}">
                </div>  
                <div class="info">
                    <div class="titre_date">
                        <h1 class="titre">${elements.name}</h1>
                        <p class="date">${elements.releaseYear}</p>
                    </div>
                    <div class="other">
                        <div class="real">
                            <p>${elements.director}</p>
                        </div>
                        <div class="cast">
                            <p>${elements.cast}</p>
                        </div>
                        <div class="desc">
                            <p>${elements.resume}</p>
                        </div>
                    </div> 
                    <div class="link">
                        <a>${elements.link}</a>
                    </div> 
                </div>
            </div>
            `;
            document.querySelector("body").insertAdjacentHTML("beforeend", carte);        
        };
    });
let principal = document.getElementById('cont-princ');

foto = new Array();
foto[0] = ['images/image-product-1-thumbnail.jpg', '1'],
foto[1] = ['images/image-product-2-thumbnail.jpg', '2'],
foto[2] = ['images/image-product-3-thumbnail.jpg','3'],
foto[3] = ['images/image-product-4-thumbnail.jpg','4'];

if(principal){
    for(i=0;i<foto.length;i++){
        let creaDiv =document.createElement('div');
        let creaimg =document.createElement('img');

        creaDiv.setAttribute('class', 'foto');
        creaDiv.innerHTML=foto[i][1]
        creaimg.setAttribute('src', foto[i][0])
        principal.appendChild(creaDiv);
        principal.appendChild(creaimg);
    }
}


function toggleMode() {
    const html = document.documentElement

    /* da linha 6 até a linha 11 foi substituido pelo que está na linha 13 

    if (html.classList.contains('light')){
        html.classList.remove('light')
    }   
    else {
        html.classList.add('light')
    } */

    html.classList.toggle('light')


/* Estrutura pra quando usar light mode, modificar a foto também */
/*const img = document.querySelector("#profile img")

if (html.classList.contains('light')){
    img.setAttribute('src', './assets/avatar-light.png')
}
else{
    img.setAttribute('src', './assets/avatar.png')
}*/

}
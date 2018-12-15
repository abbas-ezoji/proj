function removeElement(elementId) {
    console.log("elementId:"+elementId)
    var element = document.getElementById(elementId)
    if(element)
        element.parentNode.removeChild(element)
}
function getCheckedCatRadio(){
    var radio = document.forms[0]
    var radioCount = radio.length
    var villaCatRadiogroup0 = document.getElementById('villaCatRadiogroup0')
    console.log("radioCount:"+radioCount)
    if(villaCatRadiogroup0.checked)
        return 'villaCatRadiogroup0'
    else
        for(i=1; i<=radioCount;i++){
            //console.log("radio[i].id:"+radio[i].id)
           if(document.getElementById('villaCatRadiogroup'+i).checked) {
                console.log("radioCheckedId:"+'villaCatRadiogroup'+i)
                return 'villaCatRadiogroup'+i
            }
        }

}
function clearCards(){
    var container = document.getElementById("root")
    while (container.firstChild) {
    container.removeChild(container.firstChild);
}
}

function doFilter(){
    clearCards()
    var radioCheckedId = getCheckedCatRadio().slice(-1)
    console.log(radioCheckedId)
    const container = document.getElementById('root');
    container.setAttribute('class', 'container-card');
    var url
    if (radioCheckedId == 0)
        url = 'http://127.0.0.1:8000/api/villa/?format=json'
    else
        url = "http://127.0.0.1:8000/api/filter/villa/?format=json&villaCategory=".concat(radioCheckedId)
    if (window.XMLHttpRequest) {
        // code for modern browsers
           request = new XMLHttpRequest();
         }
    else {
            // code for old IE browsers
            request = new ActiveXObject("Microsoft.XMLHTTP");
         }
    request.open('GET', url, true);
    request.onload =
            function(){
               var data = JSON.parse(this.response);
                if (request.status >= 200 && request.status < 400) {
                     data.forEach(villa => {
                         const card = document.createElement('div');
                         card.setAttribute('class', 'card');
                         card.setAttribute('id', villa.id);

                         btn = document.createElement("input");
                         btn.setAttribute("type", "button");
                         btn.setAttribute("id", "showBtn".concat(villa.id));
                         btn.setAttribute("onclick", "getVillaUserRegistered(".concat(villa.id).concat(");"));
                         btn.setAttribute("value", "نمایش جزئیات تور");
                         btn.setAttribute('class','loginHeader')

                         const h1 = document.createElement('h1');
                         h1.textContent = villa.title;
                         h1.setAttribute('class','tourTitle')

                         img = document.createElement('IMG');
                         img.setAttribute("src", villa.photo);
                         img.setAttribute("width", "350");
                         img.setAttribute("height", "350");

                         const p = document.createElement('p');
                         p.textContent =  villa.comment;
                         p.setAttribute('class','coments')

                         container.appendChild(card);
                         card.appendChild(btn);
                         card.appendChild(h1);
                         card.appendChild(img);
                         card.appendChild(p);
                     })

                }
            }
    request.send();
}




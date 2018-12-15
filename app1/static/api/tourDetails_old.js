function getTourUserRegistered(tourID){
    const bgDiv = document.getElementById("bgDiv");
    var divDetails = document.getElementById("divDetails".concat(tourID));
    if (divDetails == null){
        var url = "http://127.0.0.1:8000/api/tour/".concat(tourID).concat("/?format=json")
        //console.log(url)
         if (window.XMLHttpRequest) {
            // code for modern browsers
           request = new XMLHttpRequest();
         } else {
            // code for old IE browsers
            request = new ActiveXObject("Microsoft.XMLHTTP");
         }
        var result

        const showBtn = document.getElementById("showBtn".concat(tourID));

            const tourCard = document.getElementById(tourID);
            request.open('GET', url, true);
            request.onload =
            function(){
               var data = JSON.parse(this.response);
                if (request.status >= 200 && request.status < 400) {
                    const container = document.createElement('div');
                    container.setAttribute('class', 'container');
                    container.setAttribute("id", "divDetails".concat(tourID));
                    tourCard.appendChild(container);

                    result = data.registeredUsers;
                    var tourPic = data.photo
                    bgDiv.setAttribute("style",'background-image: url("'.concat(tourPic).concat('");') );

                    const p = document.createElement('p');
                    p.textContent =  `${result}...`;
                    p.setAttribute('class','coments')

                   container.appendChild(p);

                    data.galaryPictures.forEach(PicID =>{
                         var PicData = getPicByID(PicID)
                         picData => {
                            picContainer = document.createElement('div');
                            picContainer.setAttribute('class', 'container');
                            //picContainer.setAttribute("id", "divDetails".concat(tourID));
                            img = document.createElement('IMG');
                            img.setAttribute("src", picData.photo);
                            img.setAttribute("width", "350");
                            img.setAttribute("height", "350");

                            p1 = document.createElement('p');
                            p1.textContent =  `${picData.Title}`;
                            p1.setAttribute('class','coments')

                            container.appendChild(picContainer);
                            picContainer.appendChild(img);
                            picContainer.appendChild(p1);
                           }
                       }
                    );
                }
            }
           showBtn.setAttribute("value", "عدم نمایش جزئیات تور");
    }
    else  {
        bgDiv.setAttribute("style","background-image: url('http://127.0.0.1:8000/media/app1/photos/Mazichal1.jpeg')");
        const showBtn = document.getElementById("showBtn".concat(tourID));
        const x = document.getElementById("divDetails".concat(tourID));
        if (x.style.display === "none") {
            x.style.display = "block";
            showBtn.setAttribute("value", "عدم نمایش جزئیات تور");
        } else {
            x.style.display = "none";
            showBtn.setAttribute("value", "نمایش جزئیات تور");
        }
    }
    request.send();
    return result
}

function getTours(){
   const app = document.getElementById('root');
    const logo = document.createElement('img');
    //logo.src = 'logo.png';

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(logo);
    app.appendChild(container);
    url = 'http://127.0.0.1:8000/api/tour/?format=json'
    if (window.XMLHttpRequest) {
        // code for modern browsers
       request = new XMLHttpRequest();
     } else {
        // code for old IE browsers
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
    request.open('GET', url, true);
    console.log(url);
    request.onload = function () {
    var img
    var btn
      // Begin accessing JSON data here
      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        data.forEach(Tour => {
                    const card = document.createElement('div');
                    card.setAttribute('class', 'card');
                    card.setAttribute('id', Tour.id);

                    btn = document.createElement("input");
                    btn.setAttribute("type", "button");
                    btn.setAttribute("id", "showBtn".concat(Tour.id));
                    btn.setAttribute("onclick", "getTourUserRegistered(".concat(Tour.id).concat(");"));
                    btn.setAttribute("value", "نمایش جزئیات تور");
                    btn.setAttribute('class','loginHeader')

                    const h1 = document.createElement('h1');
                    h1.textContent = Tour.Title;
                    h1.setAttribute('class','tourTitle')

                    img = document.createElement('IMG');
                    img.setAttribute("src", Tour.photo);
                    img.setAttribute("width", "350");
                    img.setAttribute("height", "350");

                    const p = document.createElement('p');
                    Tour.Comment = Tour.Comment.substring(0, 300);
                    p.textContent =  `${Tour.Comment}...`;
                    p.setAttribute('class','coments')

                    container.appendChild(card);
                    card.appendChild(btn);
                    card.appendChild(h1);
                    card.appendChild(img);
                    card.appendChild(p);
        });
      } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = `Gah, its not working!`;
        app.appendChild(errorMessage);
      }
    }

    request.send();
    return
  }

function getPicByID(picID)
 {
  var picData
  url = "http://127.0.0.1:8000/api/pictures/".concat(picID).concat("/?format=json")
  if (window.XMLHttpRequest) {
      // code for modern browsers
     request = new XMLHttpRequest();
   } else {
      // code for old IE browsers
      request = new ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open('GET', url, true);
  console.log(url);
  request.onload = function () {
      picData = JSON.parse(this.response);
  }
  request.send();
  return picData;
}
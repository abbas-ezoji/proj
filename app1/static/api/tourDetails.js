function getTourUserRegistered(tourID){
    const bgDiv = document.getElementById("bgDiv");
    var divDetails = document.getElementById("divDetails".concat(tourID));
    if (divDetails == null){
        const showBtn = document.getElementById("showBtn".concat(tourID));
        const tourCard = document.getElementById(tourID);
        var result
        getTourData(tourID)
        .then(data =>
                 {  const container = document.createElement('div');
                    container.setAttribute('class', 'container');
                    container.setAttribute("id", "divDetails".concat(tourID));
                    tourCard.appendChild(container);

                    result = data.registeredUsers;
                    var tourPic = data.photo
                    bgDiv.setAttribute("style",'background-image: url("'.concat(tourPic).concat('");') );

                    const p = document.createElement('p');
                    p.textContent =  `${result}...`;
                    p.setAttribute('class','coments');

                    container.appendChild(p);

                    data.galaryPictures.forEach(PicID =>{
                         getPicByID(PicID)
                         .then(picData => {
                            picContainer = document.createElement('div');
                            picContainer.setAttribute('class', 'container-card');
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
                          );
                       }
                    );
                 }
              );
        showBtn.setAttribute("value", "عدم نمایش جزئیات تور");
    }
    else {
        const showBtn = document.getElementById("showBtn".concat(tourID));
        const x = document.getElementById("divDetails".concat(tourID));
        if (x.style.display === "none") {
            x.style.display = "block";
            showBtn.setAttribute("value", "عدم نمایش جزئیات تور");
             getTourData(tourID)
             .then(data =>{
                    tourPic = data.photo
                    bgDiv.setAttribute("style",'background-image: url("'.concat(tourPic).concat('");') );

                    });
        } else {
            x.style.display = "none";
            showBtn.setAttribute("value", "نمایش جزئیات تور");
            bgDiv.setAttribute("style","background-image: url('http://127.0.0.1:8000/media/app1/photos/Mazichal1.jpeg')");
        }
    }

    return;
}

function getTours(){
    const app = document.getElementById('root');
    var btn
    const container = document.createElement('div');
    container.setAttribute('class', 'container-card');
    app.appendChild(container);
    getTourData(0)
    .then(data => data.forEach(Tour => {
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
        }));
    return
  }

async function getTourData(tourID)
        {
          if (tourID==0){
            url = 'http://127.0.0.1:8000/api/tour/?format=json'
          }
          else{
            url = "http://127.0.0.1:8000/api/tour/".concat(tourID).concat("/?format=json")
          }
          let response = await fetch(url);
          let data = await response.json()
        return data;
        }
async function getPicByID(picID)
        {
         url = "http://127.0.0.1:8000/api/pictures/".concat(picID).concat("/?format=json")
         let response = await fetch(url);
         let picData = await response.json()
         return picData;
        }

getTours();

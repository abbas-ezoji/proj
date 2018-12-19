function getVillaUserRegistered(villaID){
    allContainersDiv = document.getElementsByClassName('container');
    if (divDetails != null)
        allContainersDiv.parentNode.removeChild(allContainersDiv);

    const bgDiv = document.getElementById("bgDiv");
    var divDetails = document.getElementById("divDetails".concat(villaID));

        // while (divDetails.firstChild) {
        //     divDetails.removeChild(divDetails.firstChild);
        // }

    if (divDetails == null){
        const showBtn = document.getElementById("showBtn".concat(villaID));
        const villaCard = document.getElementById(villaID);

        var result
        getVillaData(villaID)
        .then(data =>
                 {  const container = document.createElement('div');
                    container.setAttribute('class', 'container');
                    container.setAttribute("id", "divDetails".concat(villaID));
                    villaCard.appendChild(container);
        ///////////////////////////////////////////////////////////////////////////////
                    mapDivID = 'map'.concat(villaID)
                    map = document.createElement('div');
                    map.setAttribute('id',mapDivID)
                    map.setAttribute('class','mapouter')

                    container.appendChild(map);

                    mapDiv = document.createElement('div');
                    map.setAttribute('class','mapouter')
                    map.appendChild(mapDiv)

                    mapiFrame = document.createElement('iframe');
                    mapiFrame.setAttribute('width','300')
                    mapiFrame.setAttribute('height','300')
                    mapiFrame.setAttribute('frameborder','0')
                    mapiFrame.setAttribute('scrolling','no')
                    mapiFrame.setAttribute('marginheight','0')
                    mapiFrame.setAttribute('marginwidth','0')
                    mapiFrame.setAttribute('id','gmap_canvas'.concat(villaID))
                    mapiFrame.setAttribute('src','https://maps.google.com/maps?q='.concat(data.serchArea).concat('&t=&z=19&ie=UTF8&iwloc=&output=embed'))
                    mapDiv.appendChild(mapiFrame)

//                    scriptMap = document.createElement('script')
//                    scriptMap.setAttribute('src',"//www.powr.io/powr.js?external-type=html")
//                    divMap = document.createElement('div')
//                    divMap.setAttribute('class','powr-map')
//                    if (data.pwrioID == null)
//                        divMap.innerHTML = 'نقشه ای وجود ندارد'
//                    else
//                        divMap.setAttribute('id',data.pwrioID)
//
//                    map.appendChild(scriptMap)
//                    map.appendChild(divMap)



                    // var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    //      osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    //      osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});
                    //
                    // var map = L.map(mapDivID).setView([35.766970,51.394111], 15).addLayer(osm);
                    // console.log('Latitude:'+data.Latitude)
                    //  L.marker([data.Longitude,data.Latitude])
                    //      .addTo(mapDivID)
                    //      .bindPopup('ویلا شماره 1.<br />کلاردشت.')
                    //      .openPopup();
        ///////////////////////////////////////////////////////////////////////////////
                    result = data.registeredUsers;
                    var villaPic = data.photo
                    bgDiv.setAttribute("style",'background-image: url("'.concat(villaPic).concat('");') );

                    const p = document.createElement('p');
                    p.textContent =  `${data.comment}...`;
                    p.setAttribute('class','coments');

                    container.appendChild(p);

                    table = document.createElement('table')
                    container.appendChild(table)

                    trHeader = document.createElement('tr')
                    table.appendChild(trHeader)
                    th1 = document.createElement('th')
                    th2 = document.createElement('th')
                    th3 = document.createElement('th')
                    th1.textContent = 'روزهای هفته'
                    th2.textContent = 'قیمت'
                    th3.textContent = 'توضیحات'
                    trHeader.appendChild(th1)
                    trHeader.appendChild(th2)
                    trHeader.appendChild(th3)

                    tr = document.createElement('tr')
                    //tr.setAttribute('onclick',alert())
                    table.appendChild(tr)
                    th1 = document.createElement('th')
                    th2 = document.createElement('th')
                    th3 = document.createElement('th')
                    th1.textContent = 'شنبه'
                    th2.textContent = '120000'
                    th3.textContent = 'ندارد'
                    tr.appendChild(th1)
                    tr.appendChild(th2)
                    tr.appendChild(th3)

                    tr = document.createElement('tr')
                    //tr.setAttribute('onclick',alert())
                    table.appendChild(tr)
                    th1 = document.createElement('th')
                    th2 = document.createElement('th')
                    th3 = document.createElement('th')
                    th1.textContent = 'یکشنبه'
                    th2.textContent = '120000'
                    th3.textContent = 'ندارد'
                    tr.appendChild(th1)
                    tr.appendChild(th2)
                    tr.appendChild(th3)


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
                            p1.textContent =  picData.address;
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
        const showBtn = document.getElementById("showBtn".concat(villaID));
        const x = document.getElementById("divDetails".concat(villaID));
        if (x.style.display === "none") {
            x.style.display = "block";
            showBtn.setAttribute("value", "عدم نمایش جزئیات تور");
             getVillaData(villaID)
             .then(data =>{
                    villaPic = data.photo
                    bgDiv.setAttribute("style",'background-image: url("'.concat(villaPic).concat('");') );

                    });
        } else {
            x.style.display = "none";
            showBtn.setAttribute("value", "نمایش جزئیات تور");
            bgDiv.setAttribute("style","background-image: url('http://127.0.0.1:8000/media/app1/photos/Mazichal1.jpeg')");
        }
    }

    return;
}

function getVilla(){
    const container = document.getElementById('root');
    container.setAttribute('class', 'container-card');
    getVillaData(0)
    .then(data => data.forEach(villa => {
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

        }));
    return
  }

async function getVillaData(villaID)
        {
          if (villaID==0){
            url = 'http://127.0.0.1:8000/api/villa/?format=json'
          }
          else{
            url = "http://127.0.0.1:8000/api/villa/".concat(villaID).concat("/?format=json")
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
getVilla();


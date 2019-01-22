function getVillaDetails(villaID){
    allContainersDiv = document.getElementsByClassName('container')
    if (divDetails != null)
        allContainersDiv.parentNode.removeChild(allContainersDiv)

    const bgDiv = document.getElementById("bgDiv")
    var divDetails = document.getElementById("divDetails".concat(villaID))

    if (divDetails == null){
        const showBtn = document.getElementById("showBtn".concat(villaID))
        const villaCard = document.getElementById(villaID)

        var result
        getVillaData(villaID)
        .then(data =>
                 {  const container = document.createElement('div')
                    container.setAttribute('class', 'container')
                    container.setAttribute("id", "divDetails".concat(villaID))
                    villaCard.appendChild(container)
/////////////////////////////////////Chart//////////////////////////////////////////
                    chartContainer = document.createElement('div')
                    chartContainer.setAttribute('id','chartContainer'.concat(villaID))
                    chartContainer.setAttribute('style','width: 500px; height: 400px;')
                    container.appendChild(chartContainer)
                    var chart = anychart.pie();
                    // set the data
                    chart.data([
                      ["نقطه قوت", 5],
                      ["نقطه ضعف", 2],
                    ]);
                    // set chart title
                    chart.title("Top 5 pancake fillings");
                    // set the container element
                    chart.container("chartContainer".concat(villaID));
                    console.log(chart);
                    chart.draw();
         /////////////////////////////////////display comments//////////////////////////////////////////
                    getVillaVotesByVillaID(villaID)
                    .then(dataVotes => dataVotes.forEach(vote => {
                        commentDiv = document.createElement('div')
                        commentP = document.createElement('p')
                        container.appendChild(commentDiv)
                        console.log('getVillaVotesByVillaID'.concat(vote.comment))
                        commentDiv.appendChild(commentP)
                        commentP.textContent = vote.comment
                    }))
        /////////////////////////////////////start of map//////////////////////////////////////////
                    mapDivID = 'map'.concat(villaID)
                    map = document.createElement('div')
                    map.setAttribute('id',mapDivID)
                    map.setAttribute('class','container-card')
                    container.appendChild(map)
                    mapDiv = document.createElement('div')
                    mapDiv.setAttribute('class','col s6')
                    map.appendChild(mapDiv)
                    mapiFrame = document.createElement('iframe')
                    mapiFrame.setAttribute('width','350')
                    mapiFrame.setAttribute('height','350')
                    mapiFrame.setAttribute('frameborder','0')
                    mapiFrame.setAttribute('scrolling','no')
                    mapiFrame.setAttribute('marginheight','0')
                    mapiFrame.setAttribute('marginwidth','0')
                    mapiFrame.setAttribute('id','gmap_canvas'.concat(villaID))
                    mapiFrame.setAttribute('src','https://maps.google.com/maps?q='.concat(data.serchArea).concat('&t=&z=19&ie=UTF8&iwloc=&output=embed'))
                    mapDiv.appendChild(mapiFrame)
        /////////////////////////////////////end of map//////////////////////////////////////////
                    result = data.registeredUsers
                    var villaPic = data.photo
//                    bgDiv.setAttribute("style",'background-image: url("'.concat(villaPic).concat('");') )

                    const p = document.createElement('p')
                    p.textContent =  `${data.comment}...`
                    p.setAttribute('class','coments')
                    container.appendChild(p)

                    data.galaryPictures.forEach(PicID =>{
                         getPicByID(PicID)
                         .then(picData => {
                            picContainer = document.createElement('div')
                            picContainer.setAttribute('class', 'container-card')
                            //picContainer.setAttribute("id", "divDetails".concat(tourID))
                            img = document.createElement('IMG')
                            img.setAttribute("src", picData.photo)
                            img.setAttribute("width", "350")
                            img.setAttribute("height", "350")

                            p1 = document.createElement('p')
                            p1.textContent =  picData.address
                            p1.setAttribute('class','coments')

                            container.appendChild(picContainer)
                            picContainer.appendChild(img)
                            picContainer.appendChild(p1)
                           }
                          )
                    })

                    table = document.createElement('table')
                    container.appendChild(table)
                    trHeader = document.createElement('tr')
                    table.appendChild(trHeader)
                    th0 = document.createElement('th')
                    th1 = document.createElement('th')
                    th2 = document.createElement('th')
                    th3 = document.createElement('th')
                    th4 = document.createElement('th')
                    th0.textContent = 'تاریخ'
                    th1.textContent = 'روزهای هفته'
                    th2.textContent = 'قیمت'
                    th3.textContent = 'توضیحات'
                    th4.textContent = 'وضعیت'
                    trHeader.appendChild(th0)
                    trHeader.appendChild(th1)
                    trHeader.appendChild(th2)
                    trHeader.appendChild(th3)
                    trHeader.appendChild(th4)

                    var fromdate
                    var todate
                    var statusTitle
                    var today = new Date();
                    var fromdateDefault =  today.toISOString().slice(0,10)
                    var todateDefault = today.addMonths(1).toISOString().slice(0,10)

                    if(document.getElementById('fromdate').value)
                        fromdate = document.getElementById('fromdate').value
                   else
                       fromdate = fromdateDefault
                    if(document.getElementById('todate').vlaue )
                        todate = document.getElementById('todate').vlaue
                   else
                       todate = todateDefault
//                    console.log(today)
//                    console.log(fromdateDefault)
//                    console.log(todateDefault)
                    getVillaDateStatus(villaID,fromdate,todate)
                    .then(data => data.forEach(villadatestatus => {
                            tr = document.createElement('tr')
                            table.appendChild(tr)
                            ckBoxTR1 = document.createElement('input')
                            ckBoxTR1.setAttribute('type','button')
                            ckBoxTR1.setAttribute('name','ckBoxTR1')
                            if(villadatestatus.statusId == 0)
                                ckBoxTR1.setAttribute('class','buttonCheckGreen')
                            else if(villadatestatus.statusId == 1 || villadatestatus.statusId == 4)
                                ckBoxTR1.setAttribute('class','buttonCheckRed')
                            else if(villadatestatus.statusId == 2 || villadatestatus.statusId == 3)
                                ckBoxTR1.setAttribute('class','buttonCheckYellow')
                            else
                                ckBoxTR1.setAttribute('class','buttonCheckBlack')
                            if(villadatestatus.statusId == 1)
                                statusTitle = 'اجاره شده'
                            else if(villadatestatus.statusId == 2)
                                statusTitle = 'رزرو شده'
                            else if(villadatestatus.statusId == 3)
                                statusTitle = 'دردست تعمیر'
                            else if(villadatestatus.statusId == 0)
                                statusTitle = 'آزاد'
                            else if(villadatestatus.statusId == 4)
                                statusTitle = 'جاره داده نمی شود'
                            console.log(statusTitle)
                            td0 = document.createElement('td')
                            td1 = document.createElement('td')
                            td2 = document.createElement('td')
                            td3 = document.createElement('td')
                            td4 = document.createElement('td')
                            td0.textContent = villadatestatus.jdateYear.toString().concat('/').concat(villadatestatus.jdateMonth.toString().concat('/').concat(villadatestatus.jdateDay.toString()))
                            td1.textContent = villadatestatus.jdateWeekDay
                            td2.textContent = villadatestatus.price
                            td3.textContent = statusTitle
                            td4.appendChild(ckBoxTR1)
                            tr.appendChild(td0)
                            tr.appendChild(td1)
                            tr.appendChild(td2)
                            tr.appendChild(td3)
                            tr.appendChild(td4)
                    }))
                 }
              )
        showBtn.setAttribute("value", "عدم نمایش جزئیات تور")
    }
    else {
        const showBtn = document.getElementById("showBtn".concat(villaID))
        const x = document.getElementById("divDetails".concat(villaID))
        if (x.style.display === "none") {
            x.style.display = "block"
            showBtn.setAttribute("value", "عدم نمایش جزئیات تور")
             getVillaData(villaID)
//             .then(data =>{
//                    villaPic = data.photo
//                    bgDiv.setAttribute("style",'background-image: url("'.concat(villaPic).concat('");') )
//
//                    })
        } else {
            x.style.display = "none"
            showBtn.setAttribute("value", "نمایش جزئیات تور")
            bgDiv.setAttribute("style","background-image: ")
        }
    }

    return;
}

function doFilter(){
    clearCards()
    var radioCheckedId = getCheckedCatRadio().slice(-1)
    const container = document.getElementById('root')
    if(container){
        container.setAttribute('class','container-card')
    }
    var url
    var fromdate
    var todate
    var today = new Date();
    var fromdateDefault =  today.toISOString().slice(0,10)
    var todateDefault = today.addMonths(12).toISOString().slice(0,10)

    if(document.getElementById('fromdate').value)
         fromdate = document.getElementById('fromdate').value
    else
        fromdate = fromdateDefault
     if(document.getElementById('todate').vlaue )
        todate = document.getElementById('todate').vlaue
    else
        todate = todateDefault
    if (radioCheckedId == 0){
        url = "/api/filter/villa/?format=json"
                .concat("&date__gt=").concat(fromdate).concat("&date__lt=").concat(todate)
    }
    else
        url = "/api/filter/villa/?format=json&villaCategory=".concat(radioCheckedId)
                .concat("&date__gt=").concat(fromdate).concat("&date__lt=").concat(todate)
    console.log(url)
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
                     data.forEach(Villa => {
                        cardFrame =  document.createElement('div');
                        cardFrame.setAttribute('class', 'column medium-1 small-6 end');
                        container.appendChild(cardFrame);

                        const card = document.createElement('div');
                        card.setAttribute('class', 'card card-bordered card-offer');
                        card.setAttribute('id', Villa.id);
                        cardFrame.appendChild(card);

                        btn = document.createElement("input");
                        btn.setAttribute("type", "button");
                        btn.setAttribute("id", "showBtn".concat(Villa.id));
                        btn.setAttribute("onclick", "getVillaDetails(".concat(Villa.id).concat(");"))
                        btn.setAttribute("value", "نمایش جزئیات تور");
                        btn.setAttribute('class','btn w-100 btn-reverse btn-success')

                        const h1 = document.createElement('h1');
                        h1.textContent = Villa.title;
                        h1.setAttribute('class','tourTitle')

                        img = document.createElement('IMG');
                        img.setAttribute("src", Villa.photo);
                        img.setAttribute("onclick", "getVillaDetails(".concat(Villa.id).concat(");"))
                        img.setAttribute("width", "300");
                        img.setAttribute("height", "300");

                        price = document.createElement('p')
                        price.setAttribute('class','price')
                        spanPrice = document.createElement('span')
                        spanPrice.textContent = Villa.avgPrice
                        smallPrice = document.createElement('small')
                        smallPrice.textContent = '/میانگین شبی'
                        price.appendChild(spanPrice)
                        price.appendChild(smallPrice)

                        const p = document.createElement('p');
                        p.textContent =  Villa.comment;
                        p.setAttribute('class','coments')

                        card.appendChild(btn);
                        card.appendChild(price)
                        card.appendChild(h1);
                        card.appendChild(img);
                        card.appendChild(p);
                     })

                }
            }
    request.send();
}
function removeElement(elementId) {
    var element = document.getElementById(elementId)
    if(element)
        element.parentNode.removeChild(element)
}
function getCheckedCatRadio(){
    var radio = document.forms[0]
    var radioCount = radio.length
    var villaCatRadiogroup0 = document.getElementById('villaCatRadiogroup0')
    if(villaCatRadiogroup0.checked)
        return 'villaCatRadiogroup0'
    else
        for(i=1; i<=radioCount;i++){
            //console.log("radio[i].id:"+radio[i].id)
           if(document.getElementById('villaCatRadiogroup'+i).checked) {
//                console.log("radioCheckedId:"+'villaCatRadiogroup'+i)
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

async function getVillaData(villaID)
        {
          if (villaID==0){
            url = '/api/villa/?format=json'
          }
          else{
            url = "/api/villa/".concat(villaID).concat("/?format=json")
          }
          let response = await fetch(url)
          let data = await response.json()
        return data
        }
async function getPicByID(picID)
        {
         url = "/api/pictures/".concat(picID).concat("/?format=json")
         let response = await fetch(url)
         let picData = await response.json()
         return picData
        }
function undoFilter(){
    location.reload()
}

async function getVillaVotesByVillaID(villaId)
        {
         url = "/api/filter/villavotes/?villa=".concat(villaId)
         console.log(url)
         let response = await fetch(url)
         let dataVotes = await response.json()
         return dataVotes
        }

async function getVillaDateStatus(villaId,date_gt,date_lt)
        {///api/filter/villadatestatus/?format=json&date__gt=2018-03-20&date__lt=2018-03-30&villaId=2
         url = "/api/filter/villadatestatus/?format=json&villaId=".concat(villaId)
               .concat("&date__gt=").concat(date_gt).concat("&date__lt=").concat(date_lt)
         console.log(url)
         let response = await fetch(url)
         let data = await response.json()
         return data
        }
function undoFilter(){
    location.reload()
}

async function getVillafiltered(){
        var url
        var data
        var radioCheckedId = getCheckedCatRadio().slice(-1)
        if (radioCheckedId == 0)
            url = '/api/villa/?format=json'
        else
            url = "/api/filter/villa/?format=json&villaCategory=".concat(radioCheckedId)
                    .concat("&date__gt=2018-03-20&date__lt=2018-03-21")
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
                   data = JSON.parse(this.response);
                   if (request.status >= 200 && request.status < 400)
                        return data
                }
        request.send()
    return data
}

function undoFilter(){
    location.reload()
}

Date.isLeapYear = function (year) {
    return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
};

Date.getDaysInMonth = function (year, month) {
    return [31, (Date.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

Date.prototype.isLeapYear = function () {
    return Date.isLeapYear(this.getFullYear());
};

Date.prototype.getDaysInMonth = function () {
    return Date.getDaysInMonth(this.getFullYear(), this.getMonth());
};

Date.prototype.addMonths = function (value) {
    var n = this.getDate();
    this.setDate(1);
    this.setMonth(this.getMonth() + value);
    this.setDate(Math.min(n, this.getDaysInMonth()));
    return this;
};

doFilter()



function getVillaDetails(villaID){
    allContainersDiv = document.getElementsByClassName('container')
    if (divDetails != null)
        allContainersDiv.parentNode.removeChild(allContainersDiv)

    var divDetails = document.getElementById("divDetails".concat(villaID))

    if (divDetails == null){
        const showBtn = document.getElementById("showBtn".concat(villaID))
        const villaCard = document.getElementById(villaID)

        var url = getVillaData(villaID)
        $.getJSON( url, function( data ) {
                    const container = document.createElement('div')
                    container.setAttribute('class', 'container')
                    container.setAttribute("id", "divDetails".concat(villaID))
                    container.setAttribute('style','background-color: #cce6ff;')
                    villaCard.appendChild(container)
/////////////////////////////////////Chart//////////////////////////////////////////
                    chartContainer = document.createElement('div')
                    chartContainer.setAttribute('id','chartContainer'.concat(villaID))
                    chartContainer.setAttribute('style','width: 300px; height: 300px; background-color: #ccffff;')
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
         /////////////////////////////////////display votes//////////////////////////////////////////
                    commentContainer = document.createElement('div')
                    commentContainer.setAttribute('class','container-card')
                    commentContainer.setAttribute('style','background-color: lightblue;')
                    commentContainer.textContent = 'نظرات'
                    container.appendChild(commentContainer)

                            commentRow = document.createElement('div')
                            commentContainer.appendChild(commentRow)
                            commentPanel = document.createElement('div')
                            commentPanel.setAttribute('class','panel panel-white post panel-shadow')
                            commentRow.appendChild(commentPanel)
                            commentPostheading = document.createElement('div')
                            commentPostheading.setAttribute('class','post-heading')
                            commentPanel.appendChild(commentPostheading)
                            commentPullRightImage = document.createElement('div')
                            commentPullRightImage.setAttribute('class','pull-right image')
                            commentPostheading.appendChild(commentPullRightImage)
                            commentImg = document.createElement('img')
                            commentImg.setAttribute('class','img-circle avatar')
                            commentImg.setAttribute('alt','user profile image')
                            commentImg.setAttribute('src','http://bootdey.com/img/Content/user_1.jpg') //http://bootdey.com/img/Content/user_2.jpg
                            commentPullRightImage.appendChild(commentImg)
                            commentPullRightMeta = document.createElement('div')
                            commentPullRightMeta.setAttribute('class','pull-right meta')
                            commentPostheading.appendChild(commentPullRightMeta)
                            commentTitleH5 = document.createElement('div')
                            commentTitleH5.setAttribute('class','title h5')
                            commentPullRightMeta.appendChild(commentTitleH5)
                            commentTitleA = document.createElement('a')
                            commentTitleA.setAttribute('href','#')
                            commentTitleH5.appendChild(commentTitleA)
                            commentTitleb = document.createElement('b')
                            commentTitleb.textContent = ': کامنت ایجاد کنید:'
                            commentTitleA.appendChild(commentTitleb)
                            commentTitleH6 = document.createElement('div')
                            commentTitleH6.setAttribute('class','text-muted time')
                            commentPullRightMeta.appendChild(commentTitleH6)
                            commentTitleH6.textContent = 'همین حالا'
                            commentPostDescription = document.createElement('div')
                            commentPostDescription.setAttribute('class','post-description')
                            commentPanel.appendChild(commentPostDescription)
                            commentPost = document.createElement('input')
                            commentPost.setAttribute('placeholder','نظر شما ...')
                            commentPostDescription.appendChild(commentPost)
                            commentStats = document.createElement('div')
                            commentStats.setAttribute('class','stats')
                            commentPostDescription.appendChild(commentStats)
                            commentBtnLike = document.createElement('a')
                            commentBtnLike.setAttribute('class','btn btn-default stat-item')
    //                        commentBtnLike.setAttribute('href','')
                            commentStats.appendChild(commentBtnLike)
                            commentIcnLike = document.createElement('i')
                            commentIcnLike.setAttribute('class','fa fa-thumbs-up icon')
                            commentIcnLike.textContent = '4'
                            commentBtnLike.appendChild(commentIcnLike)
                            commentBtnDisLike = document.createElement('a')
                            commentBtnDisLike.setAttribute('class','btn btn-default stat-item')
    //                        commentBtnDisLike.setAttribute('href','')
                            commentStats.appendChild(commentBtnDisLike)
                            commentIcnDisLike = document.createElement('i')
                            commentIcnDisLike.setAttribute('class','fa fa-thumbs-down icon')
                            commentIcnDisLike.textContent = '0'
                            commentBtnDisLike.appendChild(commentIcnDisLike)


                    VillaVotesURL = getVillaVotesByVillaID(villaID)
                    $.getJSON( VillaVotesURL, function( data ) {
                        data.forEach(vote => {
                            commentRow = document.createElement('div')
                            commentContainer.appendChild(commentRow)
                            commentPanel = document.createElement('div')
                            commentPanel.setAttribute('class','panel panel-white post panel-shadow')
                            commentRow.appendChild(commentPanel)
                            commentPostheading = document.createElement('div')
                            commentPostheading.setAttribute('class','post-heading')
                            commentPanel.appendChild(commentPostheading)
                            commentPullRightImage = document.createElement('div')
                            commentPullRightImage.setAttribute('class','pull-right image')
                            commentPostheading.appendChild(commentPullRightImage)
                            commentImg = document.createElement('img')
                            commentImg.setAttribute('class','img-circle avatar')
                            commentImg.setAttribute('alt','user profile image')
                            commentImg.setAttribute('src','http://bootdey.com/img/Content/user_1.jpg') //http://bootdey.com/img/Content/user_2.jpg
                            commentPullRightImage.appendChild(commentImg)
                            commentPullRightMeta = document.createElement('div')
                            commentPullRightMeta.setAttribute('class','pull-right meta')
                            commentPostheading.appendChild(commentPullRightMeta)
                            commentTitleH5 = document.createElement('div')
                            commentTitleH5.setAttribute('class','title h5')
                            commentPullRightMeta.appendChild(commentTitleH5)
                            commentTitleA = document.createElement('a')
                            commentTitleA.setAttribute('href','#')
                            console.log('owner: '+vote.owner)
                            commentTitleA.textContent = vote.ownerTitle
                            commentTitleH5.appendChild(commentTitleA)
                            commentTitleb = document.createElement('b')
                            commentTitleb.textContent = ': کامنت ایجاد کرده'
                            commentTitleA.appendChild(commentTitleb)
                            commentTitleH6 = document.createElement('div')
                            commentTitleH6.setAttribute('class','text-muted time')
                            commentPullRightMeta.appendChild(commentTitleH6)
                            commentTitleH6.textContent = 'یک دقیقه پیش'
                            commentPostDescription = document.createElement('div')
                            commentPostDescription.setAttribute('class','post-description')
                            commentPanel.appendChild(commentPostDescription)
                            commentPost = document.createElement('p')
                            commentPost.textContent = vote.comment
                            commentPostDescription.appendChild(commentPost)
                            commentStats = document.createElement('div')
                            commentStats.setAttribute('class','stats')
                            commentPostDescription.appendChild(commentStats)
                            commentBtnLike = document.createElement('a')
                            commentBtnLike.setAttribute('class','btn btn-default stat-item')
    //                        commentBtnLike.setAttribute('href','')
                            commentStats.appendChild(commentBtnLike)
                            commentIcnLike = document.createElement('i')
                            commentIcnLike.setAttribute('class','fa fa-thumbs-up icon')
                            commentIcnLike.textContent = '4'
                            commentBtnLike.appendChild(commentIcnLike)
                            commentBtnDisLike = document.createElement('a')
                            commentBtnDisLike.setAttribute('class','btn btn-default stat-item')
    //                        commentBtnDisLike.setAttribute('href','')
                            commentStats.appendChild(commentBtnDisLike)
                            commentIcnDisLike = document.createElement('i')
                            commentIcnDisLike.setAttribute('class','fa fa-thumbs-down icon')
                            commentIcnDisLike.textContent = '0'
                            commentBtnDisLike.appendChild(commentIcnDisLike)
                    })})

        /////////////////////////////////////start of map//////////////////////////////////////////
                    mapDivID = 'map'.concat(villaID)
                    map = document.createElement('div')
                    map.setAttribute('id',mapDivID)
                    map.setAttribute('class','container-card')
                    container.appendChild(map)
                    mapDiv = document.createElement('div')
                    map.appendChild(mapDiv)
                    mapiFrame = document.createElement('iframe')
                    mapiFrame.setAttribute('width','300')
                    mapiFrame.setAttribute('height','300')
                    mapiFrame.setAttribute('frameborder','0')
                    mapiFrame.setAttribute('scrolling','no')
                    mapiFrame.setAttribute('marginheight','0')
                    mapiFrame.setAttribute('marginwidth','0')
                    mapiFrame.setAttribute('id','gmap_canvas'.concat(villaID))
                    mapiFrame.setAttribute('src','https://maps.google.com/maps?q='.concat(data.serchArea).concat('&t=&z=19&ie=UTF8&iwloc=&output=embed'))
                    mapDiv.appendChild(mapiFrame)
        /////////////////////////////////////end of map//////////////////////////////////////////
                    var villaPic = data.photo
//                    bgDiv.setAttribute("style",'background-image: url("'.concat(villaPic).concat('");') )

                    data.galaryPictures.forEach(PicID =>{
                         getPicByID(PicID)
                         .then(picData => {
                            picContainer = document.createElement('div')
                            picContainer.setAttribute('class', 'container-card')
                            picContainer.setAttribute('style', 'background-color: #80ffff;');
                            //picContainer.setAttribute("id", "divDetails".concat(tourID))
                            img = document.createElement('IMG')
                            img.setAttribute("src", picData.photo)
                            img.setAttribute("width", "300")
                            img.setAttribute("height", "300")

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
                    th3.textContent = 'وضعیت'
                    th4.textContent = 'توضیحات'
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
                    var VillaDateStatusURL = getVillaDateStatus(villaID,fromdate,todate)
                    $.getJSON( VillaDateStatusURL, function( data ) {
                        data.forEach(villadatestatus => {
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
                            td3.appendChild(ckBoxTR1)
                            td4.textContent = statusTitle
                            tr.appendChild(td0)
                            tr.appendChild(td1)
                            tr.appendChild(td2)
                            tr.appendChild(td3)
                            tr.appendChild(td4)
                    })})
                 }
              )
        showBtn.setAttribute("value", "عدم نمایش جزئیات تور")
    }
    else {
        $( '#divDetails' ).toggle( 'slow','swing' )
        console.log('toggle')
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
//            bgDiv.setAttribute("style","background-image: ")
        }
    }

    return;
}

function doFilter(){
    $("#root").empty();
    var radioCheckedId = getCheckedCatRadio().slice(-1)
    var container = document.getElementById('root')
    if(container)
        container.setAttribute('class','container')
    else{
        container = document.createElement('root')
        container.setAttribute('class','container')
    }

    var url

    url = getVillaByFilters()
    console.log(url)
    $.getJSON( url, function( data ) {
                     data.forEach(Villa => {
                        cardFrame =  document.createElement('div');
                        cardFrame.setAttribute('class', 'col-sm-4');
                        container.appendChild(cardFrame);

                        card = document.createElement('div');
                        card.setAttribute('class', 'widget-container widget_avatar boxed');
                        card.setAttribute('id', Villa.id);
                        cardFrame.appendChild(card);

                        //---------------------price badge--------------------------------
                        divPriceBadge = document.createElement('div')
                        divPriceBadge.setAttribute('class','price_col_head')
                        card.appendChild(divPriceBadge)
                        spanBadge = document.createElement('span')
                        spanBadge.setAttribute('class','badge')
                        divPriceBadge.appendChild(spanBadge)
                        spanPrice = document.createElement('span')
                        spanPrice.setAttribute('class','price')
                        spanPrice.textContent = Villa.avgPrice
                        divPriceBadge.appendChild(spanPrice)
                        emSpanPrice = document.createElement('em')
                        emSpanPrice.textContent = 'تومان'
                        spanPrice.appendChild( emSpanPrice)

                        //---------------------ribbon--------------------------------
                        divRibbon = document.createElement('div')
                        divRibbon.setAttribute('class','ribbon')
                        card.appendChild(divRibbon)
                        spanRibbon = document.createElement('span')
                        divRibbon.appendChild(spanRibbon)
                        emRibbon = document.createElement('em')
                        emRibbon.textContent = 'تخفیف'
                        spanRibbon.appendChild(emRibbon)
                        strongRibbon = document.createElement('strong')
                        strongRibbon.textContent = '10%'
                        spanRibbon.appendChild(strongRibbon)

                        //---------------------slider--------------------------------
                        divCarousel = document.createElement('div')
                        divCarousel.setAttribute('id','myCarousel'.concat(Villa.id))
                        divCarousel.setAttribute('class','carousel slide')
                        divCarousel.setAttribute('data-interval','20000')
                        card.appendChild(divCarousel)

                        divCarouselInner = document.createElement('div')
                        divCarouselInner.setAttribute('class','carousel-inner id1')
                        divCarousel.appendChild(divCarouselInner)

                        divCarouselItem = document.createElement('div')
                        divCarouselItem.setAttribute('class','active item')
                        divCarouselInner.appendChild(divCarouselItem)

                        divCarouselImg = document.createElement('img')
                        divCarouselImg.setAttribute('src',Villa.photo)
                        divCarouselImg.setAttribute('alt','')
                        divCarouselImg.setAttribute('style','height: 200px; margin-left: -131px;')
                        divCarouselImg.setAttribute("onclick", "getVillaDetails(".concat(Villa.id).concat(");"))
                        divCarouselItem.appendChild(divCarouselImg)

                        divCarouselInnerDesc = document.createElement('div')
                        divCarouselInnerDesc.setAttribute('class','carousel-desc')
                        divCarouselItem.appendChild(divCarouselInnerDesc)

                        divCarouselInnerDescSpan = document.createElement('span')
                        divCarouselInnerDesc.textContent = Villa.address
                        divCarouselInnerDesc.appendChild(divCarouselInnerDescSpan)
                        //----------//
                        divCarouselOL = document.createElement('ol')
                        divCarouselOL.setAttribute('class','carousel-indicators')
                        divCarousel.appendChild(divCarouselOL)

                        divCarouselOLLi = document.createElement('li')
                        divCarouselOLLi.setAttribute('data-target','#myCarousel'.concat(Villa.id))
                        divCarouselOLLi.setAttribute('data-slide-to','0')
                        divCarouselOLLi.setAttribute('class','active first')
                        divCarouselOL.appendChild(divCarouselOLLi)
                        //----------//
                        divCarouselAleft = document.createElement('a')
                        divCarouselAleft.setAttribute('class','carousel-control left')
                        divCarouselAleft.setAttribute('href','#myCarousel'.concat(Villa.id))
                        divCarouselAleft.setAttribute('data-slide','prev')
                        divCarouselAleft.hidefocus = true
                        divCarouselAleft.setAttribute('style','outline: none;')
                        divCarousel.appendChild(divCarouselAleft)
                        //----------//
                        divCarouselAright = document.createElement('a')
                        divCarouselAright.setAttribute('class','carousel-control right')
                        divCarouselAright.setAttribute('href','#myCarousel'.concat(Villa.id))
                        divCarouselAright.setAttribute('data-slide','next')
                        divCarouselAright.hidefocus = true
                        divCarouselAright.setAttribute('style','outline: none;')
                        divCarousel.appendChild(divCarouselAright)

                        //---------------------villa detail--------------------------------
                        divVilla = document.createElement('div');
                        divVilla.setAttribute("class", "inner clearfix");
                        card.appendChild(divVilla);

                        divAvatar = document.createElement('div');
                        divAvatar.setAttribute("class", "avatar");
                        divVilla.appendChild(divAvatar);

                        imgAvatar = document.createElement('IMG');
                        imgAvatar.setAttribute("src", Villa.photo);
                        imgAvatar.setAttribute("onclick", "getVillaDetails(".concat(Villa.id).concat(");"));
                        imgAvatar.setAttribute("alt", "");
                        divAvatar.appendChild(imgAvatar);

                        hTitle = document.createElement('h5');
                        hTitle.textContent = Villa.title;
                        divVilla.appendChild(hTitle);

                        spanComment = document.createElement('span');
                        spanComment.textContent = Villa.comment;
                        divVilla.appendChild(spanComment);

                        //---------------------post meta--------------------------------
                        divPostMeta = document.createElement('div');
                        divPostMeta.setAttribute('class','post-meta-links')
                        card.appendChild(divPostMeta)

                        ulPost = document.createElement('ul');
                        ulPost.setAttribute('class','clearfix')
                        divPostMeta.appendChild(ulPost)

                        liView = document.createElement('li');
                        liView.setAttribute('class','post-view first')
                        ulPost.appendChild(liView)
                        aView = document.createElement('a');
                        aView.setAttribute('style','outline: none;')
                        aView.hidefocus= true
                        aView.textContent = '172'
                        liView.appendChild(aView)
                        spanView = document.createElement('span')
                        spanView.setAttribute('class','icon-post')
                        aView.appendChild(spanView)
                        iView = document.createElement('i')
                        iView.setAttribute('class','icon-post')
                        spanView.appendChild(iView)

                        liComment = document.createElement('li');
                        liComment.setAttribute('class','post-comm')
                        ulPost.appendChild(liComment)
                        aComment = document.createElement('a');
                        aComment.setAttribute('style','outline: none;')
                        aComment.hidefocus= true
                        aComment.textContent = '172'
                        liComment.appendChild(aComment)
                        spanComment = document.createElement('span')
                        spanComment.setAttribute('class','icon-post')
                        aComment.appendChild(spanComment)
                        iComment = document.createElement('i')
                        iComment.setAttribute('class','icon-post')
                        spanComment.appendChild(iComment)

                        liLike = document.createElement('li');
                        liLike.setAttribute('class','post-like last')
                        ulPost.appendChild(liLike)
                        aLike = document.createElement('a');
                        aLike.setAttribute('style','outline: none;')
                        aLike.hidefocus= true
                        aLike.textContent = '172'
                        liLike.appendChild(aLike)
                        spanLike = document.createElement('span')
                        spanLike.setAttribute('class','icon-post')
                        aLike.appendChild(spanLike)
                        iLike = document.createElement('i')
                        iLike.setAttribute('class','icon-post')
                        spanLike.appendChild(iLike)

                     })

                })

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

function getVillaData(villaID)
        { var url
          if (villaID==0){
            url = '/api/villa/?format=json'
          }
          else{
            url = "/api/villa/".concat(villaID).concat("/?format=json")
          }
        return url
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

function getVillaVotesByVillaID(villaId)
        {var url
         url = "/api/filter/villavotes/?format=json&villa=".concat(villaId)
         return url
//         $.ajax({
//                  type: "GET",
//                  url: url,
//                  headers: {"Authorization": "Token ".concat(token)},
//                  contentType: "application/json",
//                  success: function(voteData){
//                      console.log('getvote')
//                      return voteData
//                  },
//                  failure: function(errMsg) {
//                      return null
//                  }
//                })
        }

function getVillaDateStatus(villaId,date_gt,date_lt)
        {var url
         url = "/api/filter/villadatestatus/?format=json&villaId=".concat(villaId)
               .concat("&date__gt=").concat(date_gt).concat("&date__lt=").concat(date_lt)
         return url
        }

function getVillaByFilters(){
        var url
        var fromdate
        var todate
        var today = new Date();
        var fromdateDefault =  today.toISOString().slice(0,10)
        var todateDefault = today.addMonths(12).toISOString().slice(0,10)
        var status = 0
        var id = 0

        if(document.getElementById("statusCheckbox").checked)
            status = 1

        if(document.getElementById('fromdate').value)
             fromdate = document.getElementById('fromdate').value
        else
            fromdate = fromdateDefault
        if(document.getElementById('todate').vlaue )
            todate = document.getElementById('todate').vlaue
        else
            todate = todateDefault
        var radioCheckedId = getCheckedCatRadio().slice(-1)
        url = "/api/filter/villa/?format=json&id=0&status=".concat(status).concat("&fromdate='").concat(fromdate).concat("'&todate='").concat(todate)
               .concat("'&villaCategory=").concat(radioCheckedId)

       console.log('getVillaByFilters')
        return url
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





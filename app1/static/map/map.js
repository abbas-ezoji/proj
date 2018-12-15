function drawMap(mapDivID){
    console.log(mapDivID)
     var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
         osmAttrib = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
         osm = L.tileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib});

    var map = L.map(mapDivID).setView([35.766970,51.394111], 15).addLayer(osm);
    console.log(mapDivID)
     L.marker([35.766970,51.394111])
         .addTo(mapDivID)
         .bindPopup('ویلا شماره 1.<br />کلاردشت.')
         .openPopup();

}

 // map ------------------------------------
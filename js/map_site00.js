/**
Author: Caleb Spradlin
Version: 1/29/2019
Class: NM 420
**/

var mymap = L.map('mapid').setView([32.63475, -112.099], 7.5);
        L.tileLayer('https://api.mapbox.com/styles/v1/cspradli/cjrjo3oqnazr32spjyxvg3xxz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY3NwcmFkbGkiLCJhIjoiY2pyYXQybm1nMGFzdjQ0cGVyOGN1bmdxNiJ9.OVzhnlqRQHtiW8jYVRuDwQ', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
                '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap);

mymap.scrollWheelZoom.disable();
//mymap.zoomControl.remove();
//mymap.touchZoom.disable();
//mymap.doubleClickZoom.disable();
//mymap.boxZoom.disable();
//mymap.keyboard.disable();

/*function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
mymap.on('click', onMapClick);*/

var markers = L.markerClusterGroup({ chunkedLoading: true });

$.get('/data/migDeaths.csv', function(csvContents) {
    var geoLayer = L.geoCsv(csvContents, {
        firstLineTitles: true, 
        fieldSeparator: ',',
        onEachFeature: function (feature, layer) {
            layer.bindPopup("<b>Name: </b>"+ feature.properties["popup"] +
             "<br><b>Gender</b>: " + feature.properties["gender"] + 
             "<br><b>Age: </b>" + feature.properties["age"] + 
             "<br><b>Date found: </b>" + feature.properties["date"] +
             "<br><b>Cause of Death: </b>" + feature.properties["cod"]
             );
        }
    });
    markers.addLayer(geoLayer);
 });


mymap.addLayer(markers);

/*
var marker = L.marker([32.25927, -111.49338]).addTo(mymap);
var marker1 = L.marker([32.28333, -111.8046]).addTo(mymap);


var circle = L.circle([31.98711, -112.88452], {
    weight: 6,
    color: '#51ABC9',
    fillColor: '#51ABC9',
    fillOpacity: 0.5,
    opacity: 0.5,
    radius: 3000
}).addTo(mymap);

var polygon = L.polygon([
    [31.94517, -111.76117],
    [31.77488, -111.11572],
    [31.51534, -111.16241],
    [31.66741, -111.87103],
], {
    weight: 0,
    color: '#51ABC9',
    fillColor: '#E6C3B8',
    fillOpacity: 0.5,
}).addTo(mymap);

//Custom Icon
var bearIcon = L.icon({
    iconUrl: 'img/blackBearIcon1.png',
    shadowUrl: 'img/blackBearIconShadow1.png',

    iconSize: [75, 75], //size of icon
    shadowSize: [100, 75], //size of Shadow
    iconAnchor: [22, 94],
    shadowAnchor: [14, 66],
    popupAnchor: [-3, -76] //point where icon should popup relative to the iconAnchor
});

var popup = L.popup();
var marker3 = L.marker([32.94184, -112.75543], {icon: bearIcon}).addTo(mymap);

marker.bindPopup("<b>Hello, World!</b><br>I am a popup").openPopup();
circle.bindPopup("UNCA is not here");
marker1.bindPopup("<img src=img/blackBear.png height='100px' width='100px' /><br><b>District 9</b><br>2017: Sightings- 50");
marker3.bindPopup("<b>Black Bear Invasion</b>");*/
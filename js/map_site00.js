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

var markers = L.markerClusterGroup({ chunkedLoading: true });

$.get('data/migDeaths.csv', function(csvContents) {
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

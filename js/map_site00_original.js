




var map = L.map('mapid').setView([35.399, -83.26], 8.69);

/* 
'mapid' is div set on html page and styled in CSS
8.69 is zoom-level, 35.399
-83.26 are lat/long pos of map centering it on Appalachian region-- retrieve from Mapbox */


//L.tileLayer('https://api.mapbox.com/styles/v1/vbradbury/cixnkyz2h000o2sojbza0uwrs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg', {
//L.tileLayer('https://api.mapbox.com/styles/v1/vbradbury/cjaa4u06z247k2sqvjrfrbik9.html?fresh=true&title=true&access_token=pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg', {

L.tileLayer('https://api.mapbox.com/styles/v1/vbradbury/cixnkyz2h000o2sojbza0uwrs/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg', {
}).addTo(map);

/*
L.tileLayer('https://api.mapbox.com/styles/v1/vbradbury/cjaa4u06z247k2sqvjrfrbik9.html?fresh=true&title=true&access_token=pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg#12.7/47.546209/-122.286251/0', {
}).addTo(map);*/


//https://api.mapbox.com/styles/v1/vbradbury/cjaa4u06z247k2sqvjrfrbik9.html?fresh=true&title=true&access_token=pk.eyJ1IjoidmJyYWRidXJ5IiwiYSI6ImNpdzVhbmxqZDAwcTUydHA1bmlseDc0bmwifQ.T0O9MJcjkbr-65R6RdhDMg#12.7/47.546209/-122.286251/0
var mediaQ = window.matchMedia( "(min-width: 1024px)");
// When the user scrolls the page, execute myFunction

    window.onscroll = function() {stickyMap()};

// Get the header
var plan = document.getElementById("map");
var card = document.querySelector('.card-result');
var container = document.querySelector(".container");
if(plan){
    var startWidth = getComputedStyle(plan).width;
}
var marginRight = getComputedStyle(container).marginLeft;
var currentWidth = getComputedStyle(card).width;


// window.onresize = function(){
//     mediaQ = window.matchMedia( "(min-width: 1024px)");
//     currentWidth = getComputedStyle(card).width;
//     marginRight = getComputedStyle(container).marginRight;
//     if(mediaQ.matches == true){
//     if (plan.classList.contains("sticky")) {
//         plan.style.right = marginRight;
//         plan.style.width = currentWidth;
//     } 
//     else {
//         plan.style.right = 0;
//         plan.style.width = 'calc(50% - 10px)';
//     }
// }
//     return currentWidth;
//     return marginRight;
// }

// // Get the offset position of the navbar
// var sticky = plan.offsetTop+530;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyMap() {        
//     if(mediaQ.matches == true){
//         if (window.pageYOffset > sticky) {
//             plan.classList.add("sticky");
//             plan.style.right = marginRight;
//             plan.style.width = currentWidth;
//         } 
//         else {
//             plan.classList.remove("sticky");
//             plan.style.right = 0;
//             plan.style.width = 'calc(50% - 10px)';
//         }
//     }
// }

// Google map
function initMap() {
    // map options

    var options = {
        zoom: 12,
        // *********************** attention enlever le com ***********************
        //center:{lat: parseFloat(document.getElementById('latitude').value), lng:parseFloat(document.getElementById('longitude').value)}
    } 

    // new map
    map = new google.maps.Map(document.getElementById('map'), {options});

    // Array of markers
    // var markers;                  
    // markers.push({
    //     coords:{lat:'{{ result[0].latitude }}',lng:'{{ result[0].longitude }}'},
    //     content:'<h2>{{ result[0].prenom }} {{ result[0].nom }}</h2>',
    // });

    // Loop trough markers
    for(var i = 0; i < markers.length; i++){
        // Add markers
        addMarker(markers[i]);
    }

    // ADD MARKER
    function addMarker(props){
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map,
            // icon: 'images/marker.png'

        });

        // Check custom icon
        if(props.icon){
            // Set icon image
            marker.setIcon(props.icon);
        }

        // Check content
        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
                content: props.content,
            });

            marker.addListener('click', function(){
                infoWindow.open(map, marker);
            });
        }
    }
}

function initialize() {
    initMap();
    initAutocomplete();
}
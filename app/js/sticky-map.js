// When the user scrolls the page, execute myFunction 
window.onscroll = function() {stickyMap()};

// Get the header
var map = document.getElementById("map");
var iframe = document.querySelector(".iframe");
var container = document.getElementById("map-container");
var startWidth = getComputedStyle(map).width;
// var height = getComputedStyle(map).height;
var marginRight = getComputedStyle(container).marginRight;
iframe.style.width = startWidth;
// iframe.style.height = height;
iframe.style.right = marginRight;


function mapWidth(){
    window.onresize = function(){
        var currentWidth = getComputedStyle(map).width;
        var marginRight = getComputedStyle(container).marginRight;
        iframe.style.width = currentWidth;
        iframe.style.right = marginRight;
        console.log(currentWidth)
        console.log(marginRight)
    }
}

// function mapHeight(){
//     var footer = document.getElementById('footer');
//     var footerHeight = getComputedStyle(footer).height;
//     var siwe = pageYOffset - footerHeight;
//     console.log(siwe);
// }

// Get the offset position of the navbar
var sticky = map.offsetTop+530;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMap() {

    if (window.pageYOffset > sticky) {
        iframe.classList.add("sticky");
    } 
    else {
        iframe.classList.remove("sticky");
    }
    mapWidth();
    // mapHeight();
}
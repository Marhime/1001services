$menu = document.querySelector('.mobile-menu');
$body = document.body;
$toggle = document.querySelector('.toggle');

if($toggle){
    $toggle.addEventListener('click', function(){
        if(this.classList.contains('close')){
            this.classList.remove('close');
        }
        else{
            this.classList.add('close');
        }
        if($menu.classList.contains('active')){
            $menu.classList.remove('active');
        }
        else{
            $menu.classList.add('active');
        }
        if($body.classList.contains('menu-open')){
            $body.classList.remove('menu-open');
        }
        else{
            $body.classList.add('menu-open');
        }
    })
}
document.addEventListener('click', function(e){
    if(e.target == $menu || e.target == $toggle){
        return;
    }
    $toggle.classList.remove('close');
    $menu.classList.remove('active');
    $body.classList.remove('menu-open');
});

function stickyNav() {
    var menu = document.getElementById("navigation");
    if(menu){
        if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
            menu.classList.add('fixed');
            document.getElementById("logo").src="../images/svg/logo-black.svg";
        } else {
            menu.classList.remove("fixed");
            document.getElementById("logo").src="../images/svg/logo-white.svg";
        }
    }
};

document.onscroll = function(){stickyNav()}

// Functions onload

function loader(){
    setTimeout(function(){
        document.querySelector('body').classList.add('loaded');
       }, 1000);
    }

function slideshow() {
    var slideshow = document.getElementById("slideshow");
    var fadeComplete = function(e) { slideshow.appendChild(arr[0]); };
    if(slideshow){
        var arr = slideshow.getElementsByTagName("img");
        for(var i=0; i < arr.length; i++) {
          arr[i].addEventListener("animationend", fadeComplete, false);
        }
    }
}

var accept_cookies = "",
    acceptBtn = document.querySelector(".accept"),
    cookies = document.getElementById("cookies");

acceptBtn.onclick = function(){
    localStorage.accept_cookies = 1;
    cookies.style.height = 0;
}

function checkCookie() {
    if(localStorage.accept_cookies){
        cookies.style.display = 'none';
    }
    else{
        cookies.style.display = 'flex';
    }
}


window.addEventListener("DOMContentLoaded", function(){loader(); slideshow(); checkCookie()}, false);


// Get the modals
var modals = document.querySelectorAll('.modal'),
    l = modals.length;
    

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for (i = 0; i < l; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
            $body.style.overflow = 'auto';
        }
    }
}

// Get the buttons
var openBtn = document.getElementsByClassName("open-modal"),
    closeBtn = document.getElementsByClassName('close-modal')

// Open modal
for (var i = 0; i < openBtn.length; i++) {
  const thisBtn = openBtn[i];
  thisBtn.addEventListener("click", function(){
    for (i = 0; i < l; i++) {
        modals[i].style.display = 'none';
    }
    var modal = document.getElementById(this.dataset.modal);
    modal.style.display = "flex";
    $body.style.overflow = "hidden";
}, false)};

// Close modal
for (var i = 0; i < closeBtn.length; i++){
    const thisBtn = closeBtn[i];
    thisBtn.addEventListener("click", function(){
        for (i = 0; i < l; i++) {
            modals[i].style.display = 'none';
            $body.style.overflow = "auto";
        }
    })
}

var loginBtn = document.querySelector("#btn-login");
var registerBtn = document.querySelector("#btn-register");
var cantFindBtn = document.querySelector("#btn-cant");
var username = document.querySelector("#email");
var password = document.querySelector("#password");
var pError = document.querySelector("#l-error");
var registerForm = document.querySelector("#register-form");
var gender = document.querySelector("#gender");
var lastname = document.querySelector("#lastname");
var nickname = document.querySelector("#nickname");
var email = document.querySelector("#email1");
var phone = document.querySelector("#phone");
var emailCF = document.querySelector("#email2");
var subject = document.querySelector("#subject");
var message = document.querySelector("#message");
var cantFindForm = document.querySelector("#cf-form");

loginBtn.onclick = function(event){
    event.preventDefault();
    // loading animation
    var xhr = new XMLHttpRequest();
    var data = "_username="+username.value+"&_password="+password.value;
    xhr.open("POST", loginUrl, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var reponse = JSON.parse(xhr.responseText);
            if(reponse.status == "ok") {
                // Login ok, redirect page to reponse.redirect_url
                window.location = reponse.redirect_url;
            } else {
                // login error, display reponse.message
                pError.innerHTML = reponse.message;
                pError.classList.add('error');
            }
        }
    };
    xhr.send(data);
    return false;
};

registerBtn.onclick = function(event){
    event.preventDefault();

    // loading animation
    var xhr = new XMLHttpRequest();
    var data = "gender="+gender.value+"&name="+lastname.value+"&nickname="+nickname.value+"&email1="+email.value+"&phone="+phone.value;

    xhr.open("POST", registerUrl, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            if(response.code == '400') {
                for (var key in response.errors) {
                    if (response.errors.hasOwnProperty(key)) {
                        document.querySelector('#'+key).style.backgroundColor = '#db51513d';
                    }
                }
            } else if(response.code == '200'){
                for (i = 0; i < registerForm.length; i++) {
                    if(registerForm[i].style.display == 'none'){
                        registerForm[i].style.display = 'block';
                    }
                    else{
                        registerForm[i].style.display = 'none';
                    }
                }
            }
        }
    };
    xhr.send(data);
    return false;
}

cantFindBtn.onclick = function(event){
    event.preventDefault();

    // loading animation
    var xhr = new XMLHttpRequest();
    var data = "email2="+emailCF.value+"&subject="+subject.value+"&message="+message.value;

    xhr.open("POST", cantfindUrl, true);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response);
            if(response.code == '400') {
                for (var key in response.errors) {
                    if (response.errors.hasOwnProperty(key)) {
                        document.querySelector('#'+key).style.backgroundColor = '#db51513d';
                    }
                }
            } else if(response.code == '200'){
                for (i = 0; i < cantFindForm.length; i++) {
                    if(cantFindForm[i].style.display == 'none'){
                        cantFindForm[i].style.display = 'block';
                    }
                    else{
                        cantFindForm[i].style.display = 'none';
                    }
                }
            }
        }
    };
    xhr.send(data);
    return false;
}

// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

    // This example requires the Places library. Include the libraries=places
    // parameter when you first load the API. For example:

    var placeSearch, autocomplete;
    var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
    };

    function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});

    // Set initial restrict to the greater list of countries.
    autocomplete.setComponentRestrictions(
        {'country': ['fr']});
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
    }

    function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
        document.getElementById(component).value = '';
        document.getElementById(component).disabled = false;
    }

    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
        var addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
        }
    }
    }

    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.
    function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
            center: geolocation,
            radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
        });
    }
}

$('#select-category').selectize({
    labelField: 'name',
    searchField: ['name'],
    render: {
        optgroup_header: function(data, escape) {
            return '<div class="optgroup-header">' + escape(data.label) + '</div>';
        }
    }
});

var spanYear = document.querySelector('#year');
var d = new Date();
var n = d.getFullYear();
spanYear.innerHTML = n;
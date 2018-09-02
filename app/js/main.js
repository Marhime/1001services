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
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove("fixed");
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
var username = document.querySelector("#email");
var password = document.querySelector("#password");
var pError = document.querySelector("#l-error");

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
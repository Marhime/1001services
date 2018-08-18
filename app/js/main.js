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
document.addEventListener('DOMContentLoaded', function(event){
    setTimeout(function(){
        document.querySelector('body').classList.add('loaded');
       }, 1000);
})

var i=0;
var images=['../images/hero-01-large.jpg', '../images/hero-02-large.jpg', '../images/hero-03-large.jpg'];
function changeImg(){
    document.slide.style.opacity = 1;
    document.slide.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout(function(){
        changeImg();
    }, 12000);
    setTimeout(function(){
        document.slide.style.opacity = 0.4;
    }, 11200);
}
var placeholders=['Electricien', 'Coiffeur', 'Plombier', 'Architecte']
window.onload=changeImg;


// Get the modal
var signup = document.getElementById('signup-modal'),
    signin = document.getElementById('login-modal'),
    cantFind = document.getElementById('cantfind-modal'),
    modal = document.getElementsByClassName('modal')


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == signup) {
        signup.style.display = "none";
    }
    if (event.target == signin) {
        signin.style.display = "none";
    }
    if (event.target == cantFind) {
        cantFind.style.display = "none";
    }

}
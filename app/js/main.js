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
window.onscroll = function() {
    var menu = document.getElementById("navigation");
    if(menu){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            menu.classList.add('fixed');
        } else {
            menu.classList.remove("fixed");
        }
    }
};
document.addEventListener('DOMContentLoaded', function(event){
    setTimeout(function(){
        document.querySelector('body').classList.add('loaded');
       }, 1000);
})
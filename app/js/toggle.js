$menu = document.querySelector('.mobile-menu');
$body = document.querySelector('body');
$toggle = document.querySelector('.toggle');

$toggle.addEventListener('click', function(){
    console.log('clicked')
    if($menu.classList.contains('active')){
        $menu.classList.remove('active');
    }
    else{
        $menu.classList.add('active');
    }
})
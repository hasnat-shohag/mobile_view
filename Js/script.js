const user_info = document.getElementById("user_info");

user_info.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById("pop_up_nav_links_body").classList.toggle('nav_show');
})

const nav_trigger = document.getElementById("nav_trigger");

nav_trigger.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById("toggle").classList.toggle('toggle_nav_show');
})

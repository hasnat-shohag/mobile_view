const user_info = document.getElementById("user_info")

user_info.addEventListener('click',function(e){
    e.preventDefault();
    document.getElementById("pop_up_nav_links_body").classList.toggle('nav_show')
})


$(document).ready(function(){
    $('#nav_trigger').click(function(){
        $('#toggle').slideToggle(1000);
    })
})

$(document).ready(function () {
    const header = document.querySelector("header");
    window.addEventListener("scroll", function() {
        header.classList.toggle("sticky",window.scrollY > 0);
    });

    let menu = document.querySelector('#menu-icon');
    let navlist = document.querySelector('.navlist');

    menu.onclick = () =>{
        menu.classList.toggle('bx-x');
        navlist.classList.toggle('open');
    }
    window.onscroll = () => {
        menu.classList.remove('bx-x');
        navlist.classList.remove('open');
    }
    const sr = ScrollReveal({
        distance: '30px',
        duration: 2600,
        reset: true
    });

    sr.reveal('.home-text', { delay: 200, origin: 'bottom' });
    sr.reveal('.featured, .cta, .new, .brand, .contact', { delay: 150, origin: 'bottom' });
    $(".btn_1").click(function (e) { 
        $('#login').modal();
    });

    
    $("#updateForm").submit(function(event) {
        event.preventDefault(); 

       
        var newAddress = $("#updateAddress").val();

        
        console.log("Địa chỉ mới: " + newAddress);

       
        $("#formAddress").modal("hide");
    });
});
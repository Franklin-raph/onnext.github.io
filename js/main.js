const faws = document.querySelectorAll('.card')

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#nav-bg').addClass('fixed-top bg-nav');
        $('.nav-item a').css('color','rgb(0, 162, 255)');
        $('#nav-bg').css({'transition' :'0.3s'});
        $('#nav-img').css({
            'width':'130',
            'height':'55'
        });
        $('.navbar').css('box-shadow','0px 1px 1px rgb(32, 32, 32, 0.3)');
        $('#back2Top').fadeIn();
        
    } else {
        $('#nav-bg').removeClass('fixed-top bg-nav');
        $('.nav-item a').css('color','#fff')
        $('#nav-img').css({
            'width':'100%',
            'height':'100%'
        });
        $('.navbar').css('box-shadow','0px 0px 0px #000000');
        $('#back2Top').fadeOut();
    }

    if(height > 0){
        $('#home').css({
            'background-color':'#fff',
            'color': 'rgb(0, 162, 255)',
            'border-radius': '50px 50px 0 50px;'
        })
    }else{
        $('#home').css({
            'background-color':'rgb(0, 162, 255)',
            'color': '#fff',
            'border-radius': '50px 50px 0 50px;'
        })
    }
});

$(document).ready(function(){
    var $grid = $('.portfolio-imgs').isotope({
        itemSelector:"#portfolio-card",
        layoutMode: "fitRows"
    });

    $(".portfolioBtns").on("click", "button",function(){
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({filter:filterValue});
    })
})

setTimeout(function(){
    $("#preloader").fadeToggle();
},1500);

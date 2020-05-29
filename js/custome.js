$(document).ready(function(){
    
    var $window = $(window),
        navLink = $(".navbar-nav .nav-item .nav-link");
        
    /* add class active to link and smoth scroll to its Section*/
    navLink.on("click",function(){
        /* remove class active from all item in navbar*/
        $(".navbar-nav .nav-item").removeClass("active");
        $(this).parent(".nav-item").addClass("active");
        $('body,html').animate({   
            scrollTop:$($(this).attr("href")).offset().top + 1       
        },1000);
    });
    
    /* Show and hidden the mobial menu */
    $(".navbar").on("click",".fa-bars",function(){
        $(".navbar .collapse").addClass("show");
        $(".navbar .collapse.show").animate({right:0});
        
    });
    $(".navbar .menu-close").on("click",".fa-times",function(){
        $(".navbar .collapse.show").animate({right:"-300px"},function(){
            $(".navbar .collapse").removeClass("show");
        });        
    });
    
    /*  smoth scroll to its Section When clicked on */
    $(".home a").on("click",function(){
        $('body,html').animate({   
            scrollTop:$($(this).attr("href")).offset().top + 1       
        },1000);
    });

    
    /* Shuffal the portfolio */
    var portItem = $(".portfolio .card-columns .card");
    $(".portfolio-btn .btn").on("click",function(){
        $(this).addClass("active").siblings(".btn").removeClass("active");
        if($(this).data("class") === ".all"){
            portItem.fadeIn(500);
        }else{
            portItem.fadeOut(500);
            $($(this).data("class")).fadeIn(500);
        }
    });
    
     
    /* while scroll the window */
    $window.scroll(function(){
        
        /* sync the links with sections */
        $(".section").each(function(){
            if($window.scrollTop() >= $(this).offset().top ){
                var sectionId = $(this).attr("id");
                /* remove class active from all item in navbar*/
                $(".navbar-nav .nav-item").removeClass("active");
                /* add class active to the item  that equal the same ID in navbar*/
                $(".navbar-nav .nav-item .nav-link[href='#"+sectionId+"']")
                    .parent(".nav-item").addClass("active");
                
            }
        });
        
        /* make the navBar fixed */
        var nav = $(".navbar");
        if($(this).scrollTop() > 0){
            nav.addClass("fixed-nav");
            if($(this).scrollTop() > 100){
                nav.css({
                    paddingTop : "10px" ,
                    paddingBottom :"10px"
                });
            }else{
                nav.css({
                    paddingTop : "2rem" ,
                    paddingBottom :"2rem"
                });
            }
        }else{
            nav.removeClass("fixed-nav");
            nav.css({
                paddingTop : "2rem" ,
                paddingBottom :"2rem"
            });
        }

    });
    
    /* while scroll the window */
    $window.resize(function(){
    
        /* set the height of header equal to window height */
        $("header").height($window.innerHeight());
    
    });    
});
'use strict'

$(document).ready(function(){


    $('.body').on({'mousemove' : function ( e ) { 
        console.log(e)
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientY
        $('#cursor').css({
            'left': (clientX - 40) + 'px',
            'top' : (clientY - 40) + 'px'
        })
     }})
     
     
     $('.nav-li').on({
        'mouseover' : function () {
             $('#cursor').addClass('mini')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('mini')
          
        },       
      });

      

      $('#since').on({
        'mouseover' : function () {
             $('#cursor').addClass('maxi')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('maxi')
          
        }
     
     
    })

    $('#hero__p').on({
        'mouseover' : function () {
             $('#cursor').addClass('eye')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('eye')

        }
    })

    $('#card-div').on({
        'mouseover' : function () {
             $('#cursor').addClass('maxi')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('maxi')
          
        }
     
     
    })

    $('#webdesign').on({
        'mouseover' : function(){
            $('#cursor').addClass('prices')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('prices')
          
        }
    })

    $('#fotog').on({
        'mouseover' : function(){
            $('#cursor').addClass('fotog')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('fotog')
          
        }
    })

    $('#fotop').on({
        'mouseover' : function(){
            $('#cursor').addClass('fotop')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('fotop')
          
        }
    })

    $('#branding').on({
        'mouseover' : function(){
            $('#cursor').addClass('branding')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('branding')
          
        }
    })

    $('.svg-row').on({
        'mouseover' : function(){
            $('#cursor').addClass('maxi')
        },
        'mouseout' : function (){
            $('#cursor').removeClass('maxi')
          
        }
    })

    // Cursor hover para botones de más info
    $('.mi-button').on({
        'mouseover' : function () {
             $('#cursor').addClass('mini')
           },
        'mouseout' : function (){
            $('#cursor').removeClass('mini')
          
        },       
      });

    // Detectar cuando el nav está sobre la sección de servicios para aplicar glassmorphism
    const nav = document.querySelector('.nav');
    const divisorSection = document.querySelector('#divisor');
    
    if (nav && divisorSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    nav.classList.add('nav-on-servicios');
                } else {
                    nav.classList.remove('nav-on-servicios');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '-80px 0px 0px 0px' // Ajusta según la altura del nav
        });
        
        observer.observe(divisorSection);
    }

});







console.clear()
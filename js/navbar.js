  $(document).ready(function() {

    $('.feature-section').waypoint(function(direction){   
		if (direction === 'down') {
			$('nav').addClass('sticky');
			//alert('hello');

		}else if (direction === 'up'){
			$('nav').removeClass('sticky');
		}
	}, {offset: '0%'});


		$(".mobile-navigation-icon").click(function() {
                  //$(".main-navigation").toggleClass('active');
                  var mobiVisi = $('.main-navigation').is(':visible');
                  var navsMobi = $('.main-navigation');
                  var navIcon  = $('.js-nav-icon');
                  var contentPlacement = 0;
                  contentPlacement = $('nav').position().top + $('nav').height();



                  if (navIcon.hasClass('ion-navicon-round')) {
                  		$('.js-nav-icon').removeClass('ion-navicon-round').addClass('ion-close-round');
                  }else{
                  		$('.js-nav-icon').removeClass('ion-close-round').addClass('ion-navicon-round');
                  }


                  if(mobiVisi){
                  		  	
				          navsMobi.css('top', contentPlacement);
				          // 
				          navsMobi.slideUp(500);
				           
				        }
				  if(!mobiVisi && $('nav').hasClass('sticky')){
				            
				            $('.main-navigation').css('top',contentPlacement);
				            console.log(contentPlacement);
				             
				            navsMobi.slideDown(500);   
				            
				        } else if (!mobiVisi) {
				            $('.main-navigation').css('top',contentPlacement);
				            console.log(contentPlacement); 
				            navsMobi.slideDown(500);   
				            
				        }      


                  	/*var navsMobi = $('.main-navigation');
        			var mobiVisi = $('.main-navigation').is(':visible')
        			var navWidth = $('nav').css('width');
						if(mobiVisi){
				          navsMobi.css('margin-top', 0);
				          navsMobi.slideOut(100);  
				        }
				        if(!mobiVisi && $('nav').hasClass('sticky')){
				            var contentPlacement = $('nav').position().top + $('nav').height();
				            $('.mobile-navigation').css('margin-top',contentPlacement); 
				            navsMobi.slideIn(100);   
				        } else if (!mobiVisi) {
				            navsMobi.slideIn(100).css('margin-top', '0');
				        }
				        */
				});
            
		
		  

});
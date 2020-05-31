 /*
 $.ajax({
        url: "https://api.linkpreview.net?key=123456&q=https://www.google.com",
        success: function(result){
            //alert(result);
            console.log(result);
    
    }
});
 var mobile_navigation_html = `<ul class="mobile-navigation" style="display:block;">
                <li><a href="#">Food Delievry</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">Our Cities</a></li>
                <li><a href="#">Sign Up</a></li>
            </ul>`;*/

$(document).ready(function(){

	$('.feature-section').waypoint(function(direction){
        
       
		if (direction === 'down') {
			$('nav').addClass('sticky');
			//alert('hello');

		}else if (direction === 'up'){
			$('nav').removeClass('sticky');
		}
	}, {offset: '0%'});

    
	//Mobile Navigation Dropdown
	$('.mobile-navigation-icon').click(function(){
        
         var navsMobi = $('.mobile-navigation');
         var mobiVisi = $('.mobile-navigation').is(':visible')
         var navWidth = $('nav').css('width');

        //$('.mobile-margin').css('top', navWidth);

        //if($('nav').hasClass('sticky')){
        //    $('.mobile-navigation').addClass('mobile-margin');
        //}
        //navsMobi.slideUp(200).removeClass('mobile-margin');
        //console.log($('nav').hasClass('sticky'));
        //&& $('nav').hasClass('sticky')
        //if(mobiVisi){
            
        //}

        
        if(mobiVisi){
          navsMobi.css('margin-top', 0);
          navsMobi.fadeOut(100);  
        }
        if(!mobiVisi && $('nav').hasClass('sticky')){
            var contentPlacement = $('nav').position().top + $('nav').height();
            //console.log(contentPlacement + $('nav').position().top + $('nav').height());
            //var contentPlacement = $('nav').position().top + $('nav').outerHeight();
            $('.mobile-navigation').css('margin-top',contentPlacement); 
            navsMobi.fadeIn(100);   
        } else if (!mobiVisi) {
            navsMobi.fadeIn(100).css('margin-top', '0');
        }
        
		        //nav.parent('.sticky').slideToggle(200);
		//navs.slideToggle(200).removeClass('mobile-margin');
		}); 

}); 
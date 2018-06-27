$(function() {
	
	// jQuery code goes here
    
    
    
    //DROPDOWN MENUS
    $('.panel').hide();
    
    $('.design-accordion').click(function() {
        $(this).closest('.design-bottom').next().slideToggle();
    });
    
    $('.ill-accordion').click(function() {
        $(this).closest('.ill-box').next().slideToggle();
    });
    
    $('.cust-accordion').click(function() {
        $(this).next().slideToggle();
    });
	
	
    
    
    //GENERATE KEYBOARD
    $('.generate-button').click(function() {
        r = Math.floor(Math.random() * 4);
        if (r == 0) {
            document.getElementById("generate").style.backgroundImage="url(../project2/img/keyboard1.png)";
        }
        
        if (r == 1) {
            document.getElementById("generate").style.backgroundImage="url(../project2/img/keyboard2.png)";
        }
        
        if (r == 2) {
            document.getElementById("generate").style.backgroundImage="url(../project2/img/keyboard3.png)";
        }
        
        if (r == 3) {
            document.getElementById("generate").style.backgroundImage="url(../project2/img/keyboard4.png)";
        }
        
    });
    
    
    
    
    //QUANTITY
        
    $('.quantity-increase').click(function() {
        $('.quantity-counter').html(function(i, val) {
            if (val>=10) {
                val=10;
            }
 
            else {
                return val*1+1;
            } 
        });
    });
    
    $('.quantity-decrease').click(function() {
        $('.quantity-counter').html(function(i, val) {
            if (val<=1) {
                val=1;
            }
                
            else {
                return val-1;
            } 
                                                     
        });
    });
    
    
    
    
    
    
    $('.create').hide();
    $('.dim').hide();
    
    //CREATE
    
    $('.create-btn').click(function() {
        $('.create').fadeIn();
        $('.dim').fadeIn();
    });
    
    $('.dim').click(function() {
        $('.create').fadeOut();
        $('.dim').fadeOut();
    });
    
	
});
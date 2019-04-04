$(function () {
    
    'use strict';
    
    $(window).scroll(function () {
        
        var navbar = $('.navbar');
    
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
        } else {
            
            navbar.removeClass('scrolled');
        }
        // abrevation for if 
        // $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled')
        
    });
    
     /*
     // Deal with tabs 
    $('.tap-switch li').click(function () {
        //add select class to active class
        $(this).addClass('selected').siblings().removeClass('selected');
       // hide all dives in the tabs content
        $('.tabs .tabs-content > div').hide();
        
        $($(this).data('class')).show();
    });*/
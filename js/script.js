// Google API Key:  AIzaSyBsfCq6i7bDkV-mtzCuqn8tJGKe9GkErX0

$(document).ready(function(){


    /*======= Navigation Scroll ========*/
    $("a[href='#beds']").click(function() {
        $("html, body").animate({scrollTop: $("#beds").offset().top}, 'slow');
    });


    $("a[href='#mattressTips']").click(function() {
        $("html, body").animate({scrollTop: $("#mattressTips").offset().top}, 'slow');
    });

    $("a[href='#aboutUs']").click(function() {
        $("html, body").animate({scrollTop: $("#aboutUs").offset().top}, 'slow');
    });
    
    $("a[href='#contactUs']").click(function() {
        $("html, body").animate({scrollTop: $("#contactUs").offset().top}, 'slow');
    });



    $(window).scroll(function () {
        // console.log($(this).scrollTop() );
        
           if ($(this).scrollTop() > 450) {
               $('#back-to-top').fadeIn();
           } else {
               $('#back-to-top').fadeOut();
           }
       });
       // scroll body to 0px on click
       $('#back-to-top').click(function () {
           $('#back-to-top').tooltip('hide');
           $('body,html').animate({
               scrollTop: 0
           }, 800);
           return false;
       });
       
       $('#back-to-top').tooltip('show');

        
        
});

//   -=-=-=-=-=-=-=-=-=-=-=-=-=-= Not Working on Mobile Yet -=-=-=-=-=-=-=-=-=-=-=-=-=-=

var touch = window.navigator.userAgent.toLowerCase().includes("mobi");
$('.img-holder').imageScroll({
    // imageAttribute: (touch === true) ? 'image-mobile' : 'image',
    // touch: touch
  });



/* === Mattress Modal === */
$('#mattressModal').on('show.bs.modal', function (event) {
        
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('name') // Extract info from data-* attributes
    
        var Belleza = {
            name: 'Belleza Classica',
            info: '<ul class="col"><li>Memory Foam Infused with Gel Pillow Top</li>\
            <li>Individual Pocket Coil Unit</li></ul>\
            <ul class="col"><li>Foam Encasement</li>\
            <li>Blue Suede Border</li></ul>',
            table: "<tr><td>Comfort Level</td><td>Medium Firm</td></tr>\
            <tr><td >Topper Type</td><td>Pillow Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$1399</td></tr>\
            <tr><td>MSRP Full Set</td><td>$1799</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$1999</td></tr>\
            <tr><td>MSRP California King Set</td><td>$2399</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$2399</td></tr>"
        };

        var Chiro = {
            name: 'Chiro Care',
            info: '<ul class="col"><li>5 Turn Heavy Duty Bonnel Spring</li>\
            <li>1" High Density Foam Layer</li></ul>\
            <ul class="col"><li>Comfort Fiber Layers</li></ul>',
            img: './assets/Belleza-Chart.png',
            table: '<tr><td>Height</td><td>8"</td></tr>\
            <tr><td>Comfort Level</td><td>Firm</td></tr>\
            <tr><td>Topper Type</td><td>Tight Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$259</td></tr>\
            <tr><td>MSRP Full Set</td><td>$299</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$399</td></tr>\
            <tr><td>MSRP California King Set</td><td>$599</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$599</td></tr>'
        };
        
        var ComfortHaven = {
            name: 'Comfort Haven',
            info: "<ul class='col'><li>357 Verticoil Spring Unit</li>\
            <li>Two Tone Euro Plaid Damask Cover With Stretched Top</li>\
            <li>Double Sided Construction 1.8 Foam Layers</li></ul>\
            <ul class='col'><li>Tack and Jump Design</li>\
            <li>Side Support</li>\
            <li>Convulated Pressure Relieving Foam on Pillow Top</li></ul>",
            
            table: "<tr><td>Comfort Level</td><td>Medium Plush</td></tr>\
            <tr><td>Topper Type</td><td>Pillow Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$759</td></tr>\
            <tr><td>MSRP Full Set</td><td>$1059</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$1159</td></tr>\
            <tr><td>MSRP California King Set</td><td>$1599</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$1599</td></tr>"
        };
        
        var Hercules = {
            name: 'Hercules',
            info: "<ul class='col'><li>High Density Foam</li>\
            <li>Pocket Coil Unit</li>\</ul>\
            <ul class='col'><li>Grey Velour Border</li>\
            <li>Foam Encasement</li></ul>",
            
            table: "<tr><td>Comfort Level</td><td>Extra Firm</td></tr>\
            <tr><td>Topper Type</td><td>Tight Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$699</td></tr>\
            <tr><td>MSRP Full Set</td><td>$999</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$1159</td></tr>\
            <tr><td>MSRP California King Set</td><td>$1499</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$1499</td></tr>"
        };
        
        var HermosaPlush = {
            name: 'Hermosa Plush',
            info: ' <ul class="col"><li>Foam Encasement</li>\
            <li>2" Reflex Foam For Support</li></ul>\
            <ul class="col"><li>Super Soft Pillow-Textile Topper</li>\
            <li>2" Natural Breathable Latex</li></ul>',
            
            table: "<tr><td>Comfort Level</td><td>Plush</td></tr>\
            <tr><td>Topper Type</td><td>Pillow Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$499</td></tr>\
            <tr><td>MSRP Full Set</td><td>$699</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$799</td></tr>\
            <tr><td>MSRP California King Set</td><td>$1159</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$1159</td></tr>"
        };
        
        var IGel = {
            name: 'I-Gel',
            info: '<ul class="col"><li>Foam Encasement</li>\
            <li>Pocketed Coils Individually Wrapped</li>\
            <li>3" Support Foam</li></ul>\
            <ul class="col"><li>2" 5.3 Gel With Carbon Fiber Cells To Emiminate Foam Odors</li>\
            <li>3.5" Quilted Channel Topper For Maximum Plush Feel</li></ul>',
            
            table: '<tr><td>Height</td><td>13"</td></tr>\
            <tr><td>Comfort Level</td><td>Ultra Plush</td></tr>\
            <tr><td>Topper Type</td><td>Pillow Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$1059</td></tr>\
            <tr><td>MSRP Full Set</td><td>$1299</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$1499</td></tr>\
            <tr><td>MSRP California King Set</td><td>$1699</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$1699</td></tr>'
        };
        
        var Institution = {
            name: 'Institution',
            info: '<ul class="col"><li>Fire Barrier</li>\
            <li>Foam Topper</li>\
            <li>Comfort Layer</li>\
            <li>Sturdy Bonnell Spring Unit</li></ul>\
            <ul class="col"><li>Insulator Pad</li>\
            <li>Bacterial/Fungal Resistant</li>\
            <li>Fluid Resistant</li>\
            <li>Non-Allergenic</li></ul>\
            <ul class="col"><li>Easy To Clean</li>\
            <li>Flame Retardant</li>\
            <li>Stain/Tear Resistant</li>\
            <li>Malodor Protection</li></ul>',
            
            table: '<tr><td>Comfort Level</td><td>Firm</td></tr>\
            <tr><td>Topper Type</td><td>Tight Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$Call For Price</td></tr>\
            <tr><td>MSRP Full Set</td><td>$Call For Price</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$Call For Price</td></tr>\
            <tr><td>MSRP California King Set</td><td>$Call For Price</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$Call For Price</td></tr>'
        };
        
        var LumbarSupport = {
            name: 'Lumbar Support',
            info: '<ul class="col"><li>10" Heavy Duty 357 Verticoil Spring Unit</li>\
            <li>Non-Flip Construction</li>\
            <li>High Densified Fiber Layer</li>\
            <li>Sided Reflex Supports</li></ul>\
            <ul class="col"><li>Green Damask Bamboo Cover With Soft Stretch Knit Top Cover</li>\
            <li>Layer of High Density 1.8 Foam</li>\
            <li>Lumbar Center Supports</li></ul>',
            
            table: '<tr><td>Height</td><td>10"</td></tr>\
            <tr><td>Comfort Level</td><td>Extra Firm</td></tr>\
            <tr><td>Topper Type</td><td>Tight Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$499</td></tr>\
            <tr><td>MSRP Full Set</td><td>$799</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$899</td></tr>\
            <tr><td>MSRP California King Set</td><td>$1259</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$1259</td></tr>'
        };
        
        var Malibu = {
            name: 'Malibu',
            info: '<ul class="col"><li>1.5" of High Density Foam</li>\
            <li>336 High Density Spring Unit</li></ul>\
            <ul class="col"><li>Bamboo Cover With Ant-Microbial Fibers</li></ul>',
            
            table: '<tr><td>Comfort Level</td><td>Medium</td></tr>\
            <tr><td>Topper Type</td><td>Tight Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$399</td></tr>\
            <tr><td>MSRP Full Set</td><td>$559</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$659</td></tr>\
            <tr><td>MSRP California King Set</td><td>$799</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$799</td></tr>'
        };
        
        var Youth = {
            name: 'Youth',
            info: '',
            
            table: '<tr><td>Comfort Level</td><td>Firm</td></tr>\
            <tr><td>Topper Type</td><td>Tight Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$Call For Price</td></tr>\
            <tr><td>MSRP Full Set</td><td>$Call For Price</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$Call For Price</td></tr>\
            <tr><td>MSRP California King Set</td><td>$Call For Price</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$Call For Price</td></tr>'
        };
        
        var NaturalElement = {
            name: 'Natural Element',
            info: '<ul class="col"><li>High Density Fiber</li>\
            <li>Bamboo Cover With Ant-Microbial Fibers</li></ul>\
            <ul class="col"><li>Foam Encasement</li>\
            <li>312 Wire Spring, Conventional Spring</li></ul>',
            
            table: '<tr><td>Height</td><td>12"</td></tr>\
            <tr><td>Comfort Level</td><td>Medium Plush</td></tr>\
            <tr><td>Topper Type</td><td>Pillow Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$599</td></tr>\
            <tr><td>MSRP Full Set</td><td>$899</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$959</td></tr>\
            <tr><td>MSRP California King Set</td><td>$1399</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$1399</td></tr>'
        };
        
        var Siesta = {
            name: 'Siesta',
            info: '<ul class="col"><li>336 Bonnel Spring Unit</li>\
            <li>Insulator Pad Wrapped</li>\
            <li>1.8" Foam Layers</li>\
            <li>HR Plush Foam Toppers</li></ul>\
            <ul class="col"><li>Ring Flex Supports</li>\
            <li>Chocolate Brown Two Tone Cover</li>\
            <li>Soft Tack And Jump Design</li>\
            <li>Non-Flip One-Sided Construction</li></ul>',
            
            table: '<tr><td>Height</td><td>13"</td></tr>\
            <tr><td>Comfort Level</td><td>Firm</td></tr>\
            <tr><td>Topper Type</td><td>Euro Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$300</td></tr>\
            <tr><td>MSRP Full Set</td><td>$430</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$470</td></tr>\
            <tr><td>MSRP California King Set</td><td>$650</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$650</td></tr>'
        };
        
        var SlumberDrift = {
            name: 'Slumber Drift',
            info: '<ul class="col"><li>609 Pocketed Coil Core Unit Wrapped In High Density Foam Encasement</li>\
            <li>3.5 Micro Coil Marshall Unit</li></ul>\
            <ul class="col"><li>Tack and Jump Plush Covered Euro Top Design With Blue Suede Border</li>\
            <li>1.5″ Layer of Latex</li></ul>',
            
            table: '<tr><td>Height</td><td>15"</td></tr>\
            <tr><td>Comfort Level</td><td>Medium Plush</td></tr>\
            <tr><td>Topper Type</td><td>Pillow Top</td></tr>\
            <tr><td>MSRP Twin Set</td><td>$1199</td></tr>\
            <tr><td>MSRP Full Set</td><td>$1599</td></tr>\
            <tr><td>MSRP Queen Set</td><td>$1789</td></tr>\
            <tr><td>MSRP California King Set</td><td>$1999</td></tr>\
            <tr><td>MSRP Eastern King Set</td><td>$1999</td></tr>'
        };
        
        var SizeChart = {
            name: 'Mattress Size Chart',
            info: '<img src="./assets/mattressChart.png" title="Mattress Chart" alt="Mattress Chart Image" >',
            
            table: '<tr><td>Eastern King</td><td>76" x 80"</td></tr>\
            <tr><td>Cal King</td><td>72" x 84"</td></tr>\
            <tr><td> Queen </td><td>60" x 80"</td></tr>\
            <tr><td> Full XL </td><td>54" x 80"</td></tr>\
            <tr><td> Full </td><td>54" x 75"</td></tr>\
            <tr><td> Twin XL </td><td>39" x 80"</td></tr>\
            <tr><td> Twin </td><td>39" x 75"</td></tr>\
            <tr><td> Crib </td><td>27.5" x 52"</td></tr>'
        };
        
        
        var mattress = [
            Belleza, Chiro, ComfortHaven, Hercules, HermosaPlush, IGel, Institution, LumbarSupport, Malibu, Youth, NaturalElement, Siesta, SlumberDrift, SizeChart
        ];
        
        for(var i=0; i < mattress.length;i++){
            if(mattress[i].name == recipient){
                var info = mattress[i].info;
                var table = mattress[i].table;
            }
        }
        
        var modal = $(this)
        
        modal.find('.modal-title').html( recipient )
        modal.find('.modal-body .modalTop').html( info  )
        modal.find('.modal-body .modalBottom').html( table )
        
        
    });
    /* ===^^^ Mattress Modal ^^^=== */
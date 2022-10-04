$(document).ready(function() {
    //Open lightbox on image click
    $('#petGallery li').each(function(idx, li) {
        var $petItem = $(li);
        var $descDiv = $petItem.find('.description');
       
        //To account for description box being clicked
        $descDiv.click(function() {
            $(this).data('clicked', true);
        });

        // console.log('petItem: ', $petItem.find('h2').contents().text());
        $petItem.click(function() { 
            //So long as desc box isn't clicked, display lightbox 
            if(!$descDiv.data('clicked')) {
                // console.log('Image outer html: ', $(this).find('img').get(0).outerHTML);
                // console.log('Img attr: ', $(this).find('img').attr('src'));
                // console.log('Img: ', $(this).find('img'));
                $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
                $('.box').fadeIn();

                //Check if lightbox has an image
                if ($('.box').contents('img')) {
                    $('.box').contents().remove('img'); //If true, clear image
                }

                var petImg = $(this).find('img').clone(); //Duplicate DOM element
                $('.box').append(petImg); //Insert duplicated element in another element
            }
            $($descDiv).data('clicked', false);
        });
    })

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
})
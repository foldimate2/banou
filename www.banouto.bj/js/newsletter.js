$(document).ready(function () {
    //var _token = $('input[name="_token"]').val();

    /* attach a submit handler to the form */
    $("#newsletter_form").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();
        // display loader
        $(".loading-page").show();

        var email = $('#nl-email-input').val();
        //var _token = $('input[name="_token"]').val();

        /* Send the data to subscribe function  */
        newsletter_subscribe(email);
    });

    /* attach a submit handler to the form */
    $("#newsletter_form2").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();
        // display loader
        $(".loading-page").show();

        var email = $('#nl-email-input2').val();
        //var _token = $('input[name="_token"]').val();

        /* Send the data to subscribe function  */
        newsletter_subscribe(email);
    });

    /* attach a submit handler to the form */
    $("#newsletter_form3").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();
        // display loader
        $(".loading-page").show();

        var email = $('#nl-email-input3').val();
        //var _token = $('input[name="_token"]').val();

        /* Send the data to subscribe function  */
        newsletter_subscribe(email);
    });
    /* attach a submit handler to the form */
    $("#newsletter_form4").submit(function(event) {
        /* stop form from submitting normally */
        event.preventDefault();
        // display loader
        $(".loading-page").show();

        var email = $('#nl-email-input4').val();
        //var _token = $('input[name="_token"]').val();

        /* Send the data to subscribe function  */
        newsletter_subscribe(email);
    });


    function newsletter_subscribe(email){
        $.ajax({
            type: 'POST',
            url: '/newsletter-subscribe',
            data: { email: email},
            success: function(data, textStatus, xhr) {
                if(xhr.status === 201){
                    document.getElementById("newsletter_form").reset();
                }
                setTimeout(() => {
                    $(".loading-page").hide();
                    if(xhr.status === 201){
                        $("#success_Modal").on("shown.bs.modal", function () {}).modal('show');
                    }
                    else {
                        $("#e_modal_body").empty().append(data);
                        $("#error_Modal").on("shown.bs.modal", function () {}).modal('show');
                    }
                }, 2000);
            },
        })
    }
});

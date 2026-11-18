

$(document).ready(function() {


    $("#registrationForm").submit(function(event) {

     
        event.preventDefault();

     
        var name = $("#studentName").val();

        
        if (this.checkValidity()) {

           
            $("#message")
                .css("color", "green")
                .text("Registration successful! Welcome, " + name + "!");

            
            this.reset();

        } else {

           
            $("#message")
                .css("color", "red")
                .text("Please complete all required fields.");

        }

    });

    // Clear message when the form is reset
    $("#registrationForm").on("reset", function() {
        $("#message").text("");
    });

});

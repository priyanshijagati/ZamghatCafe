function SendMail()
{
    var params={
        name : document.getElementById("name").value,
        contact : document.getElementById("contact").value,
        message : document.getElementById("message").value,
        email: document.getElementById("email").value,
    }

    emailjs.send("service_52a98qs" , "template_yrcr1u6" , params)
    .then(function(response) {
        alert("Email Sent");
    }, function(error) {
        alert("Failed to send email: " + JSON.stringify(error));
    });

    

}
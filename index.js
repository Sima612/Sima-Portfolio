//Toggle menu
function toggleMenu() {
    const menuToggle = document.querySelector('.toggle');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    
    return;
}
toggleMenu();

function sendEmail() {
    Email.send({
        SecureToken: "abf8270d-8805-4d8e-af5d-c71b04456aa8",
        // Host : "smtp.elasticemail.com",
        // Username : "sima101531@yahoo.com",
        // Password : "F54EC4DE3C1C27C1959ACBF258C1C7565AE3",
        To : "rachasima.tran001@gmail.com",
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Full Name: " + document.getElementById("name").value
            + "<br> Email Address: " + document.getElementById("email").value
            + "<br> Phone #: " + document.getElementById("number").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );

    return;
}
sendEmail();
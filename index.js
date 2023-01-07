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
        // SecureToken: "ba12a756-ff36-42c6-8f65-b95855e624ec",
        Host : "smtp.elasticemail.com",
        Username : "rachasima.tran001@gmail.com",
        Password : "718BE7D4004469E6598683EA0DB453BCC277",
        To : "rachasima.tran001@gmail.com",
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Full Name: " + document.getElementById("name").value
            + "<br> Email Address: " + document.getElementById("email").value
            + "<br> Phone #: " + document.getElementById("number").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Message sent successfully")
    );

    return;
}
sendEmail();
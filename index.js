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
        SecureToken: "402e1a3d-ca29-4c91-9290-da7de9d73619",
        // Host : "smtp.elasticemail.com",
        // Username : "rachasima.tran001@gmail.com",
        // Password : "E8B047412BE2D7B2292BD89D92622673EC07",
        To : 'rachasima.tran001@gmail.com',
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
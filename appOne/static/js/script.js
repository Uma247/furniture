function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  emailjs
    .send("service_s4nsz86", "template_p4jkxnc", params)
    .then(function (res) {
      alert("success!!" + res.status);
    });
}

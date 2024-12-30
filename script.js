// script.js
// Initialize EmailJS
(function () {
    emailjs.init("A7psiPgZknZ8X8GWa"); // Replace with your EmailJS public key
  })();
  
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const templateParams = {
      name: name,
      email: email,
      message: message,
    };
  
    emailjs
      .send("service_zzj63qm", "template_bwf5g7r", templateParams)
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
          document.getElementById("contactForm").reset(); // Reset the form
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        }
      );
  });
  
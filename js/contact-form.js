// AKV Tax Consultant: contact form submission via Google Apps Script Web App
(function () {
  var SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwpDbT7t42lThpgm7i9PRLBcTYYAOOD0NPx7tV7yn2fufUOoEQY5UJs4Tbjmu69XMsR/exec";

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("contactForm");
    if (!form) return;

    var submitBtn = document.getElementById("contactSubmitBtn");
    var errorMsg = document.getElementById("contactFormError");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      errorMsg.style.display = "none";
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      var formData = new FormData(form);

      fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      })
        .then(function () {
          window.location.href = "thank-you.html";
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = "Send Message";
          errorMsg.style.display = "block";
        });
    });
  });
})();

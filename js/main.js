let countDownDate = new Date();
countDownDate = new Date(
  countDownDate.getFullYear() + 1,
  countDownDate.getMonth() - 6,
  1
);
let x = setInterval(function () {
  let now = new Date();
  let diff = countDownDate - now;
  let months = Math.floor(diff / (30 * 24 * 60 * 60 * 1000));
  let days = Math.trunc(
    (diff % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  let hours = Math.trunc((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minutes = Math.trunc((diff % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.trunc((diff % (60 * 1000)) / 1000);
  const monthsSpan = document.getElementById("months");
  const daysSpan = document.getElementById("days");
  const hoursSpan = document.getElementById("hours");
  const minutesSpan = document.getElementById("minutes");
  const secondsSpan = document.getElementById("seconds");
  monthsSpan.textContent = months;
  daysSpan.textContent = days;
  hoursSpan.textContent = hours;
  minutesSpan.textContent = minutes;
  secondsSpan.textContent = seconds;
}, 1000);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

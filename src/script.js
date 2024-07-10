setInterval(function () {
  let JoziElement = document.querySelector("#Jozi");
  let JoziDateElement = JoziElement.querySelector(".date");
  let JoziTimeElement = JoziElement.querySelector(".time");
  let JoziTime = moment().tz("Africa/Johannesburg");

  JoziDateElement.innerHTML = JoziTime.format("MMMM Do YYYY");
  JoziTimeElement.innerHTML = JoziTime.format("h:mm:ss [<small>]A[</small>]");

  let NairobiElement = document.querySelector("#Nairobi");
  let NairobiDateElement = NairobiElement.querySelector(".date");
  let NairobiTimeElement = NairobiElement.querySelector(".time");
  let NairobiTime = moment().tz("Africa/Nairobi");

  NairobiDateElement.innerHTML = NairobiTime.format("MMMM Do YYYY");
  NairobiTimeElement.innerHTML = NairobiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let AccraElement = document.querySelector("#Accra");
  let AccraDateElement = AccraElement.querySelector(".date");
  let AccraTimeElement = AccraElement.querySelector(".time");
  let AccraTime = moment().tz("Africa/Accra");

  AccraDateElement.innerHTML = AccraTime.format("MMMM Do YYYY");
  AccraTimeElement.innerHTML = AccraTime.format("h:mm:ss [<small>]A[</small>]");
}, 1000);

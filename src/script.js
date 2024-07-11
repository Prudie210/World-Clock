function updateTime() {
  let JoziElement = document.querySelector("#Jozi");
  if (JoziElement) {
    let JoziDateElement = JoziElement.querySelector(".date");
    let JoziTimeElement = JoziElement.querySelector(".time");
    let JoziTime = moment().tz("Africa/Johannesburg");

    JoziDateElement.innerHTML = JoziTime.format("MMMM Do YYYY");
    JoziTimeElement.innerHTML = JoziTime.format("h:mm:ss [<small>]A[</small>]");
  }

  let NairobiElement = document.querySelector("#Nairobi");
  if (NairobiElement) {
    let NairobiDateElement = NairobiElement.querySelector(".date");
    let NairobiTimeElement = NairobiElement.querySelector(".time");
    let NairobiTime = moment().tz("Africa/Nairobi");

    NairobiDateElement.innerHTML = NairobiTime.format("MMMM  Do YYYY");
    NairobiTimeElement.innerHTML = NairobiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let AccraElement = document.querySelector("#Accra");
  if (AccraElement) {
    let AccraDateElement = AccraElement.querySelector(".date");
    let AccraTimeElement = AccraElement.querySelector(".time");
    let AccraTime = moment().tz("Africa/Accra");

    AccraDateElement.innerHTML = AccraTime.format("MMMM  Do YYYY");
    AccraTimeElement.innerHTML = AccraTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM  Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )} <small>${cityTime.format("A")}</div>
            </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);

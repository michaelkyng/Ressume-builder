// Capitalize

const capitalize = (word) => {
  return word[0].toUpperCase() + word.substring(1);
};

const getParameter = (key) => {
  let address = window.location.search;
  let parameterList = new URLSearchParams(address);
  return parameterList.get(key);
};

function generateCV() {
  window.event.preventDefault();

  //Get Data from form

  // Contact info
  const name = document.querySelector("#full-name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const address = document.querySelector("#address").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const postal_code = document.querySelector("#postal-code").value;
  const country = document.querySelector("#country").value;

  // Work exp
  const job_title = document.querySelector("#job-title").value;
  const employer = document.querySelector("#employer").value;
  const job_city = document.querySelector("#job-city").value;
  const job_state = document.querySelector("#job-state").value;
  const job_start_date = document.querySelector("#job-start-date").value;
  const job_end_date = document.querySelector("#job-end-date").value;

  // Education
  const school = document.querySelector("#school-name").value;
  const school_city = document.querySelector("#school-city").value;
  const school_state = document.querySelector("#school-state").value;
  const school_country = document.querySelector("#school-country").value;
  const school_start_date = document.querySelector("#school-start-date").value;
  const school_end_date = document.querySelector("#school-end-date").value;
  const degree = document.querySelector("#school-degree").value;

  // Professional Summary
  const prof_summary = document.querySelector("#prof-summary").value;

  var win = window.open(
    "",
    "Title",
    "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=1024,height=2000,top=" +
      (screen.height - 400) +
      ",left=" +
      (screen.width - 840)
  );

  // Template Literal

  win.document.body.innerHTML = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Name</title>
      <style>
        * {
          margin: 0;
          padding: 0;
        }
        .containar {
          margin-left: auto;
          margin-right: auto;
          max-width: 800px;
          height: 100vh;
          display: flex;
          gap: 10px;
          justify-content: center;
        }
        .containar .left {
          width: 70%;
        }
        .containar .right {
          width: 30%;
          background-color: #${getParameter("color")};
        }
        .name-box {
          background-color: #${getParameter("color")};
          height: 23%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding-left: 10px;
          color: white;
        }
        .name-box p {
          font-size: 40px;
          text-transform: uppercase;
        }
        .info-box-right {
          padding-left: 10px;
          padding-right: 10px;
        }
        .info-box-left {
          padding-left: 10px;
        }
        .header-box {
          margin-top: 30px;
          background-color: gainsboro;
          padding: 10px;
        }
        .header-box p {
          font-size: 12px;
          text-transform: uppercase;
          font-weight: bold;
        }
        .summary-box .text-box {
          padding-left: 10px;
          padding-top: 15px;
        }
        .info-box-right .text-box {
          color: white;
        }
        .info-box-right ul {
          margin-left: 20px;
        }
        .contact {
          margin-top: 190px;
        }
        .skills {
          padding-top: 50px;
        }
      </style>
    </head>
    <body>
      <div class="containar">
        <div class="content left">
          <div class="name-box">
            <p>${name.split(" ")[0]}</p>
            <p>${name.split(" ")[1]}</p>
          </div>
          <div class="info-box-left">
            <div class="summary-box prof-summary">
              <div class="header-box">
                <p>Professional Summary</p>
              </div>
              <p class="text-box">
                  ${prof_summary}
              </p>
            </div>
            <div class="summary-box work-summary">
              <div class="header-box">
                <p>Work Experience</p>
              </div>
              <p class="text-box">
                ${capitalize(employer)}, ${capitalize(job_city)}, ${capitalize(
    job_state
  )} from (${job_start_date} to ${job_end_date}) -
                ${capitalize(job_title)}
              </p>
            </div>
            <div class="summary-box work-summary">
              <div class="header-box">
                <p>Education</p>
              </div>
              <p class="text-box">from (${school_start_date}) to (${school_end_date})</p>
              <p class="text-box">${capitalize(degree)}</p>
              <p class="text-box">
                ${capitalize(school)}, ${capitalize(school_city)}, ${capitalize(
    school_state
  )}, ${capitalize(school_country)}
              </p>
            </div>
          </div>
        </div>
        <div class="content right">
          <div class="info-box-right">
            <div class="summary-box contact">
              <div class="header-box">
                <p>Contact</p>
              </div>
              <p class="text-box">${address}, ${capitalize(city)}, ${capitalize(
    state
  )}, ${country} ${postal_code}</p>
              <p class="text-box">${phone}</p>
              <p class="text-box">${email}</p>
            </div>
            <div class="summary-box skills">
              <div class="header-box">
                <p>Skills</p>
              </div>
              <ul class="text-box">
                <li>TRAINED IN POINT-OF-SALE SYSTEM</li>
                <li>SPANISH</li>
                <li>GIT</li>
                <li>PYTHON</li>
                <li>JAVASCRIPT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
}

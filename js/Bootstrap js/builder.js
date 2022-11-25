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
  const job_country = document.querySelector("#job-country").value;
  const job_start_date = document.querySelector("#job-start-date").value;
  const job_end_date = document.querySelector("#job-end-date").value;

  // Education
  const school = document.querySelector("#school-name").value;
  const school_city = document.querySelector("#school-city").value;
  const school_state = document.querySelector("#school-state").value;
  const school_country = document.querySelector("#school-country").value;
  const school_start_date = document.querySelector("#school-start-date").value;
  const school_end_date = document.querySelector("#school-end-date").value;

  //Skill
  const skills = document.querySelector("#skills").value;

  // Convert to object
  const data = {
    name,
    email,
    phone,
    address,
    city,
    state,
    postal_code,
    country,
    job_title,
    employer,
    job_city,
    job_state,
    job_country,
    job_start_date,
    job_end_date,
    school,
    school_city,
    school_state,
    school_country,
    school_start_date,
    school_end_date,
    skills,
  };

  var newWindow = window.open();
  newWindow.document.location.href = "template.html";
}

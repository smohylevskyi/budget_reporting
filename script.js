function submitForm() {
  // Reset previous validation
  resetValidation();

  // Validate each required field
  const requiredFields = document.querySelectorAll('[required]');
  let formValid = true;

  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      // If the field is empty, mark it as invalid
      markFieldAsInvalid(field);
      formValid = false;
    }
  });

  // If form is valid, proceed with submission
  if (formValid) {
    const k_mono_uah = document.getElementById('k_mono_uah').value;
    const k_mono_usd = document.getElementById('k_mono_usd').value;
    const k_oschad_uah = document.getElementById('k_oschad_uah').value;
    const s_mono_uah = document.getElementById('s_mono_uah').value;
    const s_mono_eur = document.getElementById('s_mono_eur').value;
    const s_kredo_uah = document.getElementById('s_kredo_uah').value;
    const s_privat_uah = document.getElementById('s_privat_uah').value;
    const s_privat_eur = document.getElementById('s_privat_eur').value;
    const s_otp_huf = document.getElementById('s_otp_huf').value;
    const s_jar = document.getElementById('s_jar').value;
    const k_jar = document.getElementById('k_jar').value;
    const cash_usd = document.getElementById('cash_usd').value;
    const cash_eur = document.getElementById('cash_eur').value;
    const cash_huf = document.getElementById('cash_huf').value;
    const comment = document.getElementById('comment').value;

    // Compose URL
    const apiUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSexfYo16-hRRzGWWtgQk43PQWuFpE4tUwLYIKO3yMueAwL2xQ/formResponse?&submit=Submit&usp=pp_url?';
    const url = `${apiUrl}` +
      `entry.1288048134=${encodeURIComponent(k_mono_uah)}` +
      `&entry.977679883=${encodeURIComponent(k_mono_usd)}` +
      `&entry.29642998=${encodeURIComponent(k_oschad_uah)}` +
      `&entry.1756893984=${encodeURIComponent(s_kredo_uah)}` +
      `&entry.1249586764=${encodeURIComponent(s_mono_uah)}` +
      `&entry.552270746=${encodeURIComponent(s_mono_eur)}` +
      `&entry.1411631168=${encodeURIComponent(s_privat_uah)}` +
      `&entry.291991000=${encodeURIComponent(s_privat_eur)}` +
      `&entry.584873438=${encodeURIComponent(s_otp_huf)}` +
      `&entry.120993935=${encodeURIComponent(k_jar)}` +
      `&entry.1645043093=${encodeURIComponent(s_jar)}` +
      `&entry.1095753045=${encodeURIComponent(cash_huf)}` +
      `&entry.2135252641=${encodeURIComponent(cash_usd)}` +
      `&entry.1729212170=${encodeURIComponent(cash_eur)}` +
      `&entry.307762344=${encodeURIComponent(comment)}` +
      `&entry.1101813924=mrmist8@gmail.com`

    // Make API call (you can use fetch or other methods)
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Handle API response if needed
        const overlay = document.querySelector('#succ_overlay');
        overlay.style.opacity = 1;
        overlay.style.display = "block";
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
}

function markFieldAsInvalid(field) {
  // Add red border to the input field
  field.style.border = '3px solid red';
}

function resetValidation() {
  // Reset the border of all input fields
  const inputFields = document.querySelectorAll('input, textarea');
  inputFields.forEach(field => {
    field.style.border = '';
  });
}

function openTab(evt, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(name).style.display = "block";
  evt.currentTarget.className += " active";
}
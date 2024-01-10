function submitForm() {
    // Get form data
    const k_mono_uah = document.getElementById('k_mono_uah').value;
    const email = document.getElementById('k_mono_usd').value;

    // Compose URL
    const apiUrl = 'https://api.example.com'; // Replace with your API endpoint
    const url = `${apiUrl}?k_mono_uah=${encodeURIComponent(k_mono_uah)}&k_mono_usd=${encodeURIComponent(k_mono_usd)}`;

    // Make API call (you can use fetch or other methods)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Handle API response if needed
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
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
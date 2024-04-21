document.addEventListener('DOMContentLoaded', function() {
  const modeToggle = document.querySelector('.mode-toggle');
  const updateButton = document.querySelector('#update-button');

  
  modeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark');
  });

 
  updateButton.addEventListener('click', function() {
      updateInfo();
  });

  
  function updateInfo() {
      
      const schedule = document.getElementById("schedule").value;
      const room = document.getElementById("room").value;
      const building = document.getElementById("building").value;

      
      const scheduleInfo = document.getElementById("schedule-info");
      scheduleInfo.textContent = schedule;

      const roomInfo = document.getElementById("room-info");
      roomInfo.textContent = room;

      const buildingInfo = document.getElementById("building-info");
      buildingInfo.textContent = building;
  }
});

document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault(); 

    
    const adminName = document.getElementById("adminName").value;
    const password = document.getElementById("password").value;

    
    try {
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ adminName, password })
        });

        if (response.ok) {
            
            window.location.href = "/dashboard";
        } else {
            
            alert("Invalid username or password");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});


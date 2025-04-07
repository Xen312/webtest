document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".notification-list");
    const endpoint = "https://script.google.com/macros/s/AKfycbxU5cc_Y330f6uz53f1z6KRW0Trz8wBRB_Ya2WkmwCWs8qUZiXxhi5IHR7QIPeT7qOKtA/exec?key=AIzaSyBDbRMAGo7lTPhHEbqTh8YBmwduhrlNYzI"; // <-- Replace
  
    fetch(endpoint)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch notifications");
        return res.json();
      })
      .then(data => {
        // Sort notifications by createdDate (newest first)
        const sorted = data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
  
        if (sorted.length === 0) {
          container.innerHTML = "<p>No notifications available at the moment.</p>";
          return;
        }
  
        // Limit on index.html, show all on notifications.html
        const isMainPage = window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "/index";
        const visibleNotifications = isMainPage ? sorted.slice(0, 3) : sorted;
  
        visibleNotifications.forEach(notification => {
          const div = document.createElement("div");
          div.className = "notification-item";
          div.innerHTML = `
            <h3>${notification.name}</h3>
            <p><a href="${notification.url}" target="_blank">View</a></p>
            <small>Uploaded: ${new Date(notification.createdDate).toLocaleDateString()}</small>
          `;
          container.appendChild(div);
        });
      })
      .catch(err => {
        console.error("Failed to load notifications:", err);
        container.innerHTML = "<p>Error loading notifications.</p>";
      });
  });
  
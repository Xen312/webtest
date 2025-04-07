fetch("https://script.google.com/macros/s/AKfycbxU5cc_Y330f6uz53f1z6KRW0Trz8wBRB_Ya2WkmwCWs8qUZiXxhi5IHR7QIPeT7qOKtA/exec?key=AIzaSyBDbRMAGo7lTPhHEbqTh8YBmwduhrlNYzI")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("notifications");

    data.forEach(item => {
      const div = document.createElement("div");
      div.classList.add("notification");
      div.innerHTML = `
        <a href="${item.url}" target="_blank">${item.name}</a>
        <small>Uploaded: ${new Date(item.createdDate).toLocaleString()}</small>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Failed to load notifications:", err);
  });

async function loadNotifications(containerId) {
    try {
      const response = await fetch('notifications.php');
      const data = await response.json();
  
      const container = document.getElementById(containerId);
      container.innerHTML = '';
  
      data.files.forEach(file => {
        const item = document.createElement('div');
        item.classList.add('notification-item');
        item.innerHTML = `
          <a href="${file.webViewLink}" target="_blank">${file.name}</a>
          <span class="date">${new Date(file.createdTime).toLocaleDateString()}</span>
        `;
        container.appendChild(item);
      });
    } catch (err) {
      console.error('Failed to load notifications:', err);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Load into both sections if they exist
    if (document.getElementById('index-notifications')) {
      loadNotifications('index-notifications');
    }
    if (document.getElementById('full-notifications')) {
      loadNotifications('full-notifications');
    }
  });
  
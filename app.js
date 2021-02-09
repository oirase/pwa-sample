
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
};

var button = document.getElementById("notifications");
button.addEventListener('click', function(e) {
    Notification.requestPermission().then(function(result) {
        if(result === 'granted') {
            randomNotification();
        }
    });
});

function randomNotification() {
    var title = 'sample app'
    var options = {
        body: 'pwa runnning',
        icon: '/icon.jpg'
    }
    var notif = new Notification(title, options);
    setTimeout(randomNotification, 30000);
}

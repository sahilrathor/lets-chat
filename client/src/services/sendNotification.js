const sendNotification = (title, message) => {
    if (Notification.permission === 'granted') {
        new Notification(title, {
            body: `new message: ${message.slice(0, 15)}...`
        });
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(title, {
                    body: `new message: ${message.slice(0, 15)}...`
                });
            }
        });
    }

}

export default sendNotification
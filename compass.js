const needle = document.querySelector('.needle');

// Function to update the needle's direction based on device orientation
function updateCompass(event) {
    const alpha = event.alpha || 0; // Z-axis rotation (in degrees)
    needle.style.transform = `translateX(-50%) rotate(${-alpha}deg)`;
}

// Function to request device orientation permission on iOS devices
function requestDeviceOrientationPermission() {
    if (/iPad|iPhone|iPod/.test(navigator.platform)) {
        // For iOS devices that require permission
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            DeviceOrientationEvent.requestPermission()
                .then(permissionState => {
                    if (permissionState === 'granted') {
                        // Start listening to device orientation after permission is granted
                        window.addEventListener('deviceorientation', updateCompass);
                    } else {
                        alert('Permission denied for device orientation.');
                        console.error('Permission denied for device orientation.');
                    }
                })
                .catch(error => {
                    console.error('Error requesting device orientation permission:', error);
                    alert('Error requesting device orientation permission.');
                });
        } else {
            alert('Device orientation permission not supported on this device.');
            console.error('Device orientation permission not supported.');
        }
    } else {
        // For non-iOS devices, no permission is required
        window.addEventListener('deviceorientation', updateCompass);
    }
}

// Request permission when the page loads
document.addEventListener('DOMContentLoaded', () => {
    requestDeviceOrientationPermission();
});

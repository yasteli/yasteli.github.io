function toggleMute() {
    const video = document.getElementById('video');
    video.muted = false;
    video.volume = 1.0;
  }

  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  function showVideo() {
    const video = document.getElementById('video');
    const container = document.getElementById('container');
    const containerVideo = document.getElementById('container-video');

    video.style.display = 'block';
    container.style.display = 'none';
    containerVideo.style.display = 'block';

    delay(100).then(() => toggleMute());

    if (containerVideo.requestFullscreen) {
      containerVideo.requestFullscreen();
    }

    // Abrí más tabs
    for (let i = 0; i < 3; i++) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }

    // Flash creepy
    setInterval(() => {
      const img = document.createElement('img');
      img.src = 'https://i.imgur.com/3Y3ZP3F.png';
      img.style.position = 'fixed';
      img.style.top = '0';
      img.style.left = '0';
      img.style.width = '100vw';
      img.style.height = '100vh';
      img.style.zIndex = '9999';
      img.style.opacity = '0.9';
      document.body.appendChild(img);
      setTimeout(() => img.remove(), 300);
    }, 4000);

    // Shake
    setInterval(() => {
      document.body.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
      setTimeout(() => {
        document.body.style.transform = 'translate(0,0)';
      }, 100);
    }, 2000);

    // Mouse jodón
    document.addEventListener('mousemove', function (e) {
      if (Math.random() > 0.95) {
        window.scrollBy(Math.random() * 50, Math.random() * 50);
      }
    });

    // Lanzar jumpscare después de 8 segundos
    setTimeout(() => {
      const jumpscare = document.getElementById('jumpscare');
      const scream = document.getElementById('scream');
      jumpscare.style.display = 'flex';
      scream.volume = 1.0;
      scream.play();

      setTimeout(() => {
        jumpscare.style.display = 'none';
      }, 1500);
    }, 8000);
  }

  window.onbeforeunload = function () {
    return "¿Seguro que querés salir? Esto recién empieza...";
  };

  document.getElementById("button").addEventListener("click", showVideo);
  document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('DOMContentLoaded', () => {
  // Obtener el nombre del archivo de video del atributo data-video del script
  const scriptTag = document.getElementById('toggleVideo');
  var videoFile = scriptTag.getAttribute('data-video');
  if (!videoFile) {
    console.error('No se proporcionó un nombre de archivo de video en el atributo data-video');
    return;
  }

    // LÓGICA ALEATORIA [A-Z]
    const match = videoFile.match(/\[([A-Z])\]/);
    if (match) {
      const letraFinal = match[1];
      const codigoInicio = 'A'.charCodeAt(0);
      const codigoFin = letraFinal.charCodeAt(0);
      const letraElegida = String.fromCharCode(Math.floor(Math.random() * (codigoFin - codigoInicio + 1)) + codigoInicio);
      videoFile = videoFile.replace(`[${letraFinal}]`, letraElegida);
    }

  // Encontrar la primera imagen dentro de un <p> inmediatamente después de un <h1>
  const firstImg = document.querySelector('h1 + p img');
  if (!firstImg) {
    console.error('No se encontró una etiqueta <img> dentro del <p> inmediatamente después de <h1>');
    return;
  }

  // Almacenar atributos de la imagen
  const imgSrc = firstImg.src;
  const imgAlt = firstImg.alt;
  const imgWidth = firstImg.width || firstImg.getAttribute('width') || 'auto';
  const imgHeight = firstImg.height || firstImg.getAttribute('height') || 'auto';
  const imgStyles = window.getComputedStyle(firstImg);
  const imgClass = firstImg.className;

  // Detectar Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Añadir estilo CRT y un indicador de video a la imagen
  firstImg.style.cssText = `${imgStyles.cssText}; border: 5px solid #000; border-radius: 15px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); cursor: pointer; position: relative;`;
  firstImg.insertAdjacentHTML('beforeend', '<span style="position: absolute; bottom: 5px; right: 5px; background: rgba(0, 0, 0, 0.7); color: white; padding: 2px 5px; font-size: 12px; border-radius: 3px;">Video</span>');

  // Crear un contenedor div para la imagen, el video y el indicador de carga
  const wrapper = document.createElement('div');
  wrapper.style.cssText = 'position: relative; display: inline-block; width: fit-content;';
  firstImg.parentNode.insertBefore(wrapper, firstImg);
  wrapper.appendChild(firstImg);

  // Obtener las dimensiones reales de la imagen
  const imgRect = firstImg.getBoundingClientRect();

  // Crear el indicador de carga
  const loadingIndicator = document.createElement('div');
  loadingIndicator.className = 'zx-loading';
  loadingIndicator.style.cssText = `
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: ${imgRect.width}px;
    height: ${imgRect.height}px;
    background: #000;
    border: 5px solid #000;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 10;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    color: #fff;
    font-family: monospace;
    font-size: 16px;
    box-sizing: border-box;
  `;
  loadingIndicator.innerHTML = `
    <div class="zx-loading-bars">
      <div style="background: #ff0000;"></div>
      <div style="background: #ffff00;"></div>
      <div style="background: #00ff00;"></div>
      <div style="background: #00ffff;"></div>
    </div>
    <span>Cargando...</span>
  `;
  wrapper.appendChild(loadingIndicator);

  // Añadir CSS para la animación de carga inspirada en ZX Spectrum
  const style = document.createElement('style');
  style.textContent = `
    .zx-loading-bars {
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-bottom: 15px;
    }
    .zx-loading-bars div {
      width: ${Math.min(imgRect.width * 0.05, 30)}px;
      height: ${Math.min(imgRect.height * 0.2, 80)}px;
      animation: zx-pulse 1.2s ease-in-out infinite;
    }
    .zx-loading-bars div:nth-child(1) { animation-delay: 0s; }
    .zx-loading-bars div:nth-child(2) { animation-delay: 0.3s; }
    .zx-loading-bars div:nth-child(3) { animation-delay: 0.6s; }
    .zx-loading-bars div:nth-child(4) { animation-delay: 0.9s; }
    @keyframes zx-pulse {
      0%, 100% { transform: scaleY(1); }
      50% { transform: scaleY(1.5); }
    }
  `;
  document.head.appendChild(style);

  // Almacenar el elemento de video
  let video = firstImg.nextElementSibling?.tagName === 'VIDEO' ? firstImg.nextElementSibling : null;

  // Función para crear e inicializar el video
  const initializeVideo = () => {
    if (!video) {
      video = document.createElement('video');
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('width', imgWidth); // Usar el mismo ancho que la imagen
      if (imgHeight !== 'auto') video.setAttribute('height', imgHeight); // Usar el mismo alto si está definido
      if (imgClass) video.className = imgClass;
      video.style.cssText = `${imgStyles.cssText}; transition: opacity 0.5s ease; background: #000; border: 5px solid #000; border-radius: 15px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); cursor: pointer; display: none; opacity: 0; box-sizing: border-box; z-index: 5;`;
      video.innerHTML = `<source src="${videoFile}" type="video/mp4">`;
      wrapper.insertBefore(video, firstImg.nextSibling);

      // Mostrar el indicador de carga mientras el video se carga
      loadingIndicator.style.display = 'flex';

      // Ocultar el indicador de carga cuando el video esté listo
      const hideLoadingIndicator = () => {
        loadingIndicator.style.display = 'none';
        video.style.display = 'inline-block';
        video.style.opacity = '1';
      };
      video.addEventListener('canplay', hideLoadingIndicator);
      video.addEventListener('loadeddata', hideLoadingIndicator); // Fallback para Safari
      video.addEventListener('playing', hideLoadingIndicator); // Fallback adicional

      // Manejar errores de carga del video
      video.addEventListener('error', (e) => {
        console.error('Error al cargar el video:', e);
        loadingIndicator.style.display = 'none';
        video.style.display = 'none';
        firstImg.style.display = 'block';
        firstImg.style.opacity = '1';
      });

      video.addEventListener('ended', handleVideoEnd);
    }
  };

  // Función para manejar el fin del video
  const handleVideoEnd = () => {
    console.log('Video terminado');
    video.style.opacity = '0';
    setTimeout(() => {
      video.style.display = 'none';
      firstImg.style.display = 'block';
      firstImg.style.opacity = '1';
      loadingIndicator.style.display = 'none';
    }, 500);
  };

  // Función para alternar la reproducción del video
  const toggleVideo = () => {
    initializeVideo();

    if (video.style.opacity === '0' || video.style.display === 'none') {
      firstImg.style.opacity = '0';
      firstImg.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        firstImg.style.display = 'none';
        video.style.display = 'inline-block';
        loadingIndicator.style.display = 'flex';
        video.currentTime = 0;
        video.play().catch(error => {
          console.error('Reproducción automática bloqueada o error:', error);
          loadingIndicator.style.display = 'none';
          video.style.display = 'none';
          firstImg.style.display = 'block';
          firstImg.style.opacity = '1';
        });
      }, 500);
    } else {
      video.style.opacity = '0';
      setTimeout(() => {
        video.style.display = 'none';
        firstImg.style.display = 'block';
        firstImg.style.opacity = '1';
        loadingIndicator.style.display = 'none';
      }, 500);
    }
  };

  // Intentar reproducir el video al cargar la página
  initializeVideo();
  if (isSafari || true) {
    firstImg.style.display = 'none';
    loadingIndicator.style.display = 'flex';
  }
  setTimeout(() => {
    video.play().catch(error => {
      console.error('Reproducción automática bloqueada o error:', error);
      loadingIndicator.style.display = 'none';
      video.style.display = 'none';
      firstImg.style.display = 'block';
      firstImg.style.opacity = '1';
    });
  }, 500);

  // Añadir evento de clic a la imagen inicial
  firstImg.addEventListener('click', toggleVideo);

  // Añadir evento de clic al video para alternar
  if (video) {
    video.addEventListener('click', toggleVideo);
  }
});

// Manejador global de errores para problemas de carga de video
window.addEventListener('error', (event) => {
  if (event.target.tagName === 'VIDEO') {
    console.error('Error al cargar el video:', event.message);
  }
}, true);
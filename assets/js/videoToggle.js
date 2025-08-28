document.addEventListener('DOMContentLoaded', () => {
  // Get the video filename from the script's data-video attribute
  const scriptTag = document.getElementById('toggleVideo');
  const videoFile = scriptTag.getAttribute('data-video');
  if (!videoFile) {
    console.error('No video filename provided in data-video attribute');
    return;
  }

  // Find the first <img> inside a <p> immediately after <h1>
  const firstImg = document.querySelector('h1 + p img');
  if (!firstImg) {
    console.error('No <img> tag found inside the <p> immediately after <h1>');
    return;
  }

  // Store image and video elements
  let video = firstImg.nextElementSibling?.tagName === 'VIDEO' ? firstImg.nextElementSibling : null;

  // Store image attributes
  const imgSrc = firstImg.src;
  const imgAlt = firstImg.alt;
  const imgWidth = firstImg.width || firstImg.getAttribute('width') || 'auto';
  const imgStyles = window.getComputedStyle(firstImg);
  const imgClass = firstImg.className;

  // Detect Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  // Add CRT style and video indication to image
  firstImg.style.cssText = `${imgStyles.cssText}; border: 5px solid #000; border-radius: 15px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); cursor: pointer; position: relative;`;
  firstImg.style.position = 'relative'; // Ensure positioning for pseudo-element
  firstImg.insertAdjacentHTML('beforeend', '<span style="position: absolute; bottom: 5px; right: 5px; background: rgba(0, 0, 0, 0.7); color: white; padding: 2px 5px; font-size: 12px; border-radius: 3px;">Video</span>');

  // Function to create and play video (only on first call)
  const initializeVideo = () => {
    if (!video) {
      video = document.createElement('video');
      video.setAttribute('muted', ''); // Muted to ensure autoplay
      video.setAttribute('playsinline', ''); // Prevent fullscreen on mobile
      video.setAttribute('width', "100%"); // Match image width
      video.removeAttribute('height'); // Automatic height
      if (imgClass) video.className = imgClass;
      video.style.cssText = `${imgStyles.cssText}; transition: opacity 0.5s ease; border: 5px solid #000; border-radius: 15px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); cursor: pointer; display: inline-block;`; // Inline-block for flow
      video.style.opacity = '0'; // Initially invisible
      video.innerHTML = `<source src="${videoFile}" type="video/mp4">`;
      firstImg.parentNode.insertBefore(video, firstImg.nextSibling);

      // Ensure the ended event is added when video is created
      video.addEventListener('ended', handleVideoEnd);
    }
  };

  // Function to handle video end
  const handleVideoEnd = () => {
    console.log('Video ended'); // Debug log
    video.style.opacity = '0';
    setTimeout(() => {
      video.style.display = 'none';
      firstImg.style.display = 'block'; // Ensure image is displayed
      firstImg.style.opacity = '1'; // Ensure image is visible
    }, 500); // Match transition duration
  };

  // Function to toggle video playback
  const toggleVideo = () => {
    initializeVideo(); // Ensure video is created if not already

    if (video.style.opacity === '0' || video.style.display === 'none') {
      // Hide image and show video with transition
      firstImg.style.opacity = '0';
      firstImg.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        firstImg.style.display = 'none';
        video.style.display = 'inline-block';
        video.style.opacity = '1';
        video.currentTime = 0; // Reset video to start
        video.play().catch(error => console.error('Autoplay blocked or error:', error));
      }, 500); // Match transition duration
    } else {
      // Hide video and show image with transition
      video.style.opacity = '0';
      setTimeout(() => {
        video.style.display = 'none';
        firstImg.style.display = 'block';
        firstImg.style.opacity = '1';
      }, 500); // Match transition duration
    }
  };

  // Attempt to play video on page load with fallback
  initializeVideo();
  //if (isSafari) {
  if (true) {
    // For Safari: Hide image immediately on first load to avoid overlay
    firstImg.style.display = 'none';
  }
  setTimeout(() => {
    video.style.display = 'inline-block';
    video.style.opacity = '1';
    video.play().catch(error => {
      console.error('Autoplay blocked or error:', error);
      // Fallback: Hide video and show image if autoplay fails
      video.style.opacity = '0';
      setTimeout(() => {
        video.style.display = 'none';
        firstImg.style.display = 'block';
        firstImg.style.opacity = '1';
      }, 500);
    });
  }, 500); // Delay to allow video initialization

  // Add click event to initial image
  firstImg.addEventListener('click', toggleVideo);

  // If video exists, add click event to it as well for toggling
  if (video) {
    video.addEventListener('click', toggleVideo);
  }
});

// Optional: Add a global error handler for video loading issues
window.addEventListener('error', (event) => {
if (event.target.tagName === 'VIDEO') {
  console.error('Video loading error:', event.message);
}
}, true);
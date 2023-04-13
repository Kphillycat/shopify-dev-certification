document.addEventListener('DOMContentLoaded', function () {
    const matchMediaQuery = window.matchMedia("(max-width: 750px)");

    const videoContainer = document.querySelector('#banner__media-video');

    // Initial video load
    videoContainer.innerHTML = matchMediaQuery.matches ? mobileVideoTag : desktopVideoTag

    matchMediaQuery.onchange = (e) => {
        if (e.matches) {
            /* the viewport is less than 750 pixels wide */
            videoContainer.innerHTML = mobileVideoTag;
        } else {
            /* the viewport is less than 750 pixels wide */
            videoContainer.innerHTML = desktopVideoTag;
        }
    };
}, false);
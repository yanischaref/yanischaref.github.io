
var stylePath = document.getElementById("style-link")
const themeImg = document.getElementById("nav-appearance-img");
var darkMode = false;
var root = document.getElementById("root")
const discordBox = document.querySelector('#discord-icon');
const phoneBox = document.querySelector('#phone-icon');
const popups = document.querySelectorAll('.pop-up');


function displayWidth() {
  var width_100 = window.innerWidth; // Get window width
  root.style.width = `${width_100}px`
}

window.onload = displayWidth;

function getWindowWidthAt100PercentZoom() {
  var screenWidth = window.screen.width;
  var currentZoomLevel = Math.floor((screenWidth / window.innerWidth * 100));
  var width_100 = Math.floor(currentZoomLevel/100 * window.innerWidth)

  root.style.width = `${width_100}px`
}

window.onload = getWindowWidthAt100PercentZoom;


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
          smoothScrollTo(targetId, 500); // Scroll duration of 0.5 seconds (500 milliseconds)
      }
  });
});

function smoothScrollTo(element, duration) {
  const targetElement = document.getElementById(element);
  if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
  }
}


function changeTheme() {
  if (darkMode) {
    darkMode = false;
    themeImg.style.opacity = 0.3;
    setTimeout(() => {
      themeImg.src = "./photos/icons/theme-icon-on.png";
      themeImg.style.opacity = 1;
    }, 100);

    stylePath.setAttribute("href", "./styles/lightStyle.css");
  } else {
    darkMode = true;
    themeImg.style.opacity = 0.3;
    setTimeout(() => {
      themeImg.src = "./photos/icons/theme-icon-off.png";
      themeImg.style.opacity = 1;
    }, 100);
    stylePath.setAttribute("href", "./styles/darkStyle.css");
  }
}


/*Pop up function*/
discordBox.addEventListener('mouseover', () => {
    popups[0].style.display = 'block';
})
popups[0],addEventListener('mouseout', () => {
  popups[0].style.display = 'none';
})


phoneBox.addEventListener('mouseover', () => {
  popups[1].style.display = 'block';
})

popups[1],addEventListener('mouseout', () => {
  popups[1].style.display = 'none';
})

function copyNumberToClipboard() {
  const textToCopy = "0656650599";
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  feedUser("Phone number copied")
}

function copyUsernameToClipboard() {
  const textToCopy = "yanis.charef";
  const textarea = document.createElement('textarea');
  textarea.value = textToCopy;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  feedUser("Discord Username copied")
}

function feedUser(text) {
  var feedBox = document.getElementById('feed-user');
  var feedText = document.getElementById('feeduser-msg');
  feedText.innerText= text
  feedBox.style.display = 'block';

  setTimeout(function() {
    feedBox.style.display = 'none';
  }, 3000);
}

function buttonToUrl(url) {
    window.open(url, '_blank');
};

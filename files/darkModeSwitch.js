const darkModeSwitches = document.querySelectorAll(".dark-mode-switch");

if (darkModeSwitches) {
  darkModeSwitches.forEach((item) => {
    item.addEventListener("click", () => {
      darkModeSwitches.forEach((item) => item.classList.add("animated"));
      toggleDarkMode();
    });
  });
}

function toggleDarkMode() {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    document.documentElement.setAttribute("data-mode", "light");
    localStorage.setItem("darkMode", false);
    darkModeSwitches.forEach((item) => item.classList.add("light"));
    darkModeSwitches.forEach((item) => item.classList.remove("dark"));
  } else {
    document.documentElement.setAttribute("data-mode", "dark");
    localStorage.setItem("darkMode", true);
    darkModeSwitches.forEach((item) => item.classList.add("dark"));
    darkModeSwitches.forEach((item) => item.classList.remove("light"));
  }
}

/*function initScreenModeSwitch() {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode === "true") {
    darkModeSwitches.forEach((item) => item.classList.add("dark"));
    return;
  }
  if (darkMode === "false") {
    darkModeSwitches.forEach((item) => item.classList.add("light"));
    return;
  }
  if (window.matchMedia) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-mode", "dark");
      darkModeSwitches.forEach((item) => item.classList.add("dark"));
    }
    else {
      document.documentElement.setAttribute("data-mode", "light");
      darkModeSwitches.forEach((item) => item.classList.add("light"));
    }
  }
}*/

/* Chat GPT suggestion:*/
function initScreenModeSwitch() {
  let darkMode = localStorage.getItem("darkMode");
  /*Chat GPT debugging:
  const parentElement = document.querySelector('#debugRef');
  const p = document.createElement('p');
  p.innerHTML = `darkMode: ${localStorage.getItem('darkMode')}`;
  parentElement.prepend(p);
  */
  if (darkMode === null) {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      localStorage.setItem("darkMode", true);
    } else {
      localStorage.setItem("darkMode", false);
    }
  }
}

initScreenModeSwitch();

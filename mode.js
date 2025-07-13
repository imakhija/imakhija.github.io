function setMode() {
  if(localStorage.getItem("theme") == "dark") {
      document.documentElement.setAttribute('data-theme', "dark");
      localStorage.setItem("theme", "dark");
  }
  else {
      document.documentElement.setAttribute('data-theme', "light");
      localStorage.setItem("theme", "light");
  }
}

function change() {
  if(localStorage.getItem("theme") === null) {
      if(document.documentElement.getAttribute("data-theme") === "light") {
          document.documentElement.setAttribute('data-theme', "dark");
          localStorage.setItem("theme", "dark");
      }
      else {
          document.documentElement.setAttribute('data-theme', "light");
          localStorage.setItem("theme", "light");
      }
  }
  else {
      if(localStorage.getItem("theme") == "dark") {
          document.documentElement.setAttribute('data-theme', "light");
          localStorage.setItem("theme", "light");
      }
      else {
          document.documentElement.setAttribute('data-theme', "dark");
          localStorage.setItem("theme", "dark");
      }
  }
}

window.onload = function() {
    fetch('navbar.html')
    .then(response => response.text())
    .then(navbarData => {
        document.getElementById('navbar').innerHTML = navbarData;
        return fetch('footer.html');
    })
    .then(response => response.text())
    .then(footerData => {
        document.getElementById('footer').innerHTML = footerData;
        window.scrollTo(0, 0);
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
        document.getElementById("year").innerHTML = new Date().getFullYear();
        setMode();
    })
    .catch(err => {
        console.log('Error loading navbar or footer:', err);
    });
};
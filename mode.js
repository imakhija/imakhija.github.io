function setMode() {
  if(localStorage.getItem("theme") == "dark") {
      document.documentElement.setAttribute('data-theme', "dark");
      document.getElementById("mode").innerHTML = "light mode";
      localStorage.setItem("theme", "dark");
  }
  else {
      document.documentElement.setAttribute('data-theme', "light");
      document.getElementById("mode").innerHTML = "dark mode";
      localStorage.setItem("theme", "light");
  }
  document.getElementById("mode").style.fontWeight = "bold";
}

function change() {
  if(localStorage.getItem("theme") === null) {
      if(document.documentElement.getAttribute("data-theme") === "light") {
          document.documentElement.setAttribute('data-theme', "dark");
          document.getElementById("mode").innerHTML = "light mode";
          localStorage.setItem("theme", "dark");
      }
      else {
          document.documentElement.setAttribute('data-theme', "light");
          document.getElementById("mode").innerHTML = "dark mode";
          localStorage.setItem("theme", "light");
      }
  }
  else {
      if(localStorage.getItem("theme") == "dark") {
          document.documentElement.setAttribute('data-theme', "light");
          document.getElementById("mode").innerHTML = "dark mode";
          localStorage.setItem("theme", "light");
      }
      else {
          document.documentElement.setAttribute('data-theme', "dark");
          document.getElementById("mode").innerHTML = "light mode";
          localStorage.setItem("theme", "dark");
      }
  }
  document.getElementById("mode").style.fontWeight = "bold";
}

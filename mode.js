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

        const path = window.location.pathname.split('/').pop();
        const page = path.split('.')[0];

        document.querySelectorAll('[data-page]').forEach(link => {
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });

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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => link.blur());
    });
  
    document.addEventListener("touchstart", function () {}, true);

    document.querySelectorAll('[data-masonry]').forEach(function(grid) {
        var msnry = Masonry.data(grid);
        if (msnry) msnry.layout();
    });
});

document.querySelectorAll('[data-bs-toggle="pill"]').forEach(function(tab) {
    tab.addEventListener('shown.bs.tab', function() {
        setTimeout(function() {
            document.querySelectorAll('[data-masonry]').forEach(function(grid) {
                var msnry = Masonry.data(grid);
                if (msnry) msnry.layout();
            });
        }, 10);
    });
});
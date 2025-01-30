const header = document.getElementById('header');

const sticky = header.offsetTop;

function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

window.onscroll = function() {
    stickyHeader();
};


const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.querySelector('.theme-icon');

themeToggle.addEventListener('click', () => {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeIcon.textContent = '☾';
  } else {
    body.setAttribute('data-theme', 'dark');
    themeIcon.textContent = ' ☼ ';
  }
});

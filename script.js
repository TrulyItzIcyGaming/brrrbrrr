document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const container = document.querySelector('.container');
    const headerHeight = header.offsetHeight;
    document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
});
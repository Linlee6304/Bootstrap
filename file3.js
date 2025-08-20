var tooltips = document.querySelectorAll('[data-bs-toggle=tooltip]');
var popovers = document.querySelectorAll('[data-bs-toggle=popover]');
console.log(tooltips);

popovers.forEach((popover) => {
    new bootstrap.Popover(popover);
})

tooltips.forEach((tooltip) => {
    new bootstrap.Tooltip(tooltip);
});
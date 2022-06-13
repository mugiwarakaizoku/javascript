const varctrls = document.querySelectorAll('.controls input');
function updateControls(){
    const suffix = this.dataset.sizing ||'';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

varctrls.forEach(ctrl => ctrl.addEventListener('change',updateControls));
varctrls.forEach(ctrl => ctrl.addEventListener('mousemove',updateControls));

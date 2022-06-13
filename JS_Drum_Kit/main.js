window.addEventListener('keydown',function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio){return;}//if we are pressing keys that are not present, then we exit from the function
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',function(e){
    if(e.propertyName!=='transform'){return;}
    key.classList.remove('playing')
}))

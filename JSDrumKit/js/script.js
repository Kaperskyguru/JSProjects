//Trigering keydown event on key press
window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Retrieve audio via keyCode
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // Retrieve key via keyCode
    const keys = document.querySelectorAll('.key'); // Retrieve all keys


    if(!audio) return; //stop the function
    audio.currentTime = 0; // This just rewind the wav sound
    audio.play(); // Playing the sound

    key.classList.add('playing'); //Adding 'playing' class for animation

    
    // Looping through all keys and adding Event Listener on each
    keys.forEach(key => key.addEventListener('transitionend', function(e) {

        if(e.propertyName !== 'transform') return; //skip it if its not a transform event

        this. classList.remove('playing'); //Removing the 'playing' class when transition ends
    }));
});
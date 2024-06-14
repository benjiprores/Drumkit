function playSound(drum) {
    const audio = new Audio('sounds/' + drum + '.mp3');
    audio.play();
}
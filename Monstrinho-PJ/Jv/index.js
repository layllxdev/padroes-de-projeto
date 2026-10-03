function hitImpact() {
    let impactAudio = new Audio('/Audios/hit.mp3');
    impactAudio.play()
}

hitButton.onclick = hitImpact;
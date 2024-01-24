function playNoteWithSleep(note,duration){
    const melodyOutput = document.getElementById("meloldyOutput");
    
    melodyOutput.innerHTML += `🎵 Play ${note}`;


    setTimeout( () =>{
        melodyOutput.innerHTML += `Sleep ${duration}s`;
    },duration *1000); //end timeout


}///close function

//Mallory's Melody

playNoteWithSleep(72,0.25);

playNoteWithSleep(76,0.25);

playNoteWithSleep(76,0.25);

playNoteWithSleep(72,0.25);

playNoteWithSleep(83,0.25);

playNoteWithSleep(74,0.25);

playNoteWithSleep(83,0.25);

playNoteWithSleep(79,0.25);

playNoteWithSleep(84,0);


function attachMP3(){
    const audioPlayer =document.querySelector("audio");
    audioPlayer.src="https://sonic-pi.mehackit.org/assets/audio/c-major-melody.mp3";
}

attachMP3();
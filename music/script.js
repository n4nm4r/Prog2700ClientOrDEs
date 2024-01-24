function playNoteWithSleep(note,duration){
    const melodyOutput = document.getElementById("meloldyOutput");
    
    melodyOutput.innerHTML += '🎵 Play ${note}';


    setTimeout( () =>{
        melodyOutput.innerHTML += 'Sleep ${duration}s'


    },duration *1000); //end timeout


}///close function



playNoteWithSleep(72,0.25)
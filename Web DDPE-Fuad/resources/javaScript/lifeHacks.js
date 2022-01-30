function change(){
    var image = document.getElementById("img1-container");
    var image2 = image;
    var audio = document.getElementById("audio1");
    audio.remove();

    var parent = document.getElementById("main-cont");
    var child = document.getElementById("video1-container");
    parent.replaceChild(child, image);
    
     var vidc2 = document.getElementById("vidc2");       
    parent.replaceChild(image2, vidc2);
    


    var audioDiv = document.getElementById("audio1-container");
    const div = document.createElement("div");
    div.style.cssText = "color:red;border:2px solid green; font-size: 3rem; background-color:yellow;";
    div.innerHTML = "<p>New Element added</p>"; 
    var head= document.getElementById("h1");
    parent.insertBefore(div, head);
    
    const div2 = document.createElement("div"); 
    div2.style.cssText = "color:red;border:2px solid green; font-size: 3rem; background-color:yellow;"; 
    div2.innerHTML = "<p>New Element added here too</p>"; 
    audioDiv.appendChild(div2);
    
    const div3 = document.createElement("div"); 
    div3.style.cssText = "color:red;border:2px solid green; font-size: 3rem; background-color:yellow;"; 
    div3.innerHTML = "<p>Also here</p>";
    parent.appendChild(div3);
    }
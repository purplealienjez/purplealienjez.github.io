var textsections = ['text1','text2','text3','text4','text5','text6','text7','text8','text9'];

function sectioncollapse () {
    for (var i = 0; i < textsections.length; i++) {
        document.getElementsByClassName(textsections[i])[0].style.display = "none";       
    }
}

function collapse(section) {
    for (var i = 0; i < textsections.length; i++) {
        if(section == textsections[i]) {
            var content = document.getElementsByClassName(section)[0];
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        } else {
            document.getElementsByClassName(textsections[i])[0].style.display = "none"; 
        }
    }
}
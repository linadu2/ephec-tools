let choixUtilisateur
let newLogoPath

document.addEventListener("DOMContentLoaded", () => {
    newLogoPath = document.querySelector(".logo-ephec-eperso").src
    document.querySelector(".logo-ephec-eperso").onclick = changeLogo
    chrome.storage.sync.get(['logochoisi'], function(result) {
        choixUtilisateur = result.logochoisi;
        if (choixUtilisateur === "old") {
            //changeTheme('old')
            const style = document.createElement('style');
            style.type = 'text/css';
            style.textContent = `
                                    body .bgcolor-orange-ephec{
                                        background-color: #ed7520 !important;
                                    }
            
                                    body #heinscriptionsub li a,body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a{
                                        background-color: #1d5263;
                                       }
            
                                    #sidebar a, body #sidebar{
                                        background-color: #013647;
                                    }
            
                                    .logo-ephec-eperso{
                                        height: auto;
                                        width: auto;
                                        max-height: 41px;
                                        max-width: 243px;
                                    }`
            ;  // This is the CSS code defined by the user
            document.head.appendChild(style);  // Or document.documentElement (the <html> element)
            libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec-eperso.png'));
        }
    })
})

function changeLogo (){

    if (choixUtilisateur === "old"){
        //changeTheme('new')
        libChangeLogo(newLogoPath);
        chrome.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        //changeTheme('old')
        libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec-eperso.png'));
        chrome.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }
}

function libChangeLogo (IMGpath){
    document.querySelector(".logo-ephec-eperso").src = IMGpath
}


/*chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur === "old"){
        changeTheme('old')
    }
});





function changeTheme(theme){
    libChangeLogo((theme === 'old' ? chrome.runtime.getURL('IMG/old-logo-ephec-eperso.png') : newLogoPath));
    document.querySelector('.navbar-dark.bgcolor-orange-ephec').style.backgroundColor = (theme === 'old' ? "#fd7e14" : "#1d1d1b")
    let sidebarElements = document.querySelectorAll('#sidebar a, body #sidebar');
    sidebarElements.forEach(function(el) {
        el.classList.remove('selected');
        if(theme === 'old'){
            el.classList.add('enable-extension')
        }else{
            el.classList.remove('enable-extension')
        }

    });

    let elements = document.querySelectorAll('body #heinscriptionsub li a, body #hehorairesub li a, body #hejuabs li a, body #hesarsub li a, body #hecososub li a, body #helaotestslangues li a');
    elements.forEach(function(el) {
        if(theme === 'old'){
            el.classList.add('enable-extension')
        }else{
            el.classList.remove('enable-extension')
        }
    });
}*/
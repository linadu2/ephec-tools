let choixUtilisateur
let newLogoPath

document.addEventListener("DOMContentLoaded", () => {
    newLogoPath = document.querySelector('.img-logo').src
    document.querySelector('.img-logo').onclick = changeLogo
    chrome.storage.sync.get(['logochoisi'], function(result) {
        choixUtilisateur = result.logochoisi;
        if (choixUtilisateur === "old") {
            //changeTheme('old')
            const style = document.createElement('style');
            style.type = 'text/css';
            style.textContent = `
                                    .profil[b-p2i6fi6whn]{
                                        background-color: #F47A20 !important;
                                    }
                                    
                                    div .bg-primary[b-p2i6fi6whn]{
                                        background-color: #F47A20 !important;
                                    }`
            ;  // This is the CSS code defined by the user
            document.head.appendChild(style);  // Or document.documentElement (the <html> element)
            libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec-portail.png'));
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
        libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec-portail.png'));
        chrome.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }

}
function libChangeLogo (IMGpath){
    document.querySelector('.img-logo').src = IMGpath
}

/*chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;

    if(choixUtilisateur === "old"){
        changeTheme('old')
    }
});




function changeTheme(theme){
    libChangeLogo((theme === 'old' ? chrome.runtime.getURL('IMG/old-logo-ephec-portail.png') : newLogoPath));
    document.querySelectorAll('.profil[b-p2i6fi6whn], div .bg-primary[b-p2i6fi6whn]').forEach(el => {
        el.setAttribute('style', `background-color: ${(theme === 'old' ? '#F47A20' : '#1F2A37')} !important;`);
    })
}*/



let choixUtilisateur
let NewLogoPath

document.addEventListener('DOMContentLoaded', () => {
    NewLogoPath = document.querySelector('#logo').src
    document.querySelector('#logo').onclick = changeLogo
    chrome.storage.sync.get(['logochoisi'], function(result) {
        choixUtilisateur = result.logochoisi;
        if(choixUtilisateur === "old"){
            libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec.png'));
        }
    })
})

function changeLogo (){

    if (choixUtilisateur === "old"){
        libChangeLogo(NewLogoPath);
        chrome.storage.sync.set({ 'logochoisi': 'new' })
        choixUtilisateur = "new"
    }else{
        libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec.png'));
        chrome.storage.sync.set({ 'logochoisi': 'old' })
        choixUtilisateur = "old"
    }

}
function libChangeLogo (IMGpath){
    document.querySelector('#logo').src = IMGpath
}

/*chrome.storage.sync.get(['logochoisi'], function(result) {
    choixUtilisateur = result.logochoisi;
    if(choixUtilisateur === "old"){
        libChangeLogo(chrome.runtime.getURL('IMG/old-logo-ephec.png'));
    }
});*/
let choixUtilisateur

chrome.storage.sync.get(['logochoisi'], function(result) {
    console.log(result)
    choixUtilisateur = result.logochoisi;
});

async function logURL(requestDetails) {
    const url = requestDetails.url
    const parsedUrl = new URL(url)
    console.log(`Loading: ${url}`);
    console.log(url.startsWith(`${parsedUrl.protocol}//eperso.ephec.be/Content/themes/base/css`))
    if(url.startsWith(`${parsedUrl.protocol}//eperso.ephec.be/Content/themes/base/css`)) {
        if(choixUtilisateur === "old"){
            console.log('modifiyng request')
            const cssFileUrl = chrome.runtime.getURL('CSS/eperso_logo.css');

            // Redirect the request to the embedded CSS
            return { redirectUrl: cssFileUrl };
        }
    }
    if(url.startsWith(`${parsedUrl.protocol}//portail.ephec.be/css/site.css` || `${parsedUrl.protocol}//portal.ephec.be/css/site.css`)) {
        console.log('modifiyng request')
        const cssFileUrl = chrome.runtime.getURL('CSS/portail_main.css');

        // Redirect the request to the embedded CSS
        return { redirectUrl: cssFileUrl };
    }
    // Continue with the original request if it doesn't match
    return {};
}

browser.webRequest.onBeforeRequest.addListener(
    logURL,
    { urls: ['*://eperso.ephec.be/*', '*://portail.ephec.be/*'] },
    ["blocking"],
);

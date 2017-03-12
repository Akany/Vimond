const VIMOND_ASSETS = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/search/categories/root/assets.json';


export function loadAssets() {
    return fetch(VIMOND_ASSETS)
        .then(toJson)
        .then(body => body.assets.asset);
}

function toJson(response) {
    return response.json();
}

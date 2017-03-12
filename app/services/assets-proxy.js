const VIMOND_ASSETS = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/search/categories/root/assets.json';
const VIMOND_ASSET = 'https://vimond-rest-api.ha.expo-first.vimondtv.com/api/web/asset';


export function loadAssets() {
    return fetch(VIMOND_ASSETS)
        .then(toJson)
        .then(body => body.assets.asset);
}

export function loadAsset(id) {
    const url = [VIMOND_ASSET, id + '.json'].join('/');

    return fetch(url)
        .then(toJson)
        .then(body => body.asset);
}

export function loadAssetStream(id, protocol = 'HLS') {
    const url = [VIMOND_ASSET, id, 'play.json'].join('/') + '?protocol=' + protocol;

    return fetch(url)
        .then(toJson)
        .then(body => body.playback.items.item.url);
}

function toJson(response) {
    return response.json();
}

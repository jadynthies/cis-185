export class Loader {
    constructor(loader, config) {
        this.loader = loader;
        this.config = config; //list of assets to load
        this.resources = {}; 
    }

    preload() { //game waaits for everything (all assets) to load, video follow along
        for (const asset of this.config.loader) {
            let key = asset.key.substr(asset.key.lastIndexOf('/') + 1);
            key = key.substring(0, key.indexOf('.'));
            if (asset.key.indexOf(".png") !== -1 || asset.key.indexOf(".jpg") !== -1) {
                this.loader.add(key, asset.data.default)
            }
        }

        return new Promise(resolve => {
            this.loader.load((loader, resources) => {
                this.resources = resources;
                resolve();
            });
        });
    }
}
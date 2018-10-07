export default class IdealsModel {
    constructor() {
        this.ideals = [];
        // this.ideals32 = [];
        // this.ideals16 = [];
        // this.ideals8 = [];
        // this.ideals4 = [];
        // this.ideals2 = [];
        // this.initIdeals();
    }
    
    // initIdeals() {
    //     this.getIdeals();
    //     this.getStageIdeals(32, this.ideals);
    // }
    
    async getIdeals() {
        return this.ideals = await fetch('./models/ideals.json').then(res => res.json());
    }
    
    getVersusIdeals(stage, round) {
        return this[`ideals${stage}`][round - 1];
    }
    
    getStageIdeals(stage, ideals) {
        ideals = ideals.slice().shuffle();
        return this[`ideals${stage}`] = this.getGroupedIdeals(ideals);
    }
    
    getGroupedIdeals(list, size = 2) {
        return list.reduce((merge, item) => {
            const lastKey = merge.length - 1;
            const lastItem = merge[lastKey] || [];
            
            lastItem.length > 0 && lastItem.length < size ?
                lastItem.push(item) :
                merge.push([item]);
            
            return merge;
        }, []);
    }
    
    choice(versusIdeals, id = 0) {
        (versusIdeals.find(item => item.id === Number(id)) || {}).choice = true;
    }
}
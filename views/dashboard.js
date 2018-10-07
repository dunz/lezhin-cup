export default class Dashboard {
    constructor(idealsModel) {
        this.idealsModel = idealsModel;
        this.dashboard = document.getElementById('dashboard');
        this.startButton = document.getElementById('startButton');
        this.stagedIdeals = [];
        this.versusIdeals = [];
        this.stage = 32;
        this.round = 1;
        this.maxRound = Math.ceil(this.stage / 2);
        
        this.initUserList();
        this.eventHandler();
        this.initEventHandler();
    }
    
    eventHandler() {
        this.startButton.addEventListener('click', () => {
            this.renderVersus();
        });
    }
    
    async initUserList() {
        await this.idealsModel.getIdeals();
        this.getStageIdeals();
    }
    
    getStageIdeals() {
        this.idealsModel.getStageIdeals(this.stage, this.idealsModel.ideals);
    }
    
    renderVersus() {
        this.versusIdeals = this.idealsModel.getVersusIdeals(this.stage, this.round);
        this.dashboard.innerHTML = this.getListTemplate(this.versusIdeals, 'ideals');
    }
    
    getListTemplate(list, className) {
        return list.reduce((html, user) => {
            return `${html}<li class="ideal" data-id="${user.id}">${user.name}</li>`;
        }, `<ul class="${className}">`) + '</ul>';
    }
    
    initEventHandler() {
        this.dashboard.addEventListener('click', e => {
            e.target.className === 'ideal' && this.clickIdeal(e);
        });
    }
    
    clickIdeal(e) {
        this.idealsModel.choice(this.versusIdeals, e.target.dataset.id);
        this.nextRound();
    }
    
    nextRound() {
        this.round++;
        
        if (this.round > this.maxRound) {
            this.round = 1;
            this.stage /= 2;
            
            this.getStageIdeals();
        }
        this.renderVersus();
    }
}
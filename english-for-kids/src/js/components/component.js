import Utils from '../helpers/utils';

class Component {
    constructor() {
        this.request = Utils.parseRequestURL();
    }
	
    // eslint-disable-next-line class-methods-use-this
    afterRender() {}
}


export default Component;
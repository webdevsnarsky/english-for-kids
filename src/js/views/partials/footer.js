import Component from '../../components/component';

class Footer extends Component {
    constructor(html) {
        super();
        this.html = html;
    }

    render() {
        
        this.html =
        `<footer class="footer">                   
            <p class="footer__info">
                &copy; Все права защищены, 2020
            </p>                  
        </footer>`

        return this.html;
    }
}

export default Footer;
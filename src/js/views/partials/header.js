import Component from '../component';

class Header extends Component {

    render() {
        const [resource] = this.request.resource;

        const html = 
        `<header class="header">  
                    <div class="header-date"></div>                  
                   
                    <a class="header__link ${!resource ? 'active' : ''} " href="/#/">
                        <i class="fas fa-home"></i>
                    </a>
                    <a class="header__link btn-start__orange ${resource === 'calorie-calc' ? 'active' : ''}" href="/#/calorie-calc">
                        <i class="fas fa-utensils"></i>
                     </a> 
                     <a class="header__link btn-start__blue ${resource === 'water-calc' ? 'active' : ''}" href="/#/water-calc">
                        <i class="fas fa-tint"></i>
                    </a>
                     <a class="header__link btn-start__green ${resource === 'descr' ? 'active' : ''}" href="/#/descr">
                        <i class="fas fa-pen"></i>
                     </a>      
                     <a class="header__link btn-start__gray ${resource === 'faq' ? 'active' : ''}" href="/#/faq">
                        <i class="far fa-question-circle"></i>
                     </a>  
                </header>`;

        return html;
    }

    // afterRender() {
    //     this.getCurrentDate();
    // }

    // getCurrentDate() {
    //     const addNowDate = document.getElementsByClassName('header-date')[0];
    //     let currentDate = new Date();
    //     let year = currentDate.getFullYear();
    //     let month = currentDate.getMonth();
    //     month = `${month + 1}`;
    //     let day = currentDate.getDate();
        
    //     addNowDate.innerHTML = `${day}/${month}/${year}`;
    //   }  
}

export default Header;
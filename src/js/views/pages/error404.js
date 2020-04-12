import Component from '../component';

class Error404 extends Component{
    constructor(html) {
        super();
        this.html = html;
    }

    render() {
        this.html =
        `<h1 class="page-title">Такой страницы не существует:( </h1>`;

        return this.html;
    }
}

export default Error404;
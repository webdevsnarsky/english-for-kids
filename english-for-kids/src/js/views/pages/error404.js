import Component from '../../components/component';

class Error404 extends Component{
    constructor(html) {
        super();
        this.html = html;
    }

    render() {
        this.html =
        `<h1 class="page-title">Такой страницы не существует:( </h1>
        <a class="error__link" href="#/main" title="Нажми быстрее!:)">Вернуться на главную страницу`;

        return this.html;
    }
}

export default Error404;
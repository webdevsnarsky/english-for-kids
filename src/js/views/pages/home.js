import Component from '../component';
// this.
class Home extends Component {
  constructor (html) {
    super();
    this.html = html; 
  }

    render() {
        this.html = 
        `<div class="home"> 
                    <h1 class="page-title">Добро пожаловать в менеджер здоровья!</h1>
                    <div class="loader">
                        <div class="loader-pulse">
                            <div class="loader__icone">
                                <i class="fas fa-heartbeat"></i>
                            </div>
                        </div>
                    </div>      
                    <div class="container-btn">
                        <div class="btn-item">
                            <a class="home__btn-start btn-start btn-start__orange" href="#/calorie-calc" title="Нажми, чтобы начать!">
                            <i class="fas fa-utensils"></i>
                            Калькулятор калорий
                            <span> Посмотрите уровень калорий ваших блюд!</span>
                            </a>
                        </div>
                        <div class="btn-item">
                            <a class="home__btn-start btn-start btn-start__blue" href="#/water-calc" title="Нажми, чтобы начать!">
                            <i class="fas fa-tint"></i>
                            Калькулятор воды
                            <span> Узнайте уровень гидратации вашего тела!</span>
                            </a>
                        </div>
                        <div class="btn-item">
                            <a class="home__btn-start btn-start btn-start__green" href="#/descr" title="Нажми, чтобы начать!">
                            <i class="fas fa-pen"></i>
                            Описание проекта
                            <span> Здесь Вы можете познакомиться с нашим приложением по ближе</span>
                            </a>
                        </div>
                        <div class="btn-item">
                            <a class="home__btn-start btn-start btn-start__gray" href="#/faq" title="Нажми, чтобы начать!">
                            <i class="far fa-question-circle"></i>
                            FAQ
                            <span>Если у вас есть вопросы - Вам сюда!</span>
                            </a>
                        </div>  
                        <div class="btn-item">
                            <a class="home__btn-start btn-start btn-start__gray" href="#/home" title="Нажми, чтобы начать!">
                            <i class="far fa-question-circle"></i>
                            AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                            <span>Если у вас есть вопросы - Вам сюда!</span>
                            </a>
                        </div>  
                        
                    </div>
                </div>`;

                return this.html;
    }
}

export default Home;
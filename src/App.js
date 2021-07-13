import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Catalog from './Catalog';
import Header from './Header'
import WishList from './WishList';
import ThemeContext from './ThemeContext'
import ErrorBoundary from './ErrorBoundary'

let data = [
	{
    id: 1,
    isWish: false,
		title: "Матрица",
		posterImg: "./images/catalog/matrix.jpg",
		genre: "Боевик",
		year: 1999,
		timeline: 136,
		mainActors: [	"Киану Ривз", "Лоуренс Фишборн", "Кэрри-Энн Мосс", "Хьюго Уивинг", "Глория Фостер" ],
		description: "Он жил своими серыми буднями, он был очень талантливым программистом. Пока однажды не встретил человека, который назвал себя Морфиусом и предложил ему увидеть настоящий мир. Он согласился.\nЗемля, скрытая за толстым слоем облаков, покрытая умными машинами, качающими из людей энергию, дающими в обмен на силу, каждому человеку иллюзию существования привычного реально мира.\nОн больше не обычный программист, теперь его зовут Нео. Все окружающие уверены в том, что он - избранный. Он в этом сомневается, он пока не верит в свои силы. Пока..."
  },
	{
    id: 2,
    isWish: false,
		title: "Побег из Шоушенка",
		posterImg: "../images/catalog/escapefromshaushenk.jpeg",
		genre: "Драма",
		year: 1994,
		timeline: 142,
		mainActors: [ "Тим Роббинс", "Морган Фриман", "Боб Гантон", "Уильям Сэдлер", "Клэнси Браун" ],
		description: "Эндю Дюфрейн - бывший вице-президент крупного банка, заключенный тюрьмы Шоушенк. Ему нет и 30, а у него два пожизненных за убийства жены и любовницы. Он не совершал этих преступлений, но он попал под волну страшных стечений обстоятельств.За всю историю Шоушенка никому не удавалось из него сбежать..."
	},
	{
    id: 3,
    isWish: false,
		title: "Форрест Гамп",
		posterImg: "../images/catalog/forestgump.jpg",
		genre: "Драма",
		year: 1994,
		timeline: 142,
		mainActors: [	"Том Хэнкс", "Ребекка Уильямс", "Сэлли Филд", "Майкл Коннер Хэмпфри", "Харольд Дж. Хертэм" ],
		description: "Форресту Гампу - умственно отсталому человеку с добрым сердцем - удается добиться в жизни многого: стать звездой американского футбола, героем вьетнамской войны и даже миллиардером.\nПочти во всех сценах, где Форрест бегает, Тома Хэнкса дублировал его младший брат Джим."
	},
	{
    id: 4,
    isWish: false,
		title: "Властелин колец: Братство кольца",
		posterImg: "../images/catalog/thelordoftherings.jpg",
		genre: "Приключения",
		year: 2001,
		timeline: 178,
		mainActors: [	"Элайджа Вуд", "Орландо Блум", "Вигго Мортенсен", "Кейт Бланшетт", "Хьюго Уивинг" ],
		description: "Поиски великого кольца Саурона завершены. Оно попало в руки хоббитов из Шира, и только от их решимости и стойкости зависит судьба Средиземья. Фродо Бэгинс во главе Братства Кольца отправляется в Мордор, дабы уничтожить кольцо в горниле Роковой горы."
	},
	{
    id: 5,
    isWish: false,
		title: "Титаник",
		posterImg: "../images/catalog/titanic.jpg",
		genre: "Драма",
		year: 1997,
		timeline: 194,
		mainActors: [	"Леонардо ДиКаприо", "Кейт Уинслет", "Билли Зейн", "Кэти Бэйтс", "Фрэнсис Фишер" ],
		description: "Бедный художник Джек, случайно попав на борт \"Титаника\", влюбляется в богатую аристократку Роуз. Она отвечает ему взаимностью. Но вдруг роскошный лайнер сталкивается с айсбергом.\nПочти весь реквизит для фильма - от ковров до канделябров - делался либо самими компаниями, которые обустраивали реальный \"Титаник\", либо под их чутким руководством."
	},
  {
    id: 6,
    isWish: false,
		title: "Назад в будущее",
		posterImg: "../images/catalog/backtofuture.jpg",
		genre: "Комедия",
		year: 1985,
		timeline: 116,
		mainActors: [	"Майкл Дж. Фокс", "Кристофер Ллойд", "Лиа Томпсон", "Криспин Гловер", "Томас Ф. Уилсон" ],
		description: "Марти был обычным выпускником, пока его \"сумасшедший\" друг, профессор Док Браун не изобрел машину времени. На Делориане, модель которого очень напоминает космический корабль, он отправляется в прошлое, чтобы встретить свою маму-школьницу, и свести ее с отцом - недотяпой. Если он не успеет возродить в родителях интерес к друг другу, велика вероятность того, что будущее изменится и вместе с не возникшей симпатией двух людей, так не появится и сам Марти."
	}
]

function App(props) {
  let [ isWishListShowed, setIsWishListShowed ] = useState(false);
  let [ theme, setTheme ] = useState('dark');

  useEffect(() => {
    let wishlist = localStorage.getItem('wishlist')
    localStorage.setItem('wishlist', wishlist ? wishlist : '');
  }, [])

  let context = useContext(ThemeContext);

  return (
	<div className="app" style={{ backgroundColor: context.app_bgColor, color: context.fontColor}}>
        <Header wlShowed={isWishListShowed} setwlShowed={setIsWishListShowed} theme={props.theme} setTheme={props.setTheme}/>
        {
            isWishListShowed &&
            <ErrorBoundary>
                <WishList data={data} wlShowed={isWishListShowed} setwlShowed={setIsWishListShowed}/>
            </ErrorBoundary>
        }
        <main className="content">
            <div className="container">
            <ErrorBoundary>
                <Catalog data={data}/>
            </ErrorBoundary>
            </div>
        </main>
	</div>
  );
}

export default App;

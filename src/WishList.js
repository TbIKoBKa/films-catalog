import { useContext } from "react";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";

function WishList(props){
    let context = useContext(ThemeContext)
    let orderedWishList = localStorage.getItem('wishlist').split(',').sort();
    let wishListItems = [];

    orderedWishList.forEach(element => {
        for(let i = 0; i < props.data.length; i++)
        {
            if(element === props.data[i].id.toString())
            {
                wishListItems.push(props.data[i])
                break;
            }
        }
    });

    wishListItems = wishListItems.map((item) => {
        return (
            <li key={item.id} className="wishList-item">
                <a href="#" className="catalog-item">
                    <figure>
                        <img className="catalog-item-img" src={item.posterImg} alt={item.title}></img>
                        <figcaption className="catalog-item-title">{item.title}</figcaption>
                    </figure>
                </a>
            </li>
        )
    })

    return(
        <div className="wishList" style={{ backgroundColor: context.wl_bgColor }}>
            <div className="wishList-header" style={{ backgroundColor: context.wlHeader_bgColor }}>
                <h1 className="wishList-title">Wish List</h1>
                <button onClick={() => {props.setwlShowed(!props.wlShowed)}}>&#10006;</button>
            </div>
            
            <ul className="wishList-scroll">
                { wishListItems.length > 0 ? wishListItems : <h2>Empty :(</h2> }
            </ul>
        </div>
    )
}

export default WishList
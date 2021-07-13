import { useState } from 'react'

function CatalogItem(props){
    let [ wished, setWished ] = useState(props.item.isWish);

    function onClick(e){
        e.preventDefault();

        if(!props.item.isWish)
            props.addToWishList(props.item.id);
        else
            props.removeFromWishList(props.item.id);

        setWished(!wished);
    }

    return(
        <a href="#" className="catalog-item">
            <figure>
                <img className="catalog-item-img" src={props.item.posterImg} alt={props.item.title}></img>
                <button className="addToWishList" onClick={(e) => {onClick(e)}}>{ wished ? "REMOVE" : "ADD" }</button>
                <figcaption className="catalog-item-title">{props.item.title}</figcaption>
            </figure>
        </a>
    )
}

export default CatalogItem
import CatalogItem from './CatalogItem'
import ErrorBoundary from './ErrorBoundary';

function Catalog(props){
    let wishList = localStorage.getItem('wishlist');
    let idList = [];

    if(wishList)
        idList = wishList.split(',');

    function addToWishList(id)
    {
        if(!idList.includes(id.toString()))
        {
            idList.push(id.toString());
            localStorage.setItem('wishlist', idList.join());
        }
    }

    function removeFromWishList(id)
    {
        if(idList.includes(id.toString()))
        {
            let indexID = idList.indexOf(id.toString());
            idList.splice(indexID, 1);
            localStorage.setItem('wishlist', idList.join());
        }
    }

    return(
        <section className="catalog">
            {
                props.data.map((item) => {
                    item.isWish = idList.includes(item.id.toString()) ? true : false
                    return <CatalogItem key={item.id} item={item} addToWishList={addToWishList} removeFromWishList={removeFromWishList}/>
                })
            }
        </section>
    )
}

export default Catalog
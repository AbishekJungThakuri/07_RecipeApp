import RecipeItem from "../../components/recipe-Item";
import { GlobalContext } from "../../context";
import { useContext } from "react";

export default function Favourite(){

   
    const {favouritesList} = useContext(GlobalContext);

    return (
       <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
       {
        favouritesList && favouritesList.length > 0 ?
        favouritesList.map(item => <RecipeItem item = {item} /> )
        : <div className="lg:text-4xl text-xl text-center text-black font-extrabold" >Nothing is added in favourites</div>
       } 

       </div>
    )
}
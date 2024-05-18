import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState('');
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favouritesList, setFavouriteList] = useState([]);

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await response.json();
      // console.log(data);
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
        setSearchParam('');
        navigate('/')
      }
    } catch (e) {
      // console.log(e)
      setLoading(false);
      setSearchParam('');
    }
  }

  function handleAddFavourite(getCurrentItem) {
    // console.log(getCurrentItem)
    let cpyFavouriteList = [...favouritesList];
    const index = cpyFavouriteList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      // item isnot in the favourite list
      cpyFavouriteList.push(getCurrentItem);
    } else {
      cpyFavouriteList.splice(index);
    }
    setFavouriteList(cpyFavouriteList);
  }

  // console.log(favouritesList);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        handleAddFavourite,
        favouritesList,
        setFavouriteList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

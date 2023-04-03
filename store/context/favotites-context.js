import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function favoriteContextProvider({children}) {
    const [favoritesMealIds, setFavoritesMealIds] = useState([]);

    function addFavorite(id) {
        setFavoritesMealIds((currentIds) => [...currentIds, id] );
    }

    function removeFavorite(id) {
        setFavoritesMealIds((currentIds) => currentIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoritesMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default favoriteContextProvider;


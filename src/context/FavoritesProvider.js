import React, {createContext, useEffect, useState} from "react";

export const FavoritesContext = createContext(null);

function FavoritesProvider({children}) {
    const [favorites, setFavorites] = useState({});

    useEffect(() => {
        if (localStorage.getItem("favorites") === null) {
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            setFavorites(JSON.parse(localStorage.getItem("favorites")));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    function addFavorite(favorite) {

        if (favorites.hasOwnProperty("loc5")) {
            console.log("teveel favorieten");
        } else {
            if (JSON.stringify(favorites) === "{}") {
                setFavorites({...favorites, loc1: favorite});
            } else if (!favorites.hasOwnProperty("loc2")) {
                setFavorites({...favorites, loc2: favorite});
            } else if (!favorites.hasOwnProperty("loc3")) {
                setFavorites({...favorites, loc3: favorite});
            } else if (!favorites.hasOwnProperty("loc4")) {
                setFavorites({...favorites, loc4: favorite});
            } else if (!favorites.hasOwnProperty("loc5")) {
                setFavorites({...favorites, loc5: favorite});
            }
        }

        console.log("favorite added");
    }

    function remFavorite(locationKey) {
        delete favorites[locationKey];
        setFavorites({...favorites});
    }

    function getFavoritesArray() {
        return Object.keys(favorites).map((key) => [key, favorites[key]]);
    }

    return (
        <FavoritesContext.Provider value={{
            addFavorite,
            getFavoritesArray,
            remFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesProvider;
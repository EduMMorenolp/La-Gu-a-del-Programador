// import { createContext, useState } from 'react';

// export const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//   const [favorites, setFavorites] = useState([]);

//   const addFavorite = (resource) => {
//     setFavorites((prev) => [...prev, resource]);
//   };

//   const removeFavorite = (id) => {
//     setFavorites((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
//       {children}
//     </FavoritesContext.Provider>
//   );
// };

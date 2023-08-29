import { useState, useEffect } from "react";
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    const watchedItems = JSON.parse(localStorage.getItem("watchedMovies"));
    if (watchedItems) {
      return watchedItems;
    } else {
      return [];
    }
  });

  useEffect(
    function () {
      localStorage.setItem("key", JSON.stringify(value));
    },
    [value, key]
  );
  return [value, setValue];
}

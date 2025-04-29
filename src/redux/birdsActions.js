import { getAuth } from "firebase/auth";

const fetchBirdsSuccess = (data) => {
  return { type: "FETCH_BIRDS_SUCCESS", payload: data };
};

const fetchBirdsFailure = (error) => {
  return { type: "FETCH_BIRDS_FAILURE", payload: error };
};

export const fetchBirdsRequest = () => {
  return async (dispatch) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      return dispatch(fetchBirdsFailure("User not authenticated"));
    }

    try {
      const idToken = await user.getIdToken();
      const lang = localStorage.getItem("i18nextLng") || "en";

      const response = await fetch(
        `https://songbird-ff3d2-default-rtdb.firebaseio.com/birdsData/${lang}.json?auth=${idToken}`
      );

      if (!response.ok) {
        return dispatch(fetchBirdsFailure("Error"));
      }

      const responseData = await response.json();

      const loadedBirds = [];

      Object.values(responseData).forEach(function (innerObject) {
        let tempArray = [];

        Object.values(innerObject).forEach(function (value) {
          tempArray.push({
            id: value.id,
            name: value.name,
            species: value.species,
            audio: value.audio,
            description: value.description,
            image: value.image,
          });
        });
        loadedBirds.push(tempArray);
        tempArray = [];
      });

      dispatch(fetchBirdsSuccess(loadedBirds));
    } catch (error) {
      console.error("Error fetching birds:", error);
      dispatch(fetchBirdsFailure("Fetch error"));
    }
  };
};

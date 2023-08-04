export const fetchData = () => {
  return (dispatch) => {
    const fetch = async () => {
      const response = await fetch(
        "https://songbird-ff3d2-default-rtdb.firebaseio.com/birdsData.json"
      );
      if (!response.ok) {
        throw new Error("Could not fetch data");
      }
      const responseData = await response.json();

      const loadedBirds = [];

      Object.values(responseData).forEach(function (innerObject, index) {
        let tempArray = [];

        Object.values(innerObject).forEach(function (value, index) {
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

      return loadedBirds;
    };
  };
};

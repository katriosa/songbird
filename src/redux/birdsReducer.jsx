const initialState = {
  birdsData: null,
  loading: false,
  error: null,
};

const birdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BIRDS_REQUEST":
      return { ...state, loading: true };
    case "FETCH_BIRDS_SUCCESS":
      return { ...state, loading: false, birdsData: action.payload };
    case "FETCH_BIRDS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "LOAD_STATE":
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};

export default birdsReducer;

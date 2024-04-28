import { configureStore } from "@reduxjs/toolkit";
import birdsReducer from "./birdsReducer";

const store = configureStore({
  reducer: {
    birds: birdsReducer,
  },
});

// Save store state to localStorage on store changes
store.subscribe(() => {
  const state = store.getState();
  saveStateToLocalStorage(state);
});

// Save the Redux store state to localStorage
const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Error saving state to localStorage:", error);
  }
};

// Load the Redux store state from localStorage (if available)
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Error loading state from localStorage:", error);
    return undefined;
  }
};

// Load the state from localStorage when the app starts
const initialState = loadStateFromLocalStorage();
if (initialState) {
  store.dispatch({ type: "LOAD_STATE", payload: initialState });
}

export default store;

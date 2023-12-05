
// Set an item in localStorage
export const setLocalStorageItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
  };
  
  // Get an item from localStorage
  export const getLocalStorageItem = (key) => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error("Error getting localStorage item:", error);
      return null;
    }
  };
  
  // Remove an item from localStorage
  export const removeLocalStorageItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing localStorage item:", error);
    }
  };
  
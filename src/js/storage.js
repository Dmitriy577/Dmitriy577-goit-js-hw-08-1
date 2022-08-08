export const save = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error('Set state error: ', error.message);
    }
};
  
export const getItemKey = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState);
    } 
    catch (error) {
        console.error('Get state error: ', error.message);
    }
};
  
export const removeKey = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : localStorage.removeItem(key);
    } 
    catch (error) {
      console.error('Get state error: ', error.message);
    }
};
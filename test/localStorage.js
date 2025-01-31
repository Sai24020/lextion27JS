export function getFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  
  export function saveToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
export const SetItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))
export const GetItem = (key) => localStorage.getItem(key) !== null ? JSON.parse(localStorage.getItem(key)) : null
export const RemoveItem = (key) => localStorage.removeItem(key)
export const Clear = () => localStorage.clear()
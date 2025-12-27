

const reactData = "reactDatabase";


export const setLocalStorage = (task) => {
    return localStorage.setItem(reactData,JSON.stringify(task));
}

export const getLocalStorage = () => {
    const rawTodos = localStorage.getItem(reactData);
    if(!rawTodos) return [];
    return JSON.parse(rawTodos);
}
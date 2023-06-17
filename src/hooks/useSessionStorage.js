export const useSessionStorage = () => {

    const getData = (key) => {
        const storedPrefs = window.sessionStorage.getItem(key);
        return storedPrefs;
    }

    const setData = (key, value) => {
        if (typeof window !== 'undefined' && window.sessionStorage) {
            const storedPrefs = window.sessionStorage.getItem(key);
            if (storedPrefs && typeof storedPrefs === 'string') {
                return storedPrefs;
            } else {
                return window.sessionStorage.setItem(key, value)
            }
        }
    }

    return { getData, setData };
}

export default function () {
  function getItem<K extends keyof Storage>(key: K): Storage[K] | null {
    const storage = window.localStorage;
    const value = storage.getItem(key);
    if (!value) return null;
    return JSON.parse(value) as Storage[K];
  }

  function setItem<K extends keyof Storage>(key: K, value: Storage[K]) {
    const storage = window.localStorage;
    storage.setItem(key, JSON.stringify(value));
  }

  return {
    getItem,
    setItem,
  };
}

interface Storage {
  stations: number[]
}

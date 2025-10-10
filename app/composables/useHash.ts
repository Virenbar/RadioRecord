export default function () {
  function getHash() {
    return new URLSearchParams(location.hash.replace('#', '?'));
  }

  function getParameter<K extends keyof Parameters>(key: K) {
    const params = getHash();
    const value = params.get(key);
    return value as Parameters[K] | null;
  }

  function setParameter<K extends keyof Parameters>(key: K, value: Parameters[K]) {
    const params = getHash();
    params.set(key, value);
    location.hash = params.toString();
  }

  return {
    getParameter,
    setParameter,
  };
}

interface Parameters {
  sort: Sort
}

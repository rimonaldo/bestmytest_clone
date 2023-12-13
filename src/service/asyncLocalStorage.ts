
class AsyncLocalStorage {
  getItem(key: string): Promise<string | null> {
    return new Promise((resolve, reject) => {
      try {
        const value = localStorage.getItem(key);
        console.log('key', key);
        resolve(value);
      } catch (error) {
        reject(error);
      }
    });
  }



  setItem(key: string, value: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem(key, value);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  removeItem(key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}

const asyncLocalStorage = new AsyncLocalStorage();

export default asyncLocalStorage;

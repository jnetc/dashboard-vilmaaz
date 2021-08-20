import { Schedule } from '@Types';
import { testdata } from './data';

// Connecting to indexedDB
export const connection = (dbName: string, storeName: string) => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    let db: IDBDatabase | null;
    let request = indexedDB.open(dbName, 1);

    request.addEventListener(
      'error',
      (err: IDBOpenDBRequestEventMap['error']) => {
        reject(`Error indexedDB: ${err}`);
      }
    );

    request.addEventListener(
      'success',
      (ev: IDBOpenDBRequestEventMap['success']) => {
        const req = ev.target as IDBRequest<IDBDatabase>;
        db = req.result;
        // console.info('====> Connection success');
        resolve(db);
      }
    );

    request.addEventListener(
      'upgradeneeded',
      (ev: IDBOpenDBRequestEventMap['upgradeneeded']) => {
        const req = ev.target as IDBRequest<IDBDatabase>;
        db = req.result;
        // indexedID version
        // const oldVersion = ev.oldVersion;
        // const newVersion = ev.newVersion || req.result.version;

        // Checking an existing store
        if (!db.objectStoreNames.contains(storeName)) {
          // console.info('database created!!!');
          db.createObjectStore(storeName, {
            keyPath: 'id',
          });
        }
      }
    );
  });
};

export const getAllFromIndexedDB = async (storeName: string) => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readonly');
  // If everything was fine
  transaction.oncomplete = () => {
    // console.log(`====> Transaction is complite / Get All`);
  };

  // Define store name and get all
  const store = transaction.objectStore(storeName);
  const res = store.getAll();
  // Handler if got all data
  return new Promise<Array<Schedule>>((resolve, reject) => {
    res.onerror = (err: IDBRequestEventMap['error']) => {
      reject(`Error transaction: ${err}`);
    };

    res.onsuccess = (ev: IDBRequestEventMap['success']) => {
      const req = ev.target as IDBRequest<IDBDatabase>;
      const resetType = req.result as unknown;
      const arr = resetType as Array<Schedule>;

      // For visual test data
      const lS = localStorage.getItem('is-first-visit');
      if (!lS || arr.length === 0) {
        localStorage.setItem('is-first-visit', 'true');
        resolve(testdata);
        return;
      }
      resolve(arr);
    };
  });
};

export const getByIdIndexedDB = async (storeName: string, id: string) => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readwrite');

  transaction.oncomplete = () => {
    // console.log(`====> Transaction is complite / Get By Id`);
  };
  // create an object store on the transaction
  const store = transaction.objectStore(storeName);
  // add our newItem object to the object store
  const request = store.get(id);

  return new Promise<Schedule>((resolve, reject) => {
    request.addEventListener('error', () => {
      reject({
        created: false,
        message: `Profile was not saved: ${request.error}`,
      });
    });

    request.addEventListener('success', (ev: IDBRequestEventMap['success']) => {
      const req = ev.target as IDBRequest<IDBDatabase>;
      const resetType = req.result as unknown;
      const user = resetType as Schedule;
      resolve(user);
    });
  });
};

export const createNewProfileIndexedDB = async (
  storeName: string,
  data: Schedule
): Promise<{ created: boolean; message: string }> => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readwrite');

  transaction.oncomplete = () => {
    // console.log(`====> Transaction is complite / Create New`);
  };
  // create an object store on the transaction
  const store = transaction.objectStore(storeName);
  // add our newItem object to the object store
  const request = store.add({ ...data });

  return new Promise((resolve, reject) => {
    request.addEventListener('error', () => {
      reject({
        created: false,
        message: `Profile was not saved: ${request.error}`,
      });
    });

    request.addEventListener('success', () => {
      resolve({ created: true, message: 'Profile was saved!' });
    });
  });
};

export const updateProfileIndexedDB = async (
  storeName: string,
  data: Schedule | null
): Promise<{ created: boolean; message: string }> => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readwrite');

  transaction.oncomplete = () => {
    // console.log(`====> Transaction is complite / Was updated`);
  };
  // create an object store on the transaction
  const store = transaction.objectStore(storeName);
  // updating our newItem object to the object store
  // id no needed ^_^
  const request = store.put({ ...data });

  return new Promise((resolve, reject) => {
    request.addEventListener('error', () => {
      reject({
        created: false,
        message: `Profile wasn't updated: ${request.error}`,
      });
    });

    request.addEventListener('success', () => {
      resolve({ created: true, message: 'Profile was updated!' });
    });
  });
};

export const deleteProfileIndexedDB = async (
  storeName: string,
  key: string | undefined
): Promise<{ created: boolean; message: string }> => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readwrite');

  transaction.oncomplete = () => {
    // console.log(`====> Transaction is complite / Was updated`);
  };
  // create an object store on the transaction
  const store = transaction.objectStore(storeName);
  // Delete profile form store
  const request = store.delete(key || '');

  return new Promise((resolve, reject) => {
    request.addEventListener('error', () => {
      reject({
        created: false,
        message: `Profile wasn't deleted: ${request.error}`,
      });
    });

    request.addEventListener('success', () => {
      resolve({ created: true, message: 'Profile was deleted!' });
    });
  });
};

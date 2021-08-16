import { Schedule2 } from '@Types';

// Connecting to indexedDB
export const connection = (dbName: string, storeName: string) => {
  return new Promise<IDBDatabase>((resolve, reject) => {
    let db: IDBDatabase | null;
    let request = indexedDB.open(dbName, 3);

    request.addEventListener(
      'error',
      (err: IDBOpenDBRequestEventMap['error']) => {
        // console.warn('error', err);
        reject(`Error indexedDB: ${err}`);
      }
    );

    request.addEventListener(
      'success',
      (ev: IDBOpenDBRequestEventMap['success']) => {
        const req = ev.target as IDBRequest<IDBDatabase>;
        db = req.result;
        console.info('====> Connection success');
        resolve(db);
      }
    );

    request.addEventListener(
      'upgradeneeded',
      (ev: IDBOpenDBRequestEventMap['upgradeneeded']) => {
        const req = ev.target as IDBRequest<IDBDatabase>;
        db = req.result;
        // indexedID version
        const oldVersion = ev.oldVersion;
        const newVersion = ev.newVersion || req.result.version;

        console.log(`DB upgraded form v.${oldVersion} to v.${newVersion}`);
        // Checking an existing store
        if (!db.objectStoreNames.contains(storeName)) {
          console.info('database created!!!');
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
  // var arr: Array<Schedule2> = [];
  const transaction = db.transaction(storeName, 'readonly');
  // If everything was fine
  transaction.oncomplete = () => {
    console.log(`====> Transaction is complite / Get All`);
  };

  // Define store name and get all
  const store = transaction.objectStore(storeName);
  const res = store.getAll();
  // Handler if got all data
  return new Promise<Array<Schedule2>>((resolve, reject) => {
    res.onerror = (err: IDBRequestEventMap['error']) => {
      reject(`Error transaction: ${err}`);
    };

    res.onsuccess = (ev: IDBRequestEventMap['success']) => {
      const req = ev.target as IDBRequest<IDBDatabase>;
      const resetType = req.result as unknown;
      const arr = resetType as Array<Schedule2>;
      resolve(arr);
    };
  });
};

export const getByIdIndexedDB = async (storeName: string, id: string) => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readwrite');

  transaction.oncomplete = () => {
    console.log(`====> Transaction is complite / Get By Id`);
  };
  // create an object store on the transaction
  const store = transaction.objectStore(storeName);
  // add our newItem object to the object store
  const request = store.get(id);

  return new Promise<Schedule2>((resolve, reject) => {
    request.addEventListener('error', () => {
      console.log(`Profile was not saved: ${request.error}`);
      reject({
        created: false,
        message: `Profile was not saved: ${request.error}`,
      });
    });

    request.addEventListener('success', (ev: IDBRequestEventMap['success']) => {
      const req = ev.target as IDBRequest<IDBDatabase>;
      const resetType = req.result as unknown;
      const user = resetType as Schedule2;
      resolve(user);
      // console.log(`Get profile ID: ${req.result}`);
    });
  });
};

export const createNewProfileIndexedDB = async (
  storeName: string,
  data: Schedule2
): Promise<{ created: boolean; message: string }> => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readwrite');

  transaction.oncomplete = () => {
    console.log(`====> Transaction is complite / Create New`);
  };
  // create an object store on the transaction
  const store = transaction.objectStore(storeName);
  // add our newItem object to the object store
  const request = store.add({ ...data });

  return new Promise((resolve, reject) => {
    request.addEventListener('error', () => {
      console.log(`Profile was not saved: ${request.error}`);
      reject({
        created: false,
        message: `Profile was not saved: ${request.error}`,
      });
    });

    request.addEventListener('success', () => {
      resolve({ created: true, message: 'Profile was saved!' });
      console.log(`Profile was saved: ${request.result}`);
    });
  });
};

export const updateProfileIndexedDB = async (
  storeName: string,
  data: Schedule2 | null
): Promise<{ created: boolean; message: string }> => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readwrite');

  transaction.oncomplete = () => {
    console.log(`====> Transaction is complite / Was updated`);
  };
  // create an object store on the transaction
  const store = transaction.objectStore(storeName);
  // updating our newItem object to the object store
  // id no needed ^_^
  const request = store.put({ ...data });

  return new Promise((resolve, reject) => {
    request.addEventListener('error', () => {
      console.log(`Profile wasn't updated: ${request.error}`);
      reject({
        created: false,
        message: `Profile wasn't updated: ${request.error}`,
      });
    });

    request.addEventListener('success', () => {
      resolve({ created: true, message: 'Profile was updated!' });
      console.log(`Profile was updated: ${request.result}`);
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
    console.log(`====> Transaction is complite / Was updated`);
  };
  // create an object store on the transaction
  const store = transaction.objectStore(storeName);
  // updating our newItem object to the object store
  // id no needed ^_^
  const request = store.delete(key || '');

  return new Promise((resolve, reject) => {
    request.addEventListener('error', () => {
      console.log(`Profile wasn't deleted: ${request.error}`);
      reject({
        created: false,
        message: `Profile wasn't deleted: ${request.error}`,
      });
    });

    request.addEventListener('success', () => {
      resolve({ created: true, message: 'Profile was deleted!' });
      console.log(`Profile was deleted: ${request.result}`);
    });
  });
};

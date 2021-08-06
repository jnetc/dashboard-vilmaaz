import { Schedule2, ProfileStore } from '@Types';

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
        console.info('Connection success');
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
  var arr: Array<Schedule2> = [];
  const transaction = db.transaction(storeName, 'readonly');
  // If everything was fine
  transaction.oncomplete = () => {
    console.log(`Transaction is complite`);
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
      arr = resetType as Array<Schedule2>;
      resolve(arr);
      console.log('Get data to store state');
    };
  });
};

export const createNewProfileIndexedDB = async (
  storeName: string,
  data: ProfileStore
): Promise<{ created: boolean; message: string }> => {
  const db = await connection('vilmazz', storeName);
  const transaction = db.transaction(storeName, 'readwrite');

  transaction.oncomplete = () => {
    console.log(`Transaction is complite`);
  };
  // create an object store on the transaction
  const schedule = transaction.objectStore(storeName);
  // add our newItem object to the object store
  const request = schedule.add({ ...data });

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
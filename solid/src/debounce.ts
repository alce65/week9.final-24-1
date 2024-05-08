const heavyOperation = () => {
  console.log('heavy operation');
};

const debounce = (callback: () => void, time: number) => {
  // let isWaiting = true;
  let handle: NodeJS.Timeout;
  return () => {
    if (handle) {
      clearTimeout(handle);
    }

    handle = setTimeout(() => {
      // isWaiting = false;
      callback();
    }, time);
    // if (isWaiting) return;
  };
};

const dbf = debounce(heavyOperation, 1000);

dbf();
dbf();
dbf();
dbf();
dbf();
dbf();
dbf();
dbf();
dbf();

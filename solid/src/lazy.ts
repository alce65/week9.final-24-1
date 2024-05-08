export {};

type FnType = (...arg: any[]) => void | FnType | Promise<void>;

const heavyOperation2 = async (...args: any[]) => {
  console.log('heavy operation con valores: ', args);
};

const posponeFunction = (): FnType[] => {
  const delayedData: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    delayedFn: null | FnType;
    args: any[];
  } = {
    delayedFn: null,
    args: [],
  };

  const delay =
    (fn: FnType) =>
    (...args: any[]) => {
      delayedData.delayedFn = fn;
      delayedData.args = args;
    };

  const trigger = async () => {
    console.log('From Trigger');
    await delayedData.delayedFn!(delayedData.args);
  };

  // Temp const delay =
  //   (time: number) =>
  //   (fn: FnType) =>
  //   async (...args: any[]) => {
  //     await new Promise((resolve) => {
  //       setTimeout(resolve, time);
  //     });
  //     return await fn(...args);
  //   };

  // const posponeDecorator = (fn: FnType) => (targetFn: FnType) => {
  //
  // };

  return [delay, trigger];
};

const [delay, trigger] = posponeFunction();

const delayed = delay(heavyOperation2) as FnType;

await delayed(10, 12);

await trigger();

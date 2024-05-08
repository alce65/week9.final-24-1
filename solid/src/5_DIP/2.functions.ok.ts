// Ejemplo de DIP (Dependency Inversion Principle) a nivel funcional

type Data = {
  prop1: string;
  prop2: string;
};

const fillFromServer = (url: string, callback: (data: Data) => void) => {
  void fetch(url)
    .then(async (response) => response.json())
    .then(callback);
};

fillFromServer('/address/to/data', (data: Data) => {
  console.log(data);
  document.getElementById('slot1')!.innerHTML = data.prop1;
  document.getElementById('slot2')!.innerHTML = data.prop2;
});

{
  type Data = {
    prop1: string;
    prop2: string;
  };

  const fillFromServer = (url: string) => {
    void fetch(url)
      .then(async (response) => response.json())
      .then((data: Data) => {
        console.log(data);
        document.getElementById('slot1')!.innerHTML = data.prop1;
        document.getElementById('slot2')!.innerHTML = data.prop2;
      });
  };

  fillFromServer('/address/to/data');
}

function quality(key, value) {
  return {
    key,
    value,
  };
}

export default function orderByProps(object, arr) {
  const character = [];
  const data = { ...object };
  for (const item of arr) {
    if (item in data) {
      character.push(quality(item, data[item]));
      delete data[item];
    }
  }
  const dataSort = Object.keys(data).sort().reduce(
    (localobj, key) => {
      const newobj = localobj;
      newobj[key] = data[key];
      return newobj;
    },
    {},
  );
  for (const item in dataSort) {
    if (item) {
      character.push(quality(item, dataSort[item]));
    }
  }
  return character;
}

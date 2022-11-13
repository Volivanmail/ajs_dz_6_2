const obj = {
    name: 'мечник',
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40
};

const arrOrder = ["name", "level"];

export default function orderByProps (object, arr ) {
    const character = [];
    const data = {...object};
    for (const item of arr) {
        if (item in data) {
            character.push(quality(item, data[item]));
            delete data[item];
        }
    }
    const dataSort = Object.keys(data).sort().reduce(
        (obj, key) => { 
          obj[key] = data[key]; 
          return obj;
        }, 
        {}
      );
    for (const item in dataSort) {
        character.push(quality(item, dataSort[item]));
    }
    return character;
}

function quality(key, value) {
    return {
        key: key,
        value: value
    };
}

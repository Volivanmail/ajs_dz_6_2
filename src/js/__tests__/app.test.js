import orderByProps from '../app';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const arrOrder = ['name', 'level'];

const printres = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

describe('testing fuction orderByProps', () => {
  const result = orderByProps(obj, arrOrder);
  test('arrSort with toEqual', () => {
    expect(result).toEqual(printres);
  });
  test('arrSort with toBe', () => {
    expect(result).not.toBe(printres);
  });
});

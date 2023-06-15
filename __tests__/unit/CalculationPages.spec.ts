import calculationPages from '../../src/utils/calculationPages';
import drones from '../mock/drones';

describe('CalculationPages.spec', () => {
  it('should calculate the total number of pages and maximum number of pages', () => {
    let AllItems: number = drones == null || drones == undefined ? 0 : drones.length;
    expect(calculationPages(AllItems,5)).toStrictEqual({"allPages": 3, "maxPages": 2,});
  });
});

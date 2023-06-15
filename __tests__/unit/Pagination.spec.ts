import pagination from '../../src/index';
import drones from '../mock/drones';
import dronesPagination1 from '../mock/dronesPagination1';
import dronesPagination2 from '../mock/dronesPagination2';

describe('Filters', () => {
  it('should perform the pagination returning the first 5 items of the array', () => {
    expect(pagination(drones, 1, 5).items).toStrictEqual(dronesPagination1);
  });
  it('should perform the pagination returning the first 5 items, which are after the first 5 items of the array', () => {
    expect(pagination(drones, 2, 5).items).toStrictEqual(dronesPagination2);
  });
  it('should perform pagination returning 0 items if the items is null', () => {
    expect(pagination(null, 1, 5).items).toStrictEqual([]);
  });
});

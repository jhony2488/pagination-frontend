import filterPagination from '../../src/utils/filterPagination';
import drones from '../mock/drones';
import resultFilterPagination from '../mock/resultFilterPagination';

describe('FilterPagination', () => {
  it('should perform pagination filters', () => {
    expect(filterPagination(drones, 5, 2)).toStrictEqual(resultFilterPagination);
  });
});

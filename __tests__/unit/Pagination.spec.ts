import Pagination from '../../src/index'
import drones from '../drones'
import dronesPagination1 from '../dronesPagination1'
import dronesPagination2 from '../dronesPagination2'

describe('Filters', () => {
  it('should perform the pagination returning the first 5 items of the array', () => {
    expect(Pagination.pagination(drones, 1, 5).items).toStrictEqual(dronesPagination1)
  })
  it('should perform the pagination returning the first 5 items, which are after the first 5 items of the array', () => {
    expect(Pagination.pagination(drones, 2, 5).items).toStrictEqual(dronesPagination2)
  })
})

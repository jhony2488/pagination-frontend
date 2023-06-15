import calculationStartPageAndEndPage from '../../src/utils/calculationStartPageAndEndPage';

describe('CalculationStartPageAndEndPage', () => {
  it('should calculate the start and end page', () => {
    expect(calculationStartPageAndEndPage(10, 10, 5)).toStrictEqual({"endPage": 10, "startPage": 1});
  });
});

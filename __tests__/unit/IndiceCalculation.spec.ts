import indiceCalculation from '../../src/utils/indiceCalculation';

describe('IndiceCalculation.spec', () => {
  it('should calculate the indexes', () => {
    expect(indiceCalculation(20,60,1,1,3)).toStrictEqual({"endIndex": 19, "pages": [1, 2, 3], "startIndex": 0});
  });
});

const { sum, multiply } = require('./app'); 

test('soma de 1 e 2 deve ser 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('soma de 0 e 0 deve ser 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('multiplicação de 2 e 3 deve ser 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('multiplicação de -1 e 5 deve ser -5', () => {
    expect(multiply(-1, 5)).toBe(-5);
});

test('soma de números negativos', () => {
    expect(sum(-1, -1)).toBe(-2);
});

const {soma} = require('./matematica');
const {subtrair} = require('./matematica');
const {fatorial} = require('./matematica')

describe('Calculo básico', ()=>{
    test('soma de 1+1 deve ser 2', () =>{
        expect(soma(1,1)).toBe(2);
    })
    
    test('1-1 deve ser 0', () =>{
        expect(subtrair(1,1)).toBe(0);
    })
})

describe('Calculo avançado', ()=>{
    test('fatorial de 0 deve ser 1', () =>{
        expect(fatorial(0)).toBe(1);
    })
    
    test('fatorial de 1 deve ser 1', () =>{
        expect(fatorial(1)).toBe(1);
    })
    
    test('fatorial de 5 deve ser 120', () =>{
        expect(fatorial(5)).toBe(120);
    })
})
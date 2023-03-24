import sum from "../src/sum.js";

describe('funzione sum', () => { 
    it('3+2 fa 5?', ()=>{
        expect(sum(2, 3)).toBe(5);
    })
})
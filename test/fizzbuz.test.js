import fizzbuzz from "../src/fizzbuz.js";

describe('funzione fuzzbiz', () => { 
    it("se in input c'è un multiplo di 3 esce 'fizz'?", ()=>{
        expect(fizzbuzz(9)).toBe('fizz');
    })

    it("se in input c'è un multiplo di 5 esce 'buzz'?", () => {
        expect(fizzbuzz(20)).toBe("buzz");
    });

    it("se in input c'è un multiplo di 15 esce 'fizzbuzz'?", () => {
        expect(fizzbuzz(30)).toBe("fizzbuzz");
    });

    it("se l' input non è multiplo di niente restituisce il numero?", () => {
        expect(fizzbuzz(8)).toBe(8);
    });

})
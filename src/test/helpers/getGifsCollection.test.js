import { getCollection } from "../../helpers/getGifsCollection"

describe('pruebas en <getGifsCollection/>', () => {
    
    test('debe de traer 5 elementos ', async() => {
        
        const gifs = await getCollection("goku");

        expect(gifs.length).toBe(5);

    })

    test('si no se envia una categoria ', async() => {
        
        const gifs = await getCollection("");
       

        expect(gifs.length).toBe(0);

    })
    
})

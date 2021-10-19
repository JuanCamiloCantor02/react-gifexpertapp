import {useFetchGifs} from '../../hooks/useFetchGifs'
import {renderHook} from '@testing-library/react-hooks'

describe('pruebas  en el hook useFetchGifs', () => {
    
    test('debe retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs("Dragon ball z"));
        const {data, loading} = result.current;

        await waitForNextUpdate();

        /* const {data, loading} = useFetchGifs("Dragon ball z"); */
        
        expect(data).toEqual([]);
        expect(loading).toBeTruthy();

    });

    test('debe de retonar un arreglo de imagenes y el loading en false', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs("Dragon ball z"));

        await waitForNextUpdate();
        const {data, loading} = result.current;

        
        expect(data.length).toEqual(5);
        expect(loading).toBe(false);


    })
    
    

})

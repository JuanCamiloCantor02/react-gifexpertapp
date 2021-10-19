import React from 'react'
import {shallow} from "enzyme";
import { GifExpertApp } from '../GifExpertApp';


describe('pruebas en <GifExpertApp/>', () => {
    
    test('debe mostrarse correctamente ', () => {
        
        const wrapper = shallow(<GifExpertApp/>);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar una lista de categorias', () => {
        
        const categories = ["Batman", "Goku"]
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifCollection").length).toBe(categories.length);

    })
    

})

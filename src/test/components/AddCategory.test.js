import React from 'react'
import {shallow} from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en <AddCategory/>', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);
    });
    
    test('debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    /* test('evaluar cambios en el imput ', () => {
        
        const input = wrapper.find("input");
        const value = "Hola mundo";

        input.simulate("change", {target:{value}});

        expect(wrapper.find("p").text().trim()).toBe(value);

    }); */

    test('NO debe de postear la informacion con submit', () => {
        
        wrapper.find("form").simulate("submit", {preventDefault: () =>{}});

        expect(setCategories).not.toHaveBeenCalled();

    });

    test('debe llamar el setCategories y limpiar la caja de texto ', () => {
    
        const value = "Hola mundo";

        //1.simular el input
        wrapper.find("input").simulate("change", {target:{value}});

        //2.simular el submit
        wrapper.find("form").simulate("submit", {preventDefault: () =>{}});

        //3.setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();

        //4.el valor del input debe de estar ""
        expect(wrapper.find("input").prop("value")).toBe("");

    })
    
    
    
    

})

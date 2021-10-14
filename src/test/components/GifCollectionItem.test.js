import React from 'react'
import {shallow} from "enzyme";
import { GifCollectionItem } from '../../components/GifCollectionItem';

describe('Preubas en <GifCollectionItem/>', () => {

    const title = "Hola amigos"
    const url = "https://localhost/amigo.jpg"
    
    const wrapper = shallow(<GifCollectionItem title={title} url={url}/>)

    test('Debe mostrar el componente correctamente ', () => {
        

        expect(wrapper).toMatchSnapshot();
    })

    test('debe de tener un parrafo con el title', () => {
        
        const p = wrapper.find("p");
        expect(p.text().trim()).toBe(title);

    })

    test('debe tener la imagen  igual al url y alt de los props ', () => {
        
        const img = wrapper.find("img");
        expect(img.prop("src")).toBe(url);
        expect(img.prop("alt")).toBe(title);
        

    })

    test('debe tener animate__backInUp', () => {
        const div = wrapper.find("div");
        const className = div.prop("className");
        

        expect(className.includes("animate__backInUp")).toBe(true);

    })
    
    
    
    
})

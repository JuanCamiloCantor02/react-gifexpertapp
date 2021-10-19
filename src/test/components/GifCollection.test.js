import React from "react"
import "@testing-library/jest-dom";
import { GifCollection } from "../../components/GifCollection";
import {shallow} from "enzyme";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock("../../hooks/useFetchGifs")

describe('pruebas en <GifCollection/>', () => {
    
    const category = "goku"
    
    test('debe mostrarse correctamente ', () => {
        
        useFetchGifs.mockReturnValue({
            data : [],
            loading : true
        });
        
        const wrapper = shallow(<GifCollection category= {category} />);
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        
        const gifs = [{
            id: "ABC",
            url: "https://123456/456564.jpg",
            title: "COSA"
        },
        {
            id: "cde",
            url: "https://dsadsadsa/dsadasdas.jpg",
            title: "Lechona"
        },
        {
            id: "fgj",
            url: "https://456das5644das/dsa54d64as5465.jpg",
            title: "Pan"
        }]

        useFetchGifs.mockReturnValue({
            data : gifs,
            loading : false
        });
        
        const wrapper = shallow(<GifCollection category= {category} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("p").exists()).toBe(false);
        expect(wrapper.find("GifCollectionItem").length).toBe(gifs.length);

    })
    
    

})

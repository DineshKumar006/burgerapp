import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navitems from './Navitems';
import Navitem1 from './NavItem1/Navitem1';


configure({adapter:new Adapter()})
    let wrapper=null;
    beforeEach(()=>{
        wrapper=shallow(<Navitems/>)
    })

describe("testing <NavigationItem/>",()=>{
    it("Testing the 2 <Navitems/> If it not Authenticate",()=>{
        expect(wrapper.find(Navitem1)).toHaveLength(2)
    })

    it("Testing the 3 <Navitems/> If it Authenticate",()=>{
        wrapper.setProps({isAuth:true ,isshowtotalorder:true})
        expect(wrapper.find(Navitem1)).toHaveLength(3)
    })

    it("Testing the 1 specific <Navitems/> If it Authenticate",()=>{
        wrapper.setProps({isAuth:true})
        expect(wrapper.contains( <Navitem1  Link={"/logout"}>Logout</Navitem1>)).toEqual(true)
    })


})
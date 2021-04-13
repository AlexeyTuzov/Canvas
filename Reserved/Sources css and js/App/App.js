import { CreateGridElement } from '../Utilites';
import { store } from '../store.js';
import './App.module.css';
import {Menu, Footer} from '../classes';

let HeaderContent = store.getState().State4Header.map(item => item.value);

let ContentContent = store.getState().State4Content.map(item => item.value);

let FooterContent = new Footer('Footer', store.getState().State4Footer).getDiv(); 
let SidebarContent = new Menu('Menu', store.getState().DemoInfo).getDiv();


let AppSource = [
    CreateGridElement(HeaderContent, 'Header'),
    CreateGridElement(SidebarContent, 'Sidebar'),
    CreateGridElement(ContentContent, 'Content'),
    CreateGridElement(FooterContent, 'Footer')
];


export let App = AppSource.join('');


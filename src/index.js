import './styles.css';
import './saas/add.scss';
import fetchCountries from './js/fetchCountries';
import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');
let searchText;

const refs = {
    searchInput: document.querySelector('.form__input'),
    divContent: document.querySelector('.divcontent')
};

//Submit INPUT TEXT every 500ms

refs.searchInput.addEventListener('keydown', debounce((event) => {
    event.preventDefault();
    searchText = event.target.value;
    //
    fetchCountries(searchText);

    //

}, 500)
)


import "../styles.css";
import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import * as Confirm from "@pnotify/confirm";
import "@pnotify/confirm/dist/PNotifyConfirm.css";
import oneCountry from '../template/oneCountry.hbs';
import TenCountries from '../template/TenCountries.hbs';
export default markupFn;


const htmlRef = document.querySelector('.divcontent')

function markupFn(resArr) {
    let lenngthArrResult = resArr.length;
    htmlRef.innerHTML = '';
    if (lenngthArrResult == 1) {
        const templOne = oneCountry(resArr);
        htmlRef.insertAdjacentHTML('beforeend', templOne);

    } else if (lenngthArrResult > 1 && lenngthArrResult < 11) {
        let resultTen = tenItemArrFn(resArr);
        const templTen = TenCountries(resultTen);
        htmlRef.insertAdjacentHTML('beforeend', templTen);

    } else if (lenngthArrResult > 10) {
        notifError();
    }
};

function tenItemArrFn(arr) {
   return arr.slice(0,10)
};

function notifError() {
    error({
        title: "Too many matches found!",
        text: "Please enter a more specific query!",
        delay: 750,
    });
};
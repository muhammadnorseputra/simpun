import { atom } from "recoil";
export const openState = atom({
    key: 'openStateModal', // unique ID (with respect to other atoms/selectors)
    default: false, // truedefault value (aka initial value)
});
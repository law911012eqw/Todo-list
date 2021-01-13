'use strict'

//This file consist of custom function that mainly create or manage DOM-related stuff a.k.a helpers
class manage {
    static createPara(txt, eId) {
        const el = document.createElement('p');
        eId !== '' ? this.elementAddId(eId, el) : undefined;
        el.textContent = txt;
        return el;
    }
    static createInput(_type, eId, eClassName, placeholder, required, l) {
        const input = document.createElement('input');
        input.id = eId;
        input.placeholder = placeholder;
        input.className = eClassName;
        input.required = required;
        input.maxLength = l;
        eId !== '' ? this.elementAddId(eId, input) : undefined;
        eClassName !== '' ? input.className = eClassName : undefined;
        return input;
    }
    static createTextarea(eClassName, cols, rows, disabled, value){
        const textarea = document.createElement('textarea');
        textarea.className = eClassName;
        textarea.cols = cols;
        textarea.rows = rows;
        textarea.disabled = disabled;
        textarea.value = value;
        eClassName !== '' ? textarea.className = eClassName : undefined;
        return textarea;
    }
    static createDate(value, min){
        const date = document.createElement('input');
        date.type = "date";
        date.value = value;
        date.min = min;
        return date;
    }
    static createLabel(forVal, text){
        const label = document.createElement('label');
        label.setAttribute("for",forVal);
        label.textContent = text;
        return label;
    }
    static createSelect(eId){
        const select = document.createElement('select');
        select.id = eId;
        return select;
    }
    static createSelectOption(value,text){
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        return option;
    }
    static createSubmit(text){
        const input = document.createElement('input');
        input.type = 'submit';
        input.value = text;
        return input;
    }
    static createChecklist(eClassName, checked){
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.checked = checked;
        input.ClassName = eClassName;
        return input;
    }

    static elWithClasses(txt = '', eId, eClassName, eTag) {
        const el = document.createElement(eTag);
        el.textContent = txt;
        el.className = eClassName;
        eId !== '' ? this.elementAddId(eId, el) : undefined;
        eClassName !== '' ? el.className = eClassName : undefined;
        return el;
    }
    static elementAddId(id, name) {
        name.id = id;
    }
    static modifyAttr(name, _type, attr) {
        name.setAttribute(_type, attr);
    }
}

export { manage }
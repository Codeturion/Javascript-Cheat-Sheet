// Get rid of long if and else switch cases.
// Good for refactoring.

// Example prodecural coding
/*
// These are render methods,we want to render and HTMLElement(base class)
// Elements are TextBox,Select and Checkbox

switch(){
    case 'select': renderSelect();
    case 'text': renderTextBox();
    case 'checkbox': renderCheckBox();
    case ....
    case ....
    case ...
}

// Instead of using this we can have render() method for all HTMLElement
// and render method behave differently based on object.
// Textbox.render(); or Select.render();

*/
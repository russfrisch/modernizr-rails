//=require modernizr-base
// input features and input types go directly onto the ret object, bypassing the tests loop.
// Hold this guy to execute in a moment.
function webforms() {
    /*>>input*/
    // Run through HTML5's new input attributes to see if the UA understands any.
    // We're using f which is the <input> element created early on
    // Mike Taylr has created a comprehensive resource for testing these attributes
    //   when applied to all input types:
    //   miketaylr.com/code/input-type-attr.html
    // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

    // Only input placeholder is tested while textarea's placeholder is not.
    // Currently Safari 4 and Opera 11 have support only for the input placeholder
    // Both tests are available in feature-detects/forms-placeholder.js
    Modernizr['input'] = (function( props ) {
        for ( var i = 0, len = props.length; i < len; i++ ) {
            attrs[ props[i] ] = !!(props[i] in inputElem);
        }
        if (attrs.list){
          // safari false positive's on datalist: webk.it/74252
          // see also github.com/Modernizr/Modernizr/issues/146
          attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
        }
        return attrs;
    })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
    /*>>input*/

    /*>>inputtypes*/
    // Run through HTML5's new input types to see if the UA understands any.
    //   This is put behind the tests runloop because it doesn't return a
    //   true/false like all the other tests; instead, it returns an object
    //   containing each input type with its corresponding true/false value

    // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
    Modernizr['inputtypes'] = (function(props) {

        for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

            inputElem.setAttribute('type', inputElemType = props[i]);
            bool = inputElem.type !== 'text';

            // We first check to see if the type we give it sticks..
            // If the type does, we feed it a textual value, which shouldn't be valid.
            // If the value doesn't stick, we know there's input sanitization which infers a custom UI
            if ( bool ) {

                inputElem.value         = smile;
                inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                  docElement.appendChild(inputElem);
                  defaultView = document.defaultView;

                  // Safari 2-4 allows the smiley as a value, despite making a slider
                  bool =  defaultView.getComputedStyle &&
                          defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                          // Mobile android web browser has false positive, so must
                          // check the height to see if the widget is actually there.
                          (inputElem.offsetHeight !== 0);

                  docElement.removeChild(inputElem);

                } else if ( /^(search|tel)$/.test(inputElemType) ){
                  // Spec doesn't define any special parsing or detectable UI
                  //   behaviors so we pass these through as true

                  // Interestingly, opera fails the earlier test, so it doesn't
                  //  even make it here.

                } else if ( /^(url|email)$/.test(inputElemType) ) {
                  // Real url and email support comes with prebaked validation.
                  bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                } else {
                  // If the upgraded input compontent rejects the :) text, we got a winner
                  bool = inputElem.value != smile;
                }
            }

            inputs[ props[i] ] = !!bool;
        }
        return inputs;
    })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
    /*>>inputtypes*/
}

/**
 * 
 * @employSchema
 * @eventListeners
 * @sensibleDefaults
 * @svgSrc
 * @documentation
 * @iconUniformNames
 * @documentationApi
 * @minimizeProperties
 * @objectifyEventListeners
 * @parentElementSelector
 * @distinctEventListeners
 * @propertiesElemUnderscore
 * @propertify
 * @propertyNamingConventions
 * @methodNamingConventions
 */




/**
 * 
 * @param {Object}                   schema
 * @param {HTMLElement|CSSRule}      schema.parent
 * @param {HTMLSourceElement}       [schema.title]
 * @param {HTMLSourceElement}       [schema.h1]
 * @param {HTMLSourceElement}       [schema.text]
 * @param {HTMLSourceElement}       [schema.h2]
 */
var Explainer = function( schema ) {

    /**
     * 
     * @property
     * @private
     */
    this._titleElem = null;

    /**
     * 
     * @property
     * @private
     */
    this._textElem = null;




    var parentElem;

    if ( typeof schema.parent === 'object' ) {

        parentElem = schema.parent;

    } else if ( typeof schema.parent === 'string' ) {

        parentElem = document.querySelector( schema.parent );

    }

    var fragment = document.createDocumentFragment();

    if ( schema.hasOwnProperty( 'title' ) ) {

        var head2 = document.createElement( 'DIV' );
        head2.classList.add( 'title' );
        fragment.appendChild( head2 );

        this._titleElem = document.createElement( 'H3' );
        this._titleElem.innerHTML = schema.title;
        head2.appendChild( this._titleElem );

    }

    if ( schema.hasOwnProperty( 'h1' ) ) {

        var head2 = document.createElement( 'DIV' );
        head2.classList.add( 'title' );
        fragment.appendChild( head2 );

        this._titleElem = document.createElement( 'H1' );
        this._titleElem.innerHTML = schema.h1;
        head2.appendChild( this._titleElem );

    }

    if ( schema.hasOwnProperty( 'text' ) ) {

        var explain = document.createElement( 'DIV' );
        explain.classList.add( 'text' );
        fragment.appendChild( explain );

        this._textElem = document.createElement( 'P' );
        this._textElem.innerHTML = schema.text;
        explain.appendChild( this._textElem );

    }

    if ( schema.hasOwnProperty( 'h2' ) ) {

        var explain = document.createElement( 'DIV' );
        explain.classList.add( 'text' );
        fragment.appendChild( explain );

        this._textElem = document.createElement( 'H2' );
        this._textElem.innerHTML = schema.h2;
        explain.appendChild( this._textElem );

    }

    parentElem.appendChild( fragment );

};

/**
 * 
 * @param {String} title 
 */
Explainer.prototype.setTitle = function( title ) {

    this._titleElem.innerHTML = title;

};

/**
 * 
 * @param {String} text 
 */
Explainer.prototype.setText = function( text ) {

    this._textElem.innerHTML = text;

};
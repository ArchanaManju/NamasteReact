
/*Break down of how Html elements are created using React and rendered to the DOM
in Index.html we have 
    <div id="root">
        <h1>Loading...</h1>
    </div>

    loading will be reaplced by this file contet when we run the app
    beacuse we are doing root.render(parent);

    but we are rendring anything above div root in index.html that will not be repalced only the one with id="root" will be repalced.
    so if want somthing else to be arndedr not the root from index.html we have to create that in this file and render it here
    in app.js while redreing we need to changes 
    
const rootElement = document.getElementById("root");
instead of root give that id for which you need to be renderd from app.js
* 
we can just inject react in any existing application and use it for some part of the application
<div id ="parent">
    <div id="child">
    <h1>Hello World From React H1!</h1>
    <h2>Hello World From React H2!</h2>
    </div>
   </div>
* The above is reatctElement is creating an object which is then converted to HTML by ReactDOM and rendered to the DOM
when there are 2 childer we passed them as an array 

as the number of child increase this will look messey so we will use JSx to do this in a cleaner way

react.createElement() => object => HTML (using ReactDOM) => DOM
*/

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"},
   [ React.createElement("div", {id:"child1", key:"child1"},  // Added key here
       [React.createElement("h1", {key:"h1-1"}, "Hello World From React H1!"),  // Added keys
        React.createElement("h2", {key:"h2-1"}, "Hello World From React H2!")
       ]
    ),
    React.createElement("div", {id:"child2", key:"child2"},  // Added key here
       [React.createElement("h1", {key:"h1-2"}, "Hello World From React H1!"),  // Added keys
        React.createElement("h2", {key:"h2-2"}, "Hello World From React H2!")
       ]
    )
   ]
);



// now we will use JSX to make it cleaner
// JSX => React.createElement() => Object => HTML (using ReactDOM) => DOM
// jsx is diffrent from React they are not same
// jsx is a syntactic sugar over react
// jsx is not html inside javascript , it looks like html but it is not html
// jsx is a way to write react code in a html like syntax
// jsx makes it easier to write and understand react code
// jsx is not understoond by the browser so we need to convert it to normal js using babel
// babel is a js compiler which converts jsx to normal js
// babel is used by parcel under the hood so we dont need to install it seprately

const jsxParent = (
 <h1 className="heading" id="heading">Namsate react Using Jsx</h1>
)

// jsx is not understand by browser we need to convert it to normal js [ES6]using babel
// we need to install babel and preset for react
// npm install @babel/core @babel/preset-react --save-dev
// bable is java script compiler which converts jsx to normal js
// bable even helps to convert es6 to es5 to support older browsers

// Jsx => React.createElement()(babel is doing this coverting jsx to react element) => Object => HTML (using ReactDOM) => DOM


// React Component
// A react component is a function which returns a react element
// A react component is a function which returns jsx
// A react component is a function which returns html
// 2 types of components
// 1. Functional Component -- we will be using functional component as it is the new way of writing react code
// 2. Class Component -- we will not be using class component as it is old way of writing react code

// Functional Component -- it is a function which returns jsx
// Functional Component name should start with capital letter
// Functional Component should return only one parent element


const TitleComponent = () => <h1>This is a Title functional Component</h1> // if there is only one line of code we can write it like this

// the below is alled compoent composion using one compoent inside other 
const HeaderComponent = () => {
    return (
        <>
        <TitleComponent />
        <h2>This is a Header functional Component</h2>
        </>
    )
}
// we can use function as well instead of arrow function
const SubHeaderComponent = function() {
    return <>
    <HeaderComponent/>
    <h3>This is a SubHeader functional Component</h3>
    </> 
}
// using curly barnce inside compoent we can write any js code
const name = "Archana"
const year = 25 +35
const location = "Bangalore"
const AnotherComponent = () => {
    return (
        <div> 
            <SubHeaderComponent/>  
            {name }  {/* this is called expression */}
            <h4>{year}</h4>
            <h4>{location}</h4>
            <h4></h4>
            </div>
            )
        }


// Functional Component => Jsx => React.createElement()(babel is doing this coverting jsx to react element) => Object => HTML (using ReactDOM) => DOM

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
   // root.render(parent); // for react.createElement
  //  root.render(jsxParent); // for jsx
    root.render(<AnotherComponent/>); // for functional component
} else {
    console.error('Root element not found');
}
useeffect --> if no dependicy array , useeffcet is called on evrytime componenet rendered .
if there is empty dependecy array, rendered on intail render of the compoenet.even if the compoenet re render the useffcet is not called 
if we have something inside the dependecy array , usefffect is called everytime the dependent is cahnged the useeffct is called .

Usestate --> never create outside the compoenet .it is used to crate local state variable for that compoenet so it has to be inside that componenet .
do create inside the if else or condation or loop or function -- this will cause inconsistency 
on higher level as first compoenet 


~~~~~~~~~~~~~~ Npm java script libaray react route Dom ~~~~~~~~~~~
carteing aboutus page ===> Header componenet

when ever we create route we create routing configuration in main App.js file 
import { createBrowserRouter } from "react-router-dom";

configuartion 
const appRouter = createBrowserRouter([
    {  
        path:'/',
        element:<AppLayout /> 
    },
{
    path:'/about',
    element:<About/>
},

])

when we create this config , i need to provide this to config to render .
for that we will use RouterProvide from react-router-dom

before we were rendering applayout directly 
root.render(<AppLayout />);
now we need to provide this to Routerprovider 
root.render(<Routerprovide router={appRoute} />);
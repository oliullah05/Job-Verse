import React from 'react';

const Blog = () => {
    return (
        <section className='container mx-auto m-5'>
           <div>
           <h1 className='text-3xl py-4 font-bold'>When should you use context API?</h1>
            <p>Context API is a very powerful tool in React applications .It is mainly used for managing global state in react . We know , react can't pass any data on his parent component . It's a react very weakness in react .But now , context api make this problem very easily . Its like a tower . When you have multiple components that need access to the same data or functionality then context API allows to create a context object that can be accessed by all his child component .  That means we can easily share data or functions across components without having to manually pass them down as props.</p>
           </div>
           <div>
           <h1 className='text-3xl py-4 font-bold'> What is useRef?</h1>
            <p>useRef is a React hook that used for store and manipulate mutable data within a functional component . useRef only returns one item. It returns an Object called current. USeRef can access a DOM element directly. And thats how we can use vanila javascrict code and do anything with pure JS code in react . useRef create a mutable variable which is not re-render the components. if we do not use dependency arrey in useEffect than it will render infinity . But using useRef we can stop infinity loop and fixed this problem.</p>
           </div>
           <div>
           <h1 className='text-3xl py-4 font-bold'>What is useMemo?</h1>
            <p>useMemo is a react in-build hook . UseMemo hook takes two arguments one is a function and other one is return a value, and an array of dependencies. It used to increase the performance of our react application. it prevent unnecessary re-computations of expensive functions. if we run a complex calculation that depends on some props or state,then we can use useMemo to store the result of that calculation and only recalculate it when the inputs change . And thats how useRef bost our react application performance.</p>
           </div>
           <div>
           <h1 className='text-3xl py-4 font-bold'> What is a custom hook?</h1>
            <p>In react application we use many hook like as useState ,useREf ,useEffect etc . But we can also create our own personal hook in react. Thats called custom hook . custom hook always start by "use" word like other react hooks .Custom hook used to implement a specific feature or behavior that can be shared across multiple components in a React application.  Custom hooks should only contain logic related to a specific feature or behavior. To make custom hook we can solve very complex problem in our site . But  custom hook should be  unique and does not conflict with any existing hooks or functions in your application. </p>
           </div>
        </section>
    );
};

export default Blog;
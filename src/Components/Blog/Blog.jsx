import React from 'react';

const Blog = () => {
    return (
        <section className='container mx-auto m-5'>
           <div>
           <h1 className='text-3xl py-4 font-bold'>When should you use context API?</h1>
            <p>Context API is a very powerful tool in React applications .It is mainly used for managing global state in react . We know , react can't pass any data on his parent component . It's a react very weakness in react .But now , context api make this problem very easily . Its like a tower . When you have multiple components that need access to the same data or functionality then context API allows to create a context object that can be accessed by all his child component .  That means we can easily share data or functions across components without having to manually pass them down as props.</p>
           </div>
           <div>
           <h1 className='text-3xl py-4 font-bold'>What is a custom hook?</h1>
            <p>useRef is a React hook that used for  store and manipulate mutable data within a functional component .It can be used to access a DOM element directly.</p>
           </div>
        </section>
    );
};

export default Blog;
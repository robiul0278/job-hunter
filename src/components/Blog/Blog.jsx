import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <div className="detailsArea grid grid-cols-12">
          <div className=" col-span-3 bottom-0 left-0">
            <img className="w-80" src="Image/Vector.png" alt="" />
          </div>
          <div className=" col-span-6 flex justify-center items-center">
            <h1 className="text-center font-bold">Question Answer</h1>
          </div>
          <div className=" col-span-3 absolute top-0 right-0">
            <img src="Image/Vector-1.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="border mt-5">
          <h1 className="text-center p-3 text-2xl border-b-2 font-bold">
            Question Answer
          </h1>
          <div className="p-4 grid md:grid-cols-2 gap-4 ">
            <div>
              <h4 className="font-bold">Question: When should you use context API?</h4>
              <p>
                Answer:You should use the Context API in React when you want to pass data from a parent component to multiple levels of nested child components without having to pass props down manually through every level. This can simplify your code and make it more efficient.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Question: What is a custom hook?</h4>
              <p>
                Answer: A custom hook is a function in React that you can create to reuse code logic between different components. It allows you to extract common logic from components into a separate function so that it can be easily shared and reused.
              </p>
            </div>
            <div>
              <h4 className="font-bold">
                Question: What is useRef?
              </h4>
              <p>
                Answer:useRef is a hook in React that allows you to create a mutable reference that persists between renders. It returns an object with a current property that you can use to store and access mutable values without triggering a re-render. This can be useful for storing and manipulating DOM elements, managing timers or intervals, or caching values that don't require a re-render.
              </p>
            </div>
            <div>
              <h4 className="font-bold">Question: What is useMemo?</h4>
              <p>
                Answer: useMemo is a hook in React that helps improve performance by caching the result of a function and returning it only when its dependencies change. It's useful when you have a function that takes a long time to compute and you don't want to recalculate it every time your component re-renders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

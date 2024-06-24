'use client'
import { useState } from 'react';

const tasks = [
  {
    id: 1,
    title: 'Styling Elements (20 min)-Finished',
    instructions: `
      - Center the title by selecting the h1 tag.
      - Select the image and make it smaller.
      - Turn all the paragraphs orange by selecting the p tag.
      - Add margin to the webpage in the body tag.
      - Add padding to the sections by selecting the section tag.
      
      Link to Replit Project (also found on the top of this codespace): https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    image: '/css.png'
  },
  {
    id: 2,
    title: 'Using IDs (15 min)-Due this Wednesday',
    instructions: `
      - Give an id to the title (h1 tag). <h1 id="main-title">Basketball</h1>
      - Select the h1 using the id in CSS. the # selects an html element by the id
      #main-title {
        text-align: center;
      }
      - Give an id to one of the section headers, e.g., "How to play basketball."
      - Select that header using the id and add a border. To add a border do
      border-style:solid
      border-color:red
      -Repeat with the other headers
      -Give inline style to any of the elements. so inside the html tag put style="ADD-CSS-HERE"


      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    image: '/ids.png'
  },
  {
    id: 3,
    title: 'Creating Labels (10 min)',
    instructions: `
      - Make labels for each of the inputs instead of using h3 tags.
      - give the input an id
      - use the for attribute in the label and set it to the input id, to connect them
      - now when you click on the label, the input also registers
      -feel free to add extra styling
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    image: 'labels.png'
  },
  {
    id: 4,
    title: 'Using Classes',
    instructions: `
      - Classes are like id's but they group elements together, so less spcefic
      - Give the 2 inputs at the bottom each a class called "color-input"
      -Classes you can have the same name for multiple elements, but id is unique to that one element
      - select the .color-input classes using the . to mean class. 
      - So .color-input selects the input by their classes
      -give each a background color of blue or any RGB
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    image: 'class.png'
  },
  {
    id: 5,
    title: 'Creating a Button (10 min)',
    instructions: `
      - Create a button at the bottom of the website that says "Submit."
      - Add an onclick attribute that calls a JavaScript function named userSubmit().

      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    image: 'button.png'
  },
  {
    id: 6,
    title: 'JavaScript Function (5 min)',
    instructions: `
      - Go to script.js and create a function called userSubmit().
      - Inside the function, alert the user that they submitted.

      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#script.js
    `,
    image: 'function.png'
  },
  {
    id: 7,
    title: 'Using IDs for Inputs (5 min)',
    instructions: `
      - Give an id to the first input with the label that asks what you want the title of the website to be.

      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    image: 'codesnippet6.png'
  },
];

function Home() {
  const [selectedTask, setSelectedTask] = useState<number | null>(null);

  const selectedTaskDetails = tasks.find((task) => task.id === selectedTask);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md p-4 mb-4">
        <h1 className="text-2xl font-bold text-center text-black">CodeSpace</h1>
        <p className="text-center mt-2 text-black">
          Website: <a href="https://replit.com/@Jibran2010/HTML-CSS-JS#style.css" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Replit Project</a>
        </p>
      </header>
      <section className="bg-white shadow-md p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Tasks</h2>
        <ul className="space-y-2">
          {tasks.map((task,index) => (
            <li
              key={task.id}
              onClick={() => setSelectedTask(task.id)}
              className="p-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 transition text-black"
            >
              Task {index+1}: {task.title}
            </li>
          ))}
        </ul>
        {selectedTaskDetails && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md text-black">
            <h3 className="text-lg font-semibold">
              Instructions for {selectedTaskDetails.title}
            </h3>
            <ul className="mt-2 space-y-2">
              {selectedTaskDetails.instructions.split('\n').map((instruction, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span>{instruction}</span>
                </li>
              ))}
            </ul>
            <img src={selectedTaskDetails.image} alt="Code Snippet" className="mt-4 w-full max-w-sm mx-auto" />
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;

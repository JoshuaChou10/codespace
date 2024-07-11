'use client'
import { useState } from 'react';

const tasks = [
 
  {
    "id": 1,
    "title": "Basic HTML Tags (20 min)",
    "instructions": `
      - Add a paragraph below the title:
        <p>This is a paragraph.</p>
      - Add an unordered list with three items:
        <ul>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ul>
      - Add a link to an external website:
        <a href="https://www.example.com">Visit Example</a>
      - Add an image (use a placeholder image link if you don't have one):
        <img src="https://via.placeholder.com/150" alt="Placeholder Image">
      
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#index.html
    `,
    "image": "/tags.png"
  },
  {
    "id": 2,
    "title": "Styling Elements (20 min)",
    "instructions": `
      - Center the title (h1).
      - Resize the image.
      - Make all paragraphs (p) orange.
      - Add margin to the body.
      - Add padding to sections (section).
      
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    "image": "/css.png"
  },
  {
    "id": 3,
    "title": "Using IDs (15 min)",
    "instructions": `
      - Give an id to the title (h1). Example: <h1 id="main-title">Basketball</h1>
      - Select the h1 using the id in CSS. Example:
        #main-title {
          text-align: center;
        }
      - Give an id to section headers.
      - Select each header using its id and add a border. Example:
        #section-id {
          border: 1px solid red;
        }
      - Add inline styles to any element. Example: <h1 style="color: blue;">Title</h1>
  
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    "image": "/ids.png"
  },
  {
    "id": 4,
    "title": "Creating Labels (10 min)",
    "instructions": `
      - Replace h3 tags with labels for each input.
      - Give each input an id.
      - Use the for attribute in labels to link them to inputs. Example:
        <label for="input-id">Label</label>
        <input id="input-id" type="text">
      - Add extra styling if desired.
  
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    "image": "labels.png"
  },
  {
    "id": 5,
    "title": "Using Classes",
    "instructions": `
      - Classes group elements together.
      - Give the 2 bottom inputs the class "color-input".
      - Note: Multiple elements can share the same class, but ids are unique.
      - Select the classes in CSS using .color-input.
      - Set a background color for each input. Example:
        .color-input {
          background-color: blue;
        }
  
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    "image": "class.png"
  },
  {
    "id": 6,
    "title": "Creating a Navbar",
    "instructions": `
      - Navbars help users navigate your website.
      - Define a navbar with <nav></nav>.
      - Inside, create an unordered list <ul></ul>.
      - Add list items <li></li> for each section. Example: <li>Home</li>
      - Use anchor tags to link sections. Example:
        <a href="#home">Home</a>
  
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    "image": "class.png"
  },
  {
    "id": 7,
    "title": "Creating a Button (5 min)",
    "instructions": `
      - Create a "Submit" button in HTML.
      - Add an onclick attribute to call a JavaScript function named userSubmit(). Example:
        <button onclick="userSubmit()">Submit</button>
  
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#style.css
    `,
    "image": "button.png"
  },
  {
    "id": 8,
    "title": "JavaScript Function (5 min)",
    "instructions": `
      - In script.js, create a function named userSubmit().
      - Inside the function, add an alert to notify the user of their submission. Example:
        function userSubmit() {
          alert('You submitted!');
        }
  
      Link to Replit Project: https://replit.com/@Jibran2010/HTML-CSS-JS#script.js
    `,
    "image": "function.png"
  }
  ,
  {
    "id": 9,
    "title": 'Final Project',
    "instructions": `
      Over here you are going to create a website on any topic you want
      Here are the criteria
      - Have a title that is centered
      -Have website sections
      -Use at least 3 id's and select them in CSS and make each styling for each id unique
      -Use at least 1 class, and multiple elements must have this same class. Select in CSS and give each element in the class styling (you only need 1 selector in CSS)
      -Make a Javscript quiz, so you need HTML inputs and the document.getElementById() function. 
      -Alternatively you could use javascript to make the website for interactive, so allow the user to change the color of the website, or the text etc...
      -Below I have attatched an example website you could make

    `,
    image: 'final.png'
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

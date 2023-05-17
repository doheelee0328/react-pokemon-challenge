# react-pokemon-challenge

## Pokedex App
This project was developed as part of a challenge at La Fosse Academy. The challenge was to build a simple React app that allows users to enter a Pokemon name. 

## Components
The app consists of two main components:

Form Component: This is responsible for rendering the form where users can enter a Pokemon name. It manages the state of the entered Pokemon name using the useState hook. When the form is submitted, it triggers the handleSubmit function, which sets the submitted Pokemon name using the setSubmittedText function passed as a prop.

Pokedex Component: This is responsible for displaying the fetched Pokemon data. It receives the pokemonData, loading, and error props from the App component. It handles the conditional rendering based on the provided props. 

Pokecard Component: This is a child component of the Pokedex component. It receives the Pokemon data as props and renders the specific details of the Pokemon, such as its name, image, height, and weight.

## Features

The Pokedex component renders a specific number of Pokecard components for each Pokemon in the Pokedex.
Each Pokecard component displays information about a Pokemon, including its name, image, and type.

## Usage

- Enter a Pokemon name in the input field.
- Click the "Search" button.
- While the data is being fetched, a loading message will be displayed.
- Once the Pokemon data is fetched, it will be displayed on the screen.
- If no Pokemon data has been fetched yet, a message saying "No pokemon yet, please submit a pokemon!" will be shown.

## To run the Pokedex App locally, follow these steps:

- Clone the repository 
- Install dependencies: "npm install"
- Start the development server: "npm run dev"
- Open your web browser and visit http://localhost:5173/ to view the app.


## Final Look
<img width="1166" alt="Screenshot 2023-05-17 at 01 33 17" src="https://github.com/doheelee0328/react-pokemon-challenge/assets/112406576/ccbde217-cbfc-459c-af4b-676be3e0eadb">
<img width="930" alt="Screenshot 2023-05-17 at 01 33 32" src="https://github.com/doheelee0328/react-pokemon-challenge/assets/112406576/d219f28c-0b29-4daf-9d4e-08b60bc30eac">




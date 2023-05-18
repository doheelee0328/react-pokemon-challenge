# react-pokemon-challenge

## Pokedex App
This project was developed as part of a challenge at La Fosse Academy. The challenge was to build a simple React app that allows users to enter a Pokemon name. 

<img width="1054" alt="Screenshot 2023-05-18 at 15 06 28" src="https://github.com/doheelee0328/react-pokemon-challenge/assets/112406576/14d48bb2-1976-498d-8c68-293d03a67c7a">
<img width="881" alt="Screenshot 2023-05-18 at 15 06 39" src="https://github.com/doheelee0328/react-pokemon-challenge/assets/112406576/93e29907-ef9a-4bc6-85c9-e1b649d315c6">
<img width="1039" alt="Screenshot 2023-05-18 at 15 18 21" src="https://github.com/doheelee0328/react-pokemon-challenge/assets/112406576/3c505449-d2b9-4c5d-a8f3-1f0699debf4a">


## Components
The app consists of three main components:

Form Component: This is responsible for rendering the form where users can enter a Pokemon name. It manages the state of the entered Pokemon name using the useState hook. When the form is submitted, it triggers the handleSubmit function, which sets the submitted Pokemon name using the setSubmittedText function passed as a prop.

Pokedex Component: This is responsible for displaying the fetched Pokemon data. It receives the pokemonData, loading, and error props from the App component. It handles the conditional rendering based on the provided props. 

Pokecard Component: This is a child component of the Pokedex component. It receives the Pokemon data as props and renders the specific details of the Pokemon, such as its name, image, height, and weight.

## Features

- Enter a Pokemon name and fetch its data
- Display the Pokemon data as soon as it arrives
- Show a loading screen while fetching the data
- Display a message when no Pokemon data has been fetched yet
- If the entered name does not match any Pokémon, an error message will be displayed

## Usage

- Enter a Pokemon name in the input field.
- Click the "Search" button.
- While the data is being fetched, a loading message will be displayed.
- Once the Pokemon data is fetched, it will be displayed on the screen.
- If no Pokemon data has been fetched yet, a message saying "No pokemon yet, please submit a pokemon!" will be shown.
- If you type the Pokemon name that does not exits, a message saying "An error occurred while fetching Pokemon data" will be shown

## To run the Pokedex App locally, follow these steps:

- Clone the repository 
- Install dependencies: "npm install"
- Start the development server: "npm run dev"
- Open your web browser and visit http://localhost:5173/ to view the app.









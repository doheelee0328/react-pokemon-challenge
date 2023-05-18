# react-pokemon-challenge

## Pokedex App
This project was developed as part of a challenge at La Fosse Academy. The challenge was to build a simple React app that allows users to enter a Pokemon name. 

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


## Final Look

<img width="645" alt="Screenshot 2023-05-17 at 17 57 13" src="https://github.com/doheelee0328/react-pokemon-challenge/assets/112406576/e456f635-23a8-4167-8d54-f5f93d2c5c85">
<img width="743" alt="Screenshot 2023-05-17 at 17 57 31" src="https://github.com/doheelee0328/react-pokemon-challenge/assets/112406576/43822a9d-6c3c-4189-adc2-524e11bbece9">
<img width="721" alt="Screenshot 2023-05-18 at 11 31 33" src="https://github.com/doheelee0328/react-pokemon-challenge/assets/112406576/cb060caf-387a-429b-8a90-91b24acfd97f">






# Flower Bouquet Customizer App

## App Overview
The Flower Bouquet Customizer App allows users to create unique flower bouquets by selecting from a palette of colors. The app randomizes the types of flowers based on the selected colors and show a picture of that flower. Users can save their created bouquets to their history and favorites. (stretch)In th future, this app could help users find nearby grocery stores that sell similar bouquets.

## User Stories
1. **Palette Customization:** As a user, I want to select at least 3 and up to 7 colors to customize my unique flower bouquet.
2. **Flower Randomization:** As a user, I want the app to randomly generate flower types based on my selected colors.
3. **Find Bouquets:** As a user, I want to find pictures of flowers that matches with that generated bouquets with mock datas (Postgres Database).
4. **Save Bouquets:** As a user, I want to save my created bouquets to history and favorites for future reference.

Stretch goal (after implementing #3):  **Find Nearby Stores:** As a user, I want to find nearby grocery stores that sell similar flower bouquets.

## Screenshots
### Day 1 



## Features
- **Color Palette Picker:** Choose between 3 to 7 colors for your bouquet.
- **Random Flower Generation:** Randomly generates flower types based on selected colors.
- **Save Bouquets:** Save your created bouquets to history and favorites.
- **Dark and Light Modes:** Supports both dark and light themes.
- **High Fidelity Styling:** Ensures good contrast, right-sized tap targets, and an intuitive user interface.
- **Stretch: Nearby Stores:** Fetches and displays nearby grocery stores that sell similar bouquets using geolocation.


## How to Use
1. **Open the App:** Scan the provided QR code to open the app on your device.
2. **Select Colors:** Use the color picker to select between 3 to 7 colors for your bouquet.
3. **Generate Bouquet:** View the randomly generated bouquet based on your selected colors.
4. **Save Bouquet:** Save your favorite bouquets to history and favorites for future reference.
5. **Stretch: Find Stores:** Allow the app to access your location to find nearby grocery stores selling similar bouquets.

## Technologies Used
- **React Native:** For building the mobile app.
- **Expo:** For development environment and QR code generation.
- **Styled-Components:** For CSS-in-JS styling.
- **Axios:** For making API requests.
- **API db:** For fetching flower pictures from DB.
- **AsyncStorage:** For saving and retrieving bouquets locally.
- **React Native Color Picker:** For color selection.

## UML Diagram
![alt text](img/UML.png)

## Setup Instructions
1. **Clone the repository:**
   ```bash
   git clone https://github.com/QILINXIE02/Flower-app
   cd Flower-app

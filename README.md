🌦️ Weather App

A simple and responsive **Weather App** built using **HTML, CSS, and JavaScript** that allows users to check real-time weather information for any city. The application fetches live weather data from the **OpenWeatherMap API** and displays details such as temperature, weather condition, humidity, and wind speed in a clean and modern user interface.

The project also features a smooth animated gradient background and glassmorphism-inspired design to create an attractive user experience.


🚀 Features

* 🔍 Search weather by city name
* 🌡️ Displays real-time temperature
* ☁️ Shows weather condition/description
* 💧 Humidity information
* 🌬️ Wind speed details
* 🎨 Animated gradient background
* ✨ Smooth fade-in animations
* 📱 Responsive and simple UI

  

🛠️ Technologies Used

* **HTML** – Structure of the application
* **CSS** – Styling, animations, and responsive design
* **JavaScript (ES6)** – Fetching and displaying weather data
* **OpenWeatherMap API** – Real-time weather data



📂 Project Structure

```bash
Weather-App/
│
├── index.html      # Main HTML file
├── style.css       # Styling and animations
├── script.js       # Weather API functionality
└── README.md       # Project documentation
```


⚙️ How It Works

1. User enters a city name.
2. JavaScript sends a request to the OpenWeatherMap API.
3. API returns weather data in JSON format.
4. The app displays:

   * City Name
   * Temperature
   * Weather Description
   * Humidity
   * Wind Speed

If the city name is invalid, the app shows a **"City not found"** message.



🔑 API Setup

This project uses the **OpenWeatherMap API**.

### Steps to Use Your API Key

1. Create an account at
   [OpenWeatherMap](https://openweathermap.org/api?utm_source=chatgpt.com)

2. Generate your API key.

3. Replace the API key in `script.js`:

```javascript
const apiKey = "YOUR_API_KEY";
```


▶️ Run the Project

1. Download or clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
```

2. Open the project folder

3. Run `index.html` in your browser



🎨 UI Highlights

* Animated gradient background using CSS keyframes
* Glassmorphism weather card design
* Hover button animation
* Smooth fade-in effects for weather data



📸 Preview

The app provides a modern and minimal interface where users can quickly search and view live weather updates with animated visual effects.



📌 Future Improvements

* Add weather icons
* Show 5-day forecast
* Detect user location automatically
* Add dark/light mode
* Improve error handling



👨‍💻 Author

Developed using basic front-end technologies for learning and practice purposes.

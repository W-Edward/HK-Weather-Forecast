## HK-Weather-Forecast
A 7-day Hong Kong real-time weather forecast web application based on pure JavaScript. I used the bare minimum of HTML/Pug for this project as I was learning how to create dynamically-loaded pages with Javascript. It also features a responsive web design, able to adapt to mobile screen sizes!

# Instructions to use:
1. Make sure that you have set up your Node.js environment. If you have not, you can download the latest version from the official Node.js website (https://nodejs.org). Once installed, you can open your terminal and verify the installation by typing `node -v`
2. Go to the directory in which all the cloned files are located, and type in `node app.js` in your terminal. If you've done so, you should get a console response in the form of `Server is running on port XXXX` where XXXX is your port number.
3. Open up your favourite web browser (Chrome, MS Edge, Firefox, etc.), and paste `http://localhost:3000/`, replace `3000` with whatever was your port number displayed in your terminal.
4. Shown below is the current real-time weather report of Hong Kong, detailing the current temperature, humidity, UV level, rainfall index, your current location's air quality (please allow location access) and the 9-day forecast of Hong Kong, provided by HKO.
![image](https://github.com/W-Edward/HK-Weather-Forecast/assets/36920869/c09090aa-8f6e-4c93-8077-451ad765e416)
5. You have the choice of selecting a different weather station in Hong Kong to check a certain region's current information (temperature, rainfall and air quality)
   ![image](https://github.com/W-Edward/HK-Weather-Forecast/assets/36920869/860f467f-e9fc-45ea-b204-d0d4ecd6aeb5)

# Extra Features:
- This web application also provides a "mobile" design as shown below. You can test this web app on a "mobile device screen size" to get the same results below.
  ![image](https://github.com/W-Edward/HK-Weather-Forecast/assets/36920869/5da2bb42-d8fb-44cf-b3b6-bc3700470299)
- Different Background images are used for different weathers (raining, sunny) and times (day, noon, night). Any warnings from HKO will also be displayed (typhoons, amber rainstorms, etc.).
   ![image](https://github.com/W-Edward/HK-Weather-Forecast/assets/36920869/c858f124-ec3e-4563-a598-2875eabacb6b)


# All data is based on:

# The HKO Current Weather Report
Website: https://data.gov.hk/en-data/dataset/hk-hko-rss-current-weather-report \
API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en \
Documentation: https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf

# The HKO 9-day Weather Forecast
Website: https://data.gov.hk/en-data/dataset/hk-hko-rss-9-day-weather-forecast \
API: https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en \
Documentation: https://data.weather.gov.hk/weatherAPI/doc/HKO_Open_Data_API_Documentation.pdf

# Hong Kong Weather Station Information (Static)
API: https://ogciopsi.blob.core.windows.net/dataset/weather-station/weather-station-info.json \
Documentation: https://ogciopsi.blob.core.windows.net/dataset/weather-station/weather-station-citydashboard-dataspec.pdf

# OGCIO Air Quality Health Index of Individual Air Quality Monitoring Stations (Updated Hourly)
API: https://dashboard.data.gov.hk/api/aqhi-individual?format=json

# Air Quality Monitoring Station Information
Provides the latitude and longitude coordinates of all AQHI general stations and roadside stations.
The dataset is prepared by Dr. Anthony Tam using the information provided by the Environmental Protection Department.
API: aqhi-station-info.json

The Reverse Geocoding API is provided by the Nominatim search engine for OpenStreetMap.
Website: https://nominatim.org/release-docs/develop/api/Reverse/ \
API: `https://nominatim.openstreetmap.org/reverse?format=json&lat=<value>&lon=<value>&zoom=18&addressdetails=1` Replace `<value>` with corresponding latitude and longitude.

Note: This project is part of an assignment assigned by Dr. Anthony Tam for the course COMP3322 of The University of Hong Kong. Implementation and design is by yours truly :)

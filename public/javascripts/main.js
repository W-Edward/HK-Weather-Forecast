//Name: Widjaja Edward Aryaguna , UID: 3036029703
//Note: Please extract the uploaded images.zip and data.zip into the current directory.

function blockOneClicked() 
{
    
    if (document.getElementById("block-one").style.height === "200px")
    {
        document.getElementById("block-one").style.height = "65px";
        document.getElementById("temperature-label").style.display = "none";
        document.getElementById("temperature-options").style.display = "none";
        document.getElementById("temperature-output").style.display = "none";
    }
    else
    {
        document.getElementById("block-one").style.height = "200px";
        document.getElementById("temperature-label").style.display = "inline";
        document.getElementById("temperature-options").style.display = "inline-block";
        document.getElementById("temperature-output").style.display = "block";
    }
    
    document.getElementById("block-two").style.height = "65px";
    document.getElementById("rainfall-label").style.display = "none";
    document.getElementById("rainfall-options").style.display = "none";
    document.getElementById("rain-output").style.display = "none";

    document.getElementById("block-three").style.height = "65px";
    document.getElementById("air-quality-label").style.display = "none";
    document.getElementById("AQ-options").style.display = "none";
    document.getElementById("aqhi-output-1").style.display = "none";
    document.getElementById("aqhi-output-2").style.display = "none";
}

function blockTwoClicked() 
{
    if (document.getElementById("block-two").style.height === "200px")
    {
        document.getElementById("block-two").style.height = "65px";
        document.getElementById("rainfall-label").style.display = "none";
        document.getElementById("rainfall-options").style.display = "none";
        document.getElementById("rain-output").style.display = "none";
    }
    else
    {
        document.getElementById("block-two").style.height = "200px";
        document.getElementById("rainfall-label").style.display = "inline";
        document.getElementById("rainfall-options").style.display = "inline-block";
        document.getElementById("rain-output").style.display = "block";
    }

    document.getElementById("block-one").style.height = "65px";
    document.getElementById("temperature-label").style.display = "none";
    document.getElementById("temperature-options").style.display = "none";
    document.getElementById("temperature-output").style.display = "none";

    document.getElementById("block-three").style.height = "65px";
    document.getElementById("air-quality-label").style.display = "none";
    document.getElementById("AQ-options").style.display = "none";
    document.getElementById("aqhi-output-1").style.display = "none";
    document.getElementById("aqhi-output-2").style.display = "none";
}

function blockThreeClicked() 
{
    if (document.getElementById("block-three").style.height === "200px")
    {
        document.getElementById("block-three").style.height = "65px";
        document.getElementById("air-quality-label").style.display = "none";
        document.getElementById("AQ-options").style.display = "none";
        document.getElementById("aqhi-output-1").style.display = "none";
        document.getElementById("aqhi-output-2").style.display = "none";
    }
    else
    {
        document.getElementById("block-three").style.height = "200px";
        document.getElementById("air-quality-label").style.display = "inline";
        document.getElementById("AQ-options").style.display = "inline-block";
        document.getElementById("aqhi-output-1").style.display = "block";
        document.getElementById("aqhi-output-2").style.display = "block";
    }
    
    document.getElementById("block-two").style.height = "65px";
    document.getElementById("rainfall-label").style.display = "none";
    document.getElementById("rainfall-options").style.display = "none";
    document.getElementById("rain-output").style.display = "none";

    document.getElementById("block-one").style.height = "65px";
    document.getElementById("temperature-label").style.display = "none";
    document.getElementById("temperature-options").style.display = "none";
    document.getElementById("temperature-output").style.display = "none";
}

window.addEventListener('resize', function()
{
    console.log(screen.width)
    if (screen.width <= 500)
    {
        document.getElementById("block-one").style.height = "65px";
        document.getElementById("block-two").style.height = "65px";
        document.getElementById("block-three").style.height = "65px";

        document.getElementById("temperature-label").style.display = "none";
        document.getElementById("temperature-options").style.display = "none";
        document.getElementById("temperature-output").style.display = "none";

        document.getElementById("rainfall-label").style.display = "none";
        document.getElementById("rainfall-options").style.display = "none";
        document.getElementById("rain-output").style.display = "none";

        document.getElementById("air-quality-label").style.display = "none";
        document.getElementById("AQ-options").style.display = "none";
        document.getElementById("aqhi-output-1").style.display = "none";
        document.getElementById("aqhi-output-2").style.display = "none";
        
        document.getElementById("temp-id").addEventListener('click', blockOneClicked);
        document.getElementById("rain-id").addEventListener('click', blockTwoClicked);
        document.getElementById("air-id").addEventListener('click', blockThreeClicked);

        console.log("Should have resized small")
    }

    if (screen.width > 500)
    {
        document.getElementById("block-one").style.height = "200px";
        document.getElementById("block-two").style.height = "200px";
        document.getElementById("block-three").style.height = "200px";

        document.getElementById("temperature-label").style.display = "inline";
        document.getElementById("temperature-options").style.display = "inline-block";
        document.getElementById("temperature-output").style.display = "block";

        document.getElementById("rainfall-label").style.display = "inline";
        document.getElementById("rainfall-options").style.display = "inline-block";
        document.getElementById("rain-output").style.display = "block";

        document.getElementById("air-quality-label").style.display = "inline";
        document.getElementById("AQ-options").style.display = "inline-block";
        document.getElementById("aqhi-output-1").style.display = "block";
        document.getElementById("aqhi-output-2").style.display = "block";
        
        document.getElementById("temp-id").removeEventListener('click', blockOneClicked);
        document.getElementById("rain-id").removeEventListener('click', blockTwoClicked);
        document.getElementById("air-id").removeEventListener('click', blockThreeClicked);
    }
});

// `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en`
fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en`)
.then( response => 
{
    response.json().then( WR =>
    { 
        let title = document.createElement("h1");
        title.id = "title";
        title.innerHTML = `My Weather Portal`;
        document.body.appendChild(title);

        let header = document.createElement("header");
        document.querySelector('body').appendChild(header);

        let currentWeatherIcon = WR.icon[0];
        let currentTemperature = WR.temperature.data[1].value;
        let currentHumidity = WR.humidity.data[0].value;
        let currentRainfall = WR.rainfall.data[13].max;
        let currentUVIndex = "";
        let currentWarning = "";

        if (WR.uvindex)
        {
            currentUVIndex = WR.uvindex.data[0].value;
        }
        if (WR.warningMessage)
        {
            currentWarning = WR.warningMessage; //an array
        }
        let lastUpdate = WR.updateTime.substr(11,5);
        let districtTemperatures = WR.temperature.data;
        //Also get temperature of each district from districtTemperatures

        //Header block
        let output = "";
        output += `
        <h2 id="hong-kong">Hong Kong</h2></br>
        <div id="header-content">
        <div id="basic-info">
        <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${currentWeatherIcon}.png" width="100" height="100" id="weathericon">
        <span>${currentTemperature}°C</span>
        </div>

        <div class="div-header-info">
        <span class="main-info" id="header-humidity-number">${currentHumidity}</span>
        <span>%</span>
        <img src="images/drop-64.png" width="20" height="20" id="header-hum">
        
        </div>

        <div class="div-header-info">
        <span class="main-info">${currentRainfall}</span>
        </span id="unit" >mm</span>
        <img src="images/rain-48.png" width="20" height="20" id="header-rain">
        </div>
        `;
        

        if (currentUVIndex)
        {
            output += `
            <div class="div-header-info">
            <span class="main-info" id="UV-index">${currentUVIndex}</span>
            <img src="images/UVindex-48.png" width="20" height="20" id="header-uv">
            </div>
            `;
        }

        output += `</div>`
        
        output += `
        <bttn id="warning">Warning</bttn>
        <span id="last-update">Last Update: ${lastUpdate}</span>
        `;

        header.innerHTML = output;
        let bttn = document.getElementById("warning");
        let lastUpdateTime = document.getElementById("last-update");

        if (!WR.warningMessage)
        {
            bttn.style.display = "none";
        }

        bttn.onmousedown = function() 
        {
            let text = "";
            for (let x in WR.warningMessage)
            {
                text += `${WR.warningMessage[x]} <br>`;
            }
            bttn.innerHTML = text;
            lastUpdateTime.style.display = "none";
            bttn.style.position = "relative";
            bttn.style.top = "-2rem";
        }

        bttn.onmouseup = function()
        {
            bttn.innerHTML = "Warning";
            lastUpdateTime.style.display = "inline";
            bttn.style.position = "static";
            bttn.style.top = "0";
        }

        //Header block Changes
        if (((parseInt(lastUpdate.substr(0,2)) >= 18) || (parseInt(lastUpdate.substr(0,2)) < 6)) && (currentRainfall == 0))
        {
            header.style.backgroundImage = "url(images/night-sky.jpg)";
            header.style.color = "white";
        }
        else if (((parseInt(lastUpdate.substr(0,2)) < 18) || (parseInt(lastUpdate.substr(0,2)) >= 6)) && (currentRainfall == 0))
        {
            header.style.backgroundImage = "url(images/blue-sky.jpg)";
        }
        else if (((parseInt(lastUpdate.substr(0,2)) >= 18) || (parseInt(lastUpdate.substr(0,2)) < 6)) && (currentRainfall > 0))
        {
            header.style.backgroundImage = "url(images/water-drops-glass-night.jpg)";
            header.style.color = "white";
        }
        else
        {
            header.style.backgroundImage = "url(images/water-drops-glass-day.jpg)";
        }

        
        //Geolocation API

        navigator.geolocation.getCurrentPosition(success);
        function success(position)
        {
            var myLongitude = position.coords.longitude;
            var myLatitude = position.coords.latitude;

        let locURL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${myLatitude}&lon=${myLongitude}&zoom=18&addressdetails=1`;
        var district = "";
        var suburb = "";

        fetch(locURL)
        .then( response => {
            response.json().then( data =>
                {
                    district = "Unknown";
                    suburb = "Unknown";

                    if (data.address.city_district)
                    {
                        district = data.address.city_district;
                    }
                    else
                    {
                        for (let x in data.address)
                        {
                            if ((data.address[x].includes('District')) || (data.address[x].includes('district'))) 
                            {
                                district = data.address[x];
                            }
                        }
                    }

                    if (data.address.suburb)
                    {
                        suburb = data.address.suburb;
                    }
                    else if (data.address.borough)
                    {
                        suburb = data.address.borough;
                    }
                    else if (data.address.town)
                    {
                        suburb = data.address.town;
                    }
                })      
        
        .then( () => 
        {
    
        let div = document.createElement("div");
        div.id = "my-data";
        document.body.appendChild(div);

        output = "";
        //UPDATE LATER TO MATCH USER LOCATION
        fetch(`data/weather-station-info.json`)
        .then( (response) =>
        { response.json().then((data) => {
        
        var minDistance = 10000;
        var closestStation = "";
        for (let x in data)
        {
            var lat = data[x].latitude;
            var lon = data[x].longitude;

            var distanceX = (lon-myLongitude) * Math.cos(((lat+myLatitude)*Math.PI/180)/2);
            var distanceY = (lat-myLatitude);
            var distance = Math.sqrt((distanceX*distanceX) + (distanceY*distanceY))*6371;

            if ((distance < minDistance) && (data[x].station_name_en != "Shek Kong")) //As requested by Dr. Tam
            {
                minDistance = distance;
                closestStation = data[x].station_name_en;
            }
        }
        console.log(`Closest Current Weather Station: ${closestStation}`)

        var currentLocTemperature = 0;
        var currentLocRainfall = 0;

        for (var x in WR.temperature.data)
        {
            if (WR.temperature.data[x].place == closestStation)
            {
                currentLocTemperature = WR.temperature.data[x].value;
            }
        }

        for (var x in WR.rainfall.data)
        {
            if (WR.rainfall.data[x].place == district)
            {
                currentLocRainfall = WR.rainfall.data[x].max;
            } 
        }

        //Special Case
        if (district == "Central and Western District")
        {
            currentLocRainfall = WR.rainfall.data[0].max;
        }

        //To be changed according to district and suburb
        output += `
        <h2 id="my-location">My Location</h2>
        <p id="location-info">${suburb}, ${district}</p></br> 

        <div id="my-data-block">
        <span class="my-data-info">${currentLocTemperature}</span>
        <span class="units">°C</span>

        <span class="my-data-info" id="my-rainfall">${currentLocRainfall}</span>
        </span class="units">mm</span>
        <img src="images/rain-48.png" width="20" height="20">`;
        
        //`data/aqhi-individual-Oct4.json`
        fetch(`https://dashboard.data.gov.hk/api/aqhi-individual?format=json`)
        .then( response => 
        {
            response.json().then( aqhi => 
            {
                //Must be able to find right index for my location

            fetch(`data/aqhi-station-info.json`)
            .then( response =>
            {
            response.json().then( aqhiStations => {

                var minimalDistance = 10000;
                var currentAQHIStationIndex;
                for (var x in aqhiStations)
                {
                
                    var lon = aqhiStations[x].lng;
                    var lat = aqhiStations[x].lat; 

                    var distanceX = (lon-myLongitude) * Math.cos(((lat+myLatitude)*Math.PI/180)/2);
                    var distanceY = (lat-myLatitude);
                    var distance = Math.sqrt((distanceX*distanceX) + (distanceY*distanceY))*6371;
                    
                    if (distance < minimalDistance)
                    {
                        minimalDistance = distance;
                        currentAQHIStationIndex = x;
                    }
                }

                console.log(`Closest AQHI Station: ${aqhi[currentAQHIStationIndex].station}`)

                let currentLocAQHI = aqhi[currentAQHIStationIndex].aqhi;
                let imgSrc = "";

                if (aqhi[currentAQHIStationIndex].health_risk == "Low")
                {
                    imgSrc = `"images/aqhi-low.png"`;
                }
                else if (aqhi[currentAQHIStationIndex].health_risk == "Moderate")
                {
                    imgSrc = `"images/aqhi-moderate.png"`;
                }
                else if (aqhi[currentAQHIStationIndex].health_risk == "High")
                {
                    imgSrc = `"images/aqhi-high.png"`;
                }
                else if (aqhi[currentAQHIStationIndex].health_risk == "Very High")
                {
                    imgSrc = `"images/aqhi-very_high.png"`;
                }
                else if (aqhi[currentAQHIStationIndex].health_risk == "Serious")
                {
                    imgSrc = `"images/aqhi-serious.png"`;
                }

                output +=`
                <img src=${imgSrc} width="50" height="50" id="my-aqhi-pic">
                <span id="my-aqhi">${currentLocAQHI}</span>
                <span id="my-aqhi-risk"> (${aqhi[currentAQHIStationIndex].health_risk})</span>
                </div>
                `;
                div.innerHTML = output;
                
                //Three Blocks
                let blockOne = document.createElement("div");
                blockOne.id = "block-one";
                let blockTwo = document.createElement("div");
                blockTwo.id = "block-two";
                let blockThree = document.createElement("div");
                blockThree.id = "block-three";

                document.body.appendChild(blockOne);
                document.body.appendChild(blockTwo);
                document.body.appendChild(blockThree);

                output = "";

                output += `
                <h2 class="two" id="temp-id">Temperatures</h2>

                <label for="temperature-options" class="labels" id="temperature-label">Select the location</label><br>
                <select name="temperature" id="temperature-options" class="options">
                    <<option value="11" selected>Chek Lap Kok</option>
                    <option value="10">Cheung Chau</option>
                    <option value="19">Happy Valley</option>
                    <option value="1">Hong Kong Observatory</option>
                    <option value="16">Hong Kong Park</option>
                    <option value="24">Kai Tak Runway Park</option>
                    <option value="0">King's Park</option>
                    <option value="18">Kowloon City</option>
                    <option value="22">Kwun Tong</option>
                    <option value="4">Lau Fau Shan</option>
                    <option value="9">Sai Kung</option>
                    <option value="6">Sha Tin</option>
                    <option value="23">Sham Shui Po</option>
                    <option value="17">Shau Kei Wan</option>
                    <option value="21">Stanley</option>
                    <option value="3">Ta Kwu Ling</option>
                    <option value="26">Tai Mei Tuk</option>
                    <option value="5">Tai Po</option>
                    <option value="8">Tseung Kwan O</option>
                    <option value="12">Tsing Yi</option>
                    <option value="14">Tsuen Wan Ho Koon</option>
                    <option value="15">Tsuen Wan Shing Mun Valley</option>
                    <option value="7">Tuen Mun</option>
                    <option value="2">Wong Chuk Hang</option>
                    <option value="20">Wong Tai Sin</option>
                    <option value="25">Yuen Long Park</option>
                </select>
                <div id="temperature-output" class="three-blocks-output"></div>
                `;

                blockOne.innerHTML = output;
                var temperatureOutput = document.getElementById("temperature-output");
                temperatureOutput.innerHTML = `${WR.temperature.data[11].value}°C`

                var tempSelector = document.getElementById("temperature-options");
                var lastTempSelection = 10;
                tempSelector.addEventListener('change', (evt) =>
                {
                    var selectedTemp = tempSelector.value;
                    
                    if (lastTempSelection != selectedTemp)
                    {
                        output = `${WR.temperature.data[selectedTemp].value}°C`;
                        lastTempSelection = selectedTemp;
                    }

                    temperatureOutput.innerHTML = output;
                })


                output = "";
                
                output+=`
                <h2 class="two" id="rain-id">Rainfall</h2>
                <label for="rainfall-options" class="labels" id="rainfall-label">Select the district</label><br>
                <select name="rainfall" id="rainfall-options" class="options">
                    <option value="0" selected>Central & Western District</option>
                    <option value="1" >Eastern District</option>
                    <option value="3" >Islands District</option>
                    <option value="15" >Kowloon City</option>
                    <option value="2" >Kwai Tsing</option>
                    <option value="17" >Kwun Tong</option>
                    <option value="4" >North District</option>
                    <option value="5" >Sai Kung</option>
                    <option value="6" >Sha Tin</option>
                    <option value="14" >Sham Shui Po</option>
                    <option value="7" >Southern District</option>
                    <option value="8" >Tai Po</option>
                    <option value="9" >Tsuen Wan</option>
                    <option value="10" >Tuen Mun</option>
                    <option value="11" >Wan Chai</option>
                    <option value="16" >Wong Tai Sin</option>
                    <option value="13" >Yau Tsim Mong</option>
                    <option value="12" >Yuen Long</option>
                </select>
                <div id="rain-output" class="three-blocks-output"></div>
                `;

                blockTwo.innerHTML = output;

                var rainOutput = document.getElementById("rain-output");
                rainOutput.innerHTML = `${WR.rainfall.data[0].max}<span id="rain-span">mm</span>`

                var rainSelector = document.getElementById("rainfall-options");
                var lastRainSelection = 0;
                rainSelector.addEventListener('change', (evt) =>
                {
                    var selectedRain = rainSelector.value;
                    
                    if (lastRainSelection != selectedRain)
                    {
                        output = `${WR.rainfall.data[selectedRain].max}<span id="rain-span">mm</span>`;
                        lastRainSelection = selectedRain;
                    }

                    rainOutput.innerHTML = output;
                })



                output = "";
                
                output +=`
                <h2 class="two" id="air-id">Air Quality</h2>
                <label for="AQ-options" class="labels" id="air-quality-label">Select the AQ Station</label><br>
                <select name="AQ" id="AQ-options" class="options">
                    <option value="15" selected>Causeway Bay</option>
                    <option value="16" >Central</option>
                    <option value="0" >Central/Western</option>
                    <option value="2" >Eastern</option>
                    <option value="5" >Kwai Chung</option>
                    <option value="3" >Kwun Tong</option>
                    <option value="17" >Mong Kok</option>
                    <option value="13" >North</option>
                    <option value="12" >Sha Tin</option>
                    <option value="4" >Sham Shui Po</option>
                    <option value="1" >Southern</option>
                    <option value="11" >Tai Po</option>
                    <option value="14" >Tap Mun</option>
                    <option value="7" >Tseung Kwan O</option>
                    <option value="6" >Tsuen Wan</option>
                    <option value="9" >Tuen Mun</option>
                    <option value="10" >Tung Chung</option>
                    <option value="8">Yuen Long</option>
                </select>  
                <div id="aqhi-output-1" class="three-blocks-output"></div>
                <div id="aqhi-output-2" class="three-blocks-output"></div>
                `;

                blockThree.innerHTML = output;

                var output1 = "";
                var output2 = "";

                var aqhiOutput1 = document.getElementById("aqhi-output-1");
                var aqhiOutput2 = document.getElementById("aqhi-output-2");
                aqhiOutput1.innerHTML = `Level: ${aqhi[15].aqhi}`;
                aqhiOutput2.innerHTML = `Risk: ${aqhi[15].health_risk}`;

                var aqhiSelector = document.getElementById("AQ-options");
                var lastAQHISelection = 15;
                aqhiSelector.addEventListener('change', (evt) =>
                {
                    var selectedAQHI = aqhiSelector.value;
                    
                    if (lastAQHISelection != selectedAQHI)
                    {
                        output1 = `Level: ${aqhi[selectedAQHI].aqhi}`;
                        output2 = `Risk: ${aqhi[selectedAQHI].health_risk}`;
                        lastAQHISelection = selectedAQHI;
                    }

                    aqhiOutput1.innerHTML = output1;
                    aqhiOutput2.innerHTML = output2;
                })


                if (screen.width <= 500)
                {
                    blockOne.style.height = "65px";
                    blockTwo.style.height = "65px";
                    blockThree.style.height = "65px";
                    
                    document.getElementById("temp-id").addEventListener('click', blockOneClicked);
                    document.getElementById("rain-id").addEventListener('click', blockTwoClicked);
                    document.getElementById("air-id").addEventListener('click', blockThreeClicked);
                }

            })
            .then( () => 
            {
                //9-day Weather forecast
                fetch(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en`)
                .then( response => 
                {
                    response.json().then(WF =>
                    {
                        //Configure indexes according to stations concerned.
                        let forecast = WF.weatherForecast;
                        let forecastIcon = [];
                        for (let i = 0; i < 9; i++)
                        {
                            forecastIcon[i] = WF.weatherForecast[i].ForecastIcon;
                        }
                        let forecastDate = [];
                        for (let i = 0; i < 9; i++)
                        {
                            forecastDate[i] = WF.weatherForecast[i].forecastDate.substr(6,2) + "/" + WF.weatherForecast[i].forecastDate.substr(4,2);
                            if (forecastDate[i][0] == "0")
                            {
                                forecastDate[i] = forecastDate[i].substr(1, 4);
                            }
                        }
                        let forecastWeek = [];
                        for (let i = 0; i < 9; i++)
                        {
                            forecastWeek[i] = WF.weatherForecast[i].week.substr(0, 3);
                        }
                        let forecastMinTemp = [];
                        for (let i = 0; i < 9; i++)
                        {
                            forecastMinTemp[i] = WF.weatherForecast[i].forecastMintemp.value;
                        }
                        let forecastMaxTemp = [];
                        for (let i = 0; i < 9; i++)
                        {
                            forecastMaxTemp[i] = WF.weatherForecast[i].forecastMaxtemp.value;
                        }
                        let forecastMinHum = [];
                        for (let i = 0; i < 9; i++)
                        {
                            forecastMinHum[i] = WF.weatherForecast[i].forecastMinrh.value;
                        }
                        let forecastMaxHum = [];
                        for (let i = 0; i < 9; i++)
                        {
                            forecastMaxHum[i] = WF.weatherForecast[i].forecastMaxrh.value;
                        }
                        let PSR = [];
                        for (let i = 0; i < 9; i++)
                        {
                            PSR[i] = `images/PSR${WF.weatherForecast[i].PSR.replace(/\s/g, "")}_50_light.png`;
                        }

                        
                        
                        let nineDay = document.createElement("div");
                        nineDay.id = "nine-day";
                        document.body.appendChild(nineDay);

                        let output = "";

                        output += `
                        <h2 id="nine-day-forecast">9-Day Forecast</h2>
                        <div id = forecast-data>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[0]} ${forecastDate[0]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[0]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[0]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[0]}-${forecastMaxTemp[0]} °C</div>
                                <div class="min-max">${forecastMinHum[0]}-${forecastMaxHum[0]} %</div>
                            </div>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[1]} ${forecastDate[1]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[1]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[1]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[1]}-${forecastMaxTemp[1]} °C</div>
                                <div class="min-max">${forecastMinHum[1]}-${forecastMaxHum[1]} %</div>
                            </div>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[2]} ${forecastDate[2]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[2]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[2]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[2]}-${forecastMaxTemp[2]} °C</div>
                                <div class="min-max">${forecastMinHum[2]}-${forecastMaxHum[2]} %</div>
                            </div>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[3]} ${forecastDate[3]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[3]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[3]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[3]}-${forecastMaxTemp[3]} °C</div>
                                <div class="min-max">${forecastMinHum[3]}-${forecastMaxHum[3]} %</div>
                            </div>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[4]} ${forecastDate[4]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[4]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[4]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[4]}-${forecastMaxTemp[4]} °C</div>
                                <div class="min-max">${forecastMinHum[4]}-${forecastMaxHum[4]} %</div>
                            </div>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[5]} ${forecastDate[5]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[5]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[5]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[5]}-${forecastMaxTemp[5]} °C</div>
                                <div class="min-max">${forecastMinHum[5]}-${forecastMaxHum[5]} %</div>
                            </div>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[6]} ${forecastDate[6]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[6]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[6]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[6]}-${forecastMaxTemp[6]} °C</div>
                                <div class="min-max">${forecastMinHum[6]}-${forecastMaxHum[6]} %</div>
                            </div>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[7]} ${forecastDate[7]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[7]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[7]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[7]}-${forecastMaxTemp[7]} °C</div>
                                <div class="min-max">${forecastMinHum[7]}-${forecastMaxHum[7]} %</div>
                            </div>
                            <div class="div-date">
                                <div class="forecast-week-date">${forecastWeek[8]} ${forecastDate[8]}</div>
                                <img src="https://www.hko.gov.hk/images/HKOWxIconOutline/pic${forecastIcon[8]}.png" width=40 height=40 class="forecast-image">
                                <br><img src="${PSR[8]}" width=40 height=40 class="PSR-image">
                                <div class="min-max">${forecastMinTemp[8]}-${forecastMaxTemp[8]} °C</div>
                                <div class="min-max">${forecastMinHum[8]}-${forecastMaxHum[8]} %</div>
                            </div>
                        </div>
                        
                        `;


                        nineDay.innerHTML = output;

                        
                    })
                })

            })
                })

            })
            })

            })


        })


        })
 
        })
        }  
    })
    
})

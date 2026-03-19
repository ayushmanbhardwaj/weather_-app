const apikey = "2e58c09eefe2e734312224c3e64886eb";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searcbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherimg = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiurl +city+ "&"+ `appid=${apikey}&units=metric`);
    var data = await response.json();
   
    console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if(data.weather[0].main == "Clouds"){
        weatherimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyhvDH8ZX1WvFjH4PJJ0vGC0Ev7dxeCkqMwA&s";
    }
    else if(data.weather[0].main == "Clear"){
    weatherimg.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxkA6wA_kNbKeWHm9zcmOZ4u7Ch3yxTnYCw&s";
    }
    else if(data.weather[0].main == "Rain"){
        weatherimg.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLdCcgrSZ48N9ywQbhOLX8VExT8LM8u4Yyow&s";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFgJ8HChRY4ZA4aAoVlWuTV5g0R0GIuaKmLQ&s";
    }
    else if(data.weather[0].main=="Mist"){
        weatherimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Rs9vEaMQydC2_jPRMHCEMM6AuMT85vxDIA&s";

    };

    document.querySelector(".weather").style.display = "block";

};  
searchbtn.addEventListener("click",function(){
    checkweather(searcbox.value);
});

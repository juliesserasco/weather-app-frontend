<script setup>
    import WeatherLogo from '@/assets/img/weather-icon-3.png';
</script>

<template>
    <div class="bg-background" id="bg-background">
        <div class="overlay" id="overlay">
            <header >
                <div class="container">
                    <div class="row justify-content-center pt-4 pb-1">
                        <div class="col-lg-12 text-center mx-auto my-auto">
                            <img :src="WeatherLogo" alt="WeatherLogo" class="weather-logo"/>
                            <h1 class="text-center app-name"><span class="weather-text">Weather</span> Checker</h1>
                        </div>
                        <div class="row city-selection-container">
                            <div class="row col-lg-6 col-md-7">
                                <div class="col-md-8 col-sm-8 col-12">
                                    <v-select :options="cities" class="city-select" v-model="city" taggable placeholder="Type or select city"></v-select>
                                </div>
                                <div class="col-md-4 col-sm-4 col-12 pull-right search-btn-container">
                                    <MaterialButton @click="getPlaceDetails" size="md" class="search-btn">
                                        Check
                                    </MaterialButton>
                                </div>
                            </div>
                        </div>
                        <div v-if="hasResult" class="row current-weather-container">
                            <div class="col-lg-2 col-md-4 col-sm-6 col-12 current-weather">
                                <img :src="currentWeatherIcon" alt="CurrentWeatherLogo"/>
                                <h2>{{ currentWeather.temperature }}&#176;C</h2>
                                <h6>{{ currentWeather.location }}</h6>
                            </div>
                        </div>
                        <div v-if="hasResult" class="row forecast-weather-container">
                            <div v-for = "datum in forecastWeather" class="col-md-2 forecast-weather">
                                <img :src="datum.icon" alt="ForecastWeatherLogo"/>
                                <h4>{{ datum.temp }}&#176;C</h4>
                                <span>{{ datum.time }}</span><br>
                                <span>{{ datum.date }}</span>
                            </div>
                        </div>
                        <div v-if="!hasResult" class="row no-result">
                            <h5>{{ errorMessage }}</h5>
                        </div>
                    </div>
                    
                </div>
            </header>

            <div>
                
            </div>
        </div>
    </div>
    
</template>

<script>
    import MaterialButton from "@/components/MaterialButton.vue";
    import MaterialInput from "@/components/MaterialInput.vue";
    import api from "@/static/config.json";
    import axios from "axios";
    import vSelect from "vue-select";
    import "vue-select/dist/vue-select.css";
     
    export default {
        components: {
            MaterialButton,
            MaterialInput,
            vSelect,
        },
        data() {
            return {
                hasResult: false,
                cities: ['Manila', 'Makati', 'Pasig', 'Mandaluyong', 'Pasay'],
                city: 'Manila',
                countryCode: '',
                currentWeather: {},
                currentWeatherIcon: '',
                forecastWeather: {},
                errorMessage: ''
            }
        },
        methods: {
            getWeather() {
                if (this.city == null) {
                    this.hasResult = false;
                    this.errorMessage = 'Please type or select a city.';
                    return;
                }

                let self = this;
                axios.get(api.DEV_API_URL+'/get-weather?city='+this.city+'&country_code='+this.countryCode)
                .then(function (response) {
                    console.log(response);
                    self.currentWeather = response.data.currentWeather
                    self.forecastWeather = response.data.forecastWeather.list
                    self.currentWeatherIcon = 'https://openweathermap.org/img/wn/'+response.data.currentWeather.icon+'@2x.png'
                    self.hasResult = true
                })
                .catch((error) => {
                    self.hasResult = false
                    self.errorMessage = 'No result. Please type or select a different city.'
                });
            },
            getPlaceDetails() {
                let self = this;
                var config = {
                    method: 'get',
                    url: 'https://api.geoapify.com/v1/geocode/search?text='+this.city+'&apiKey=bc5087800d274c39b246aed23117b93b',
                    headers: { }
                };
                axios(config)
                    .then(function (response) {
                        self.city = response.data.features[0].properties.city;
                        self.countryCode = response.data.features[0].properties.country_code;
                        self.getWeather();
                    })
                    .catch(function (error) {
                        console.log(error);
                });
            },
        },
        mounted() {
            this.getPlaceDetails();
        }
    }
</script>

<style scope>
    @media only screen and (min-width: 1200px){
        .forecast-weather-container.row {
            width: 60%;
        }
        h1.app-name {
            font-size: 4rem;
        }
    }
    @media only screen and (max-width: 1199px){
        .forecast-weather-container.row {
            width: 100%;
        }
    }
    @media only screen and (max-width: 768px) {
        .forecast-weather {
            margin-bottom: 20px;
        }
    }
    @media only screen and (min-width: 576px) {
        .weather-logo {
            margin-bottom: -60px;
        }
    }
    @media only screen and (max-width: 575px) {
        .search-btn {
            margin-top: 20px;
        }
        .weather-logo {
            margin-bottom: -10px;
        }
    }
    .bg-background{
        background-image: url('/src/assets/img/weather-app-3.jpg'); 
        background-repeat: no-repeat; 
        background-size: cover;
        width:100%;
        height:100%;
        display: block;
    }
    h1.app-name {
        color: white;
    }
    .city-selection-container, .current-weather-container {
        display: flex;
        justify-content: center;
    }
    .city-select {
        border: 1px solid white;
    }
    .search-btn {
        border: 1px solid white !important;
        border-radius: 2px !important;
        height: 38px !important;
        color: white !important;
    }
    .weather-logo {
        height: 120px;
    }
    .weather-text {
        color: darkseagreen;
    }
    .current-weather {
        text-align: center;
        background: rgba(0, 0, 0, 0.3);
        margin-top: 15px !important;
        border-radius: 15px;
        width: 60%;
        margin-top: 40px;
    }
    .current-weather img {
        width: 120px;
    }
    .current-weather h2, .current-weather h6 {
        color: white;
    }
    .forecast-weather-container.row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px !important;
        margin-bottom: 20px;
    }
    .forecast-weather {
        text-align: center;
        background: rgba(108, 122, 137, 0.4);
        color: white;
        border-radius: 15px;
        padding-bottom: 15px;
    }
    .forecast-weather h4 {
        color: darkslategray;
        background: darkgrey;
        margin-left: -10px;
        margin-right: -12px;
        padding: 10px 0;
    }
    .no-result {
        text-align: center;
    }
    .no-result h5 {
        color: white !important;
        font-weight: normal !important;
    }
    .search-btn {
        width: 100%;
        background: rgba(236, 236, 236, 0.3) !important;
    }
</style>
<style>
    .vs__selected, .vs__search, .vs__search::placeholder {
        color: white !important;
    }
    .vs__search::placeholder {
        opacity: 1;
    }
</style>
 
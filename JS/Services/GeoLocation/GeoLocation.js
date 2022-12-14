export default class Geolocation {
    constructor() {
        this.city = '';
        this.lat = null;
        this.lng = null
    }    

    async getCity(lat, lng) {
        let self = this;
        let url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=0505dc7641af4682bdc688a1e0674682`;

        try {
            let response = await fetch(url);
            let data = await response.json();
            self.city = data.results[0].components.city;
            console.log(self.city)
        } catch (err) {
            console.log(err);
        }
    }

    async getCoordinates() {
        navigator.geolocation.getCurrentPosition(position => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            console.log(this.lat, this.lng)
        });
        
        await this.getCity(this.lat, this.lng);
    }

    Localice() {
        this.getCoordinates()
    }

}
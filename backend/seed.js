const mongoose = require('mongoose');
const Car = require('./models/Car');

let cars=[
    {
        name:"Tempo Traveller",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecorentacar.com%2Ffleets%2Ftempo-traveller-on-rent%2F&psig=AOvVaw1kZKn_VoGFGgZiggXV4LPV&ust=1700459921295000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDOgIOxz4IDFQAAAAAdAAAAABAD",
        price:"7000",
        desc:" 20 Seater"
    },
    {
        name:"Tempo Traveller",
        img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ecorentacar.com%2Ffleets%2Ftempo-traveller-on-rent%2F&psig=AOvVaw1kZKn_VoGFGgZiggXV4LPV&ust=1700459921295000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDOgIOxz4IDFQAAAAAdAAAAABAD",
        price:"7000",
        desc:" 20 Seater"
    }

]

async function seedDB(){
    await Car.insertMany(cars);
    console.log("Cars Data Seeded");
}

module.exports = seedDB();
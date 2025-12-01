
// const registeredHomes = [];
const Home = require('../models/home')

exports.getAddHomes = (req , res, next) => {
    res.render('registerHome' , {Pagetitle: 'Add Your Home', currentPage: 'registerHome'});
}

exports.postAddHomes = (req , res, next) => {
    console.log("Home register successfully for : ",req.body);
    const {HouseName, price, location, rating, photoUrl} = req.body;
    const home = new Home(HouseName, price, location, rating, photoUrl);
    home.save();
    // registeredHomes.push(req.body);
    res.render('successfull' , {Pagetitle: 'Registration Successfull', currentPage: 'successfull'});
}

exports.getHomes = (req , res, next) => {
    const registeredHomes = Home.fetchAll(registeredHomes => res.render('home', { registeredHomes: registeredHomes , Pagetitle: 'Airbnb', currentPage: 'home' }));
}

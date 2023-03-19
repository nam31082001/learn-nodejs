const Course = require('../models/Course')
const {mutipleMongooseToObject}=require('../../util/mongoose')

class SiteController {
  // [get]/1
  index(req, res, next) {
    Course.find({})
      .then(courses =>{
        res.render('home',{courses:mutipleMongooseToObject(courses)})
      })
      .catch(error => next(error))
  }
  // [GET]/search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();

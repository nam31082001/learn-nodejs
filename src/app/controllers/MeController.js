const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
      .then(([courses, deleteCount]) => {
        res.render('me/stored_Courses', {
          courses: mutipleMongooseToObject(courses),deleteCount
        });
      })
      .catch(next)

  }
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then(courses => {
        res.render('me/trash_Courses', {
          courses: mutipleMongooseToObject(courses)
        });
      })
      .catch(next)
  }
}

module.exports = new MeController();

const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class coursesController {
    show(rep, res, next) {
        Course.findOne({ slug: rep.params.slug })
            .then((course) => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)
    }
    create(rep, res, next) {
        res.render('courses/create')
    }
    // [POST]
    store(rep, res, next) {
        const fromData = rep.body
        fromData.image = `https://img.youtube.com/vi/${rep.body.video}/sddefault.jpg`
        const course = new Course(fromData)
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {  })
    }
    edit(rep, res, next) {
        Course.findById(rep.params.id)
            .then(course => res.render('courses/edit',
                { course: mongooseToObject(course) }
            ))
            .catch(next)

    }
    // [update]
    update(rep, res, next){
        Course.updateOne({_id:rep.params.id},rep.body)
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(next)
    }

    // [delete]
    delete(rep, res, next){
        Course.delete({_id:rep.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
    restore(rep, res, next){
        Course.restore({_id:rep.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
    forceDelete(rep, res, next){
        Course.deleteOne({_id:rep.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }


}

module.exports = new coursesController();
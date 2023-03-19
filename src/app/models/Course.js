const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

mongoose.plugin(slug);

const Schema = mongoose.Schema
const Course = new Schema({
      name: { type: String, require: true },
      description: { type: String, },
      image: { type: String, },
      slug: { type: String, slug: 'name' },
      video: { type: String, require: true },
      createdAt: { type: Date, default: Date.now },
      updateAt: { type: Date, default: Date.now },
}, {
      timestamps: true
})

Course.plugin(mongooseDelete,{ overrideMethods: 'all',deletedAt : true })

module.exports = mongoose.model('Course', Course)
const Student = require('../models/student')

const controller = {
  findAll : async (req,res) => {
    try {
      let data = await Student.findAll()
      res.status(200).json(data)

    } catch (error) {
      res.status(500).json(error)
    }
  },
}

module.exports = (router) => {
  router.get('/', controller.findAll)
}

const express = require('express')
const router = express.Router()
const { getAllComplaints, getComplaint, createComplaint, deleteComplaint } = require('../controllers/complaints')
// const { roleAuthenticationMiddleware } = require('../middleware/roleAuthentication')

router.route('/').get(getAllComplaints).post(createComplaint)
router.route('/:id').get(getComplaint).delete(deleteComplaint)


module.exports = router
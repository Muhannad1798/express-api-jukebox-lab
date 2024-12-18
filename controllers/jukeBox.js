const JukeBox = require('../models/JukeBox.js')
const express = require('express')
const router = express.Router()

// Write your routes/controller functions here
router.post('/', async (req, res) => {
  try {
    const createJukeBox = await JukeBox.create(req.body)
    res.status(201).json(createJukeBox)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/:jukeBoxId', async (req, res) => {
  try {
    const foundJukeBox = await JukeBox.findById(req.params.jukeBoxId)
    if (!foundJukeBox) {
      res.status(404)
      throw new Error('JukeBox Not Found!')
    }
    res.status(200).json(foundJukeBox)
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message })
    } else {
      res.json(500).json({ error: error.message })
    }
  }
})

router.delete('/:jukeBoxId', async (req, res) => {
  try {
    const deleted = await JukeBox.findByIdAndDelete(req.params.jukeBoxId)
    res.status(200).json({
      message: `the JukeBox with the ID ${req.params.jukeBoxId} is deleted `
    })
  } catch (error) {
    res.json(500).json({ error: error.message })
  }
})

router.put('/jukeBoxId', async (req, res) => {
  try {
    const updateJukeBox = await JukeBox.findByIdAndUpdate(
      req.params.jukeBoxId,
      req.body,
      {
        new: true
      }
    )
    res.status(200).json({
      message: `the JukeBox with the ID ${req.params.jukeBoxId} is updated `
    })
  } catch (error) {
    res.json(500).json({ error: error.message })
  }
})
// Export the router at the bottom of the file
module.exports = router

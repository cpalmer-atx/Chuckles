const Data = require('../models/Data');

exports.getData = async (req, res) => {
  try {
    const jokes = await Data.find();
    const joke = await Data.aggregate([{ $sample: { size: 1 } }]);

    // Allow client access to server routes (resolves CORS error)
    // TODO: research deeper and refactor
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );

    return res.sendStatus(200).json({
      success: true,
      jokeCount: jokes.length,
      data: joke
    });

  } catch (error) {
    return res.sendStatus(500).json({
      success: false,
      error: 'Server error encountered while retrieving joke.'
    });
  }
}

exports.addData = async (req, res) => {
  try {
    const joke = await Data.create(req.body);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" );

    return res.sendStatus(201).json({
      success: true,
      data: joke
    });

  } catch (error) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.messages);
      res.sendStatus(400).json({
        success: false,
        error: messages
      });

    } else {
      return res.sendStatus(500).json({
        success: false,
        error: 'Server error encountered while adding new joke.'
      });
    }
  }
}

exports.deleteData = async (req, res) => {
  try {
    const joke = await Data.findById(req.params.id);

    if (!joke) {
      return res.sendStatus(404).json({
        success: true,
        error: `No joke with id ${req.params.id} found.`
      });
    }

    await joke.remove();
    return res.sendStatus(200).json({
      success: true,
      data: {}
    });

  } catch (error) {
    return res.sendStatus(500).json({
      success: false,
      error: 'Server error encountered while trying to delete joke.'
    });
  }
}
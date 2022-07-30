const Schedule = require("./../model/model.js");

const getPath = async (req, res) => {
  const { startPoint, endPoint } = req.query

  try {
    const result = await Schedule.findAll({ where: { startPoint: startPoint, endPoint: endPoint } });
    res.send(result)

  } catch (e) {
    console.log(e)
  }
}

module.exports = getPath;
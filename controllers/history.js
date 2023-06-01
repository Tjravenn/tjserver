const { History } = require("../models");

class Controller {
  static async showHistory(req, res, next) {
    try {
      const history = await History.findAll({ order: [["id", "DESC"]] });
      res.status(200).json({
        statusCode: 200,
        history,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

const { Company, History } = require("../models");

class Controller {
  static async allCompany(req, res, next) {
    try {
      const company = await Company.findAll({ order: [["id", "DESC"]] });

      res.status(200).json({
        statusCode: 200,
        company,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getCompanyById(req, res, next) {
    try {
      const { id } = req.params;
      const company = await Company.findByPk(id);

      if (!company) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json({
        statusCode: 200,
        company,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createCompany(req, res, next) {
    try {
      const username = req.user.email;
      const { name, companyLogo, location, email, description } = req.body;

      const company = await Company.create({
        name,
        companyLogo,
        location,
        email,
        description,
      });

      if (!company) throw { name: "Not found", msg: "Id not found" };

      await History.create({
        name: company.name,
        description: `New company with id ${company.id} success to create`,
        updatedBy: username,
      });

      res.status(201).json({
        statusCode: 201,
        msg: "Company success to create",
        company,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteCompany(req, res, next) {
    try {
      const { id } = req.params;
      const company = await Company.destroy({
        where: { id },
      });

      if (!company) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json({
        statusCode: 200,
        message: `Company with id ${id} success to delete`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

const { Job, User, Company, History } = require("../models");

class Controller {
  static async allJob(req, res, next) {
    try {
      const job = await Job.findAll({
        include: [
          { model: User, attributes: { exclude: ["password"] } },
          { model: Company },
        ],
        order: [["id", "DESC"]],
      });

      res.status(200).json({
        statusCode: 200,
        job,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getJobById(req, res, next) {
    try {
      const { id } = req.params;
      const job = await Job.findOne({
        where: { id },
        include: [
          { model: User, attributes: { exclude: ["password"] } },
          { model: Company },
        ],
      });

      if (!job) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json({
        statusCode: 200,
        job,
      });
    } catch (error) {
      next(error);
    }
  }

  static async createJob(req, res, next) {
    try {
      const { id } = req.user;
      const username = req.user.email;
      const { title, description, imgUrl, companyId, jobType } = req.body;
      const job = await Job.create({
        title,
        description,
        imgUrl,
        companyId,
        authorId: id,
        jobType,
      });

      if (!job) throw { name: "Not found", msg: "Id not found" };

      await History.create({
        name: job.title,
        description: `New job with id ${job.id} success to create`,
        updatedBy: username,
      });

      res.status(201).json({
        statusCode: 201,
        msg: "Job success to create",
        job,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteJob(req, res, next) {
    try {
      const { id } = req.params;
      const job = await Job.destroy({
        where: { id },
      });

      if (!job) throw { name: "Not found", msg: "Id not found" };

      res.status(200).json({
        statusCode: 200,
        msg: `Jobs with id ${id} success to delete`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async editJob(req, res, next) {
    try {
      const { id } = req.params;
      const username = req.user.email;
      const { title, description, imgUrl, companyId, jobType } = req.body;
      const job = await Job.findByPk(id);

      if (!job) throw { name: "Not found", msg: "Job not found" };

      await Job.update(
        {
          title,
          description,
          imgUrl,
          companyId,
          jobType,
        },
        {
          where: { id: id },
        }
      );

      await History.create({
        name: job.title,
        description: `Job with id ${job.id} has been updated`,
        updatedBy: username,
      });

      res.status(200).json({
        statusCode: 200,
        msg: "Job has been updated",
      });
    } catch (error) {
      next(error);
    }
  }

  static async statusJob(req, res, next) {
    try {
      const { id } = req.params; 
      const { status } = req.body;
      const username = req.user.email;
      const job = await Job.findByPk(id);

      if (!job) throw { name: "Not found", msg: "Job not found" };

      await Job.update({ status: status }, { where: { id } });

      await History.create({
        name: job.title,
        description: `Job with id ${job.id} has been updated from ${job.status} to ${status}`,
        updatedBy: username,
      });

      res.status(200).json({
        statusCode: 200,
        msg: "Job status has been updated",
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;

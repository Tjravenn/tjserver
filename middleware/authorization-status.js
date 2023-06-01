const authorizationStatus = async (req, res, next) => {
  try {
    const { role } = req.user;
    if (role === "Admin") {
      next();
    } else {
      throw { name: "Forbidden", msg: "You have no access" };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authorizationStatus;

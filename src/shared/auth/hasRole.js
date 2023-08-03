const { ForbiddenError } = require("../errors");
const hasRole = (req, res, next) => {
  if (!req.user.isSuper) {
    throw new ForbiddenError("You are not Super Admin");
  }

  next();
};
module.exports = hasRole;

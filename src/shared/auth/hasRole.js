const hasRole = (req, res, next) => {
    if (!req.user.isSuper) {
      return "You are not Super Admin";
    }

    next();
};
module.exports = hasRole;

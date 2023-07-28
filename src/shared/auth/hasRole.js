const hasRole = (req, res, next) => {
  try {
    if (!req.user.isSuper) {
      return { error: "You are not Super Admin" };
    }

    next();
  } catch (error) {
    next(error);
  }
};
module.exports = hasRole;

const hasRole = (req, res, next) => {
  try {
    if (req.user.isSuper) {
      next();
    }
    
    return { error: "You are not Super Admin" };
  } catch (error) {
    next(error);
  }
};
module.exports = hasRole;

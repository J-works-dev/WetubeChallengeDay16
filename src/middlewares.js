export const localsMiddleware = (req, res, next) => {
  res.locals.siteTitle = "Jworks Movies";
  next();
};

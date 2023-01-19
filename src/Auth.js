const exjwt = require("express-jwt");
const jwt = require("jsonwebtoken");
module.exports = {
  verifyJWTOptional: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token) {
      jwt.verify(token, "keyboard cat 4 ever", function (err, decoded) {
        if (err)
          return res
            .status(500)
            .json({ auth: false, message: "Failed to authenticate token." });

        // console.log(decoded)
        // se tudo estiver ok, salva no request para uso posterior
        req.userId = decoded._id;
      });
    }
    next();
  },
  verifyJWT: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ auth: false, message: "No token provided." });

    jwt.verify(token, "keyboard cat 4 ever", function (err, decoded) {
      if (err)
        return res
          .status(500)
          .json({ auth: false, message: "Failed to authenticate token." });

      // console.log(decoded)
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded._id;
      next();
    });
  },

  authorize: (roles = []) => {
    // roles param can be a single role string (e.g. Role.User or 'User')
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === "string") {
      roles = [roles];
    }

    return [
      // authenticate JWT token and attach user to request object (req.user)
      exjwt({ secret: "keyboard cat 4 ever", algorithms: ["HS256"] }),

      // authorize based on user role
      (req, res, next) => {
        // console.log(req.user.roles)
        // console.log({roles})

        // console.log(roles.some(r=> req.user.roles.includes(r)))
        if (roles.length && !roles.some((r) => req.user.roles.includes(r))) {
          // if (roles.length && !roles.includes(req.user.role)) {
          // user's role is not authorized
          return res.status(401).json({ message: "Unauthorized" });
        }

        // authentication and authorization successful
        next();
      },
    ];
  },
};

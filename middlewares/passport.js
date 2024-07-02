// const passport = require('passport');
// const path = require('path');
// const passportJwt = require('passport-jwt');
// const dotenv = require('dotenv');
// const jwt = require('jsonwebtoken');

// const { Strategy, ExtractJwt } = passportJwt;

// dotenv.config({ path: path.join(process.cwd(), '.env') });

// module.exports = app => {
//   const params = {
//     secretOrKey: process.env.JWT_PRIVATE_KEY,
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   };

//   const strategy = new Strategy(params, (payload, done) => {
//     if (payload.globalId) {
//       return app.db.Admin.UsuarioEmpresa.findOne({
//         where: { ueId: payload.globalId },
//       })
//         .then(usuario => {
//           if (usuario) {
//             done(null, { ...payload });
//           } else {
//             done(null, false);
//           }
//         })
//         .catch(err => done(err, false));
//     } else if (payload.origem === 'siteInpera') {
//       done(null, { ...payload });
//     } else {
//       return app.db.Admin.Cliente.findOne({
//         where: { idCliente: payload.id },
//       })
//         .then(cliente => {
//           if (cliente) {
//             done(null, { ...payload });
//           } else {
//             done(null, false);
//           }
//         })
//         .catch(err => done(err, false));
//     }
//   });

//   passport.use(strategy);

//   return {
//     initialize: () => passport.initialize(),
//     authenticate: () => passport.authenticate('jwt', { session: false }),
//   };
// };

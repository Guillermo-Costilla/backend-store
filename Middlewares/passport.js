import User from "../models/User.js";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";

export default passport.use(
  new Strategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET || "defaultSecret",
    },
    async (jwt_payload, done) => {
      try {
        const user = await User.findOne({ _id: jwt_payload.id }, "-password");

        if (user) {
          return done(null, user);
        }
        return done(null, false);
      } catch (error) {
        console.error("Error en la autenticación:", error);
        return done(error, false);
      }
    }
  )
);

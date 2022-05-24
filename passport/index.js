import passport from "passport";
import Account from "../models/Account.js";

// strategy 생성
passport.use(Account.createStrategy());

passport.serializeUser(Account.serializeUser()); //serialize란 세션에 무엇을 저장할 것인지를 선택
passport.deserializeUser(Account.deserializeUser()); //deserialize는 serialize를 통해 받은 유저의 id를 이용해 이용자를 식별

// passport.serializeUser(function (user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function (id, done) {
//   User.findById(id, function (err, user) {
//     done(err, user);
//   });
// });

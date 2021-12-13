import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import performance from "perf_hooks";
dotenv.config();
const auth = async (req, res, next) => {
  try {
    const t1 = performance.performance.now()
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, `${process.env.SECRET}`);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }
    const t2 = performance.performance.now()
    console.log("authentication took",t2-t1);
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;

import jwt from "jsonwebtoken";
const secret = 'test';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {      
      decodedData = jwt.verify(token, secret);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }    

    next()
    } catch (error) {
      return res.status(500).json({message: error.message})
}};

export default auth;
/* const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect }; */


// WHEN YOU SHOULD FIND THE SOLUTION IT SHOULD BE SUBMIT TO THE MANAGER FIRST THEN YOU FIND WHAT YOU WANT TO DO, 
// I HAVE IELTS EXAM 
// I HAVE RUSSIAN WORDS 
// I HAVE WORK 
// I HAVE APPLICATION 
// I HAVE ANOTHER WORK 
// WHY MY MOOD IS DOWN ? 
// I HAVE MONEY 
// WHY I SHOULD DO ? 
// I AM SO SAD 
// WHAT DO I WANT FROM THE WORLD ? 
// SHOULD I BE LIKE THIS ? 
// FOR HOW LONG ? 
// HOW CAN I MOTIVATE MYSELF ? 
// LET ME CHECK ............ 

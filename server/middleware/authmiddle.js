import jwt from "jsonwebtoken";
const secret = 'secret';

// to like a story, 
//click the like button ==> auth middleware checks if the user is authenticated ==> if yes,next to the controller

const authmiddle = async (req, res, next) => {
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
  
      next();
    } catch (error) {
      console.log(error);
    }
  };
  
  export default authmiddle;
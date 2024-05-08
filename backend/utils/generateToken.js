import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res)=>{
    //generating the token by calling the sign method (as userId and our secret as payload) 
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
      expiresIn: '15d'
    });
    
    //setting the generated token to cokie
      res.cookie('jwt', token, {
        httpOnly: true, // (so that this cookie should not be accessable by javascript)prevent XSS attacks, cross site scripting attacks
        maxAge: 1000 * 60 * 60 * 24 * 15,  // in milliseconds
        sameSite: "strict", //CSRF attack protection
        secure: process.env.NODE_ENV !== 'development'
      });

      return token;
};
export default generateTokenAndSetCookie;
import { Request, Response, NextFunction } from "express";


const ErrorHandler = (
  err: any, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  console.error(err.stack);

  if (err.status && err.message) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: "Internal Server Error" });
};


export default ErrorHandler;
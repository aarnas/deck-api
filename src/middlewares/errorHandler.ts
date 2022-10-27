import express from "express";

export const errorHandler = (
  err: any,
  req: express.Request,
  res: express.Response,
  next: any
) => {
  if (res.headersSent) {
    return next(err);
  }
  res.send({
    error: 500,
    message: "Internal server error",
  });
};

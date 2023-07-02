import { NextFunction } from "express";
import UserModel from "@models/user.model";
import SmallHolderModel from "@models/smallHolder.model";
import UserDocument from "@interfaces/model/user";
import SmallHolderDocument from "@interfaces/model/smallHolder";
import { body, check, validationResult } from "express-validator";
import { WriteError } from "mongodb";
import { CallbackError } from "mongoose";

export const createSmallHolder = async (
  req: any,
  res: any,
  next: NextFunction
): Promise<void> => {
  SmallHolderModel.create(...req.body)
    .then((SmallHolder) => {
      if (SmallHolder) {
        return res
          .status(200)
          .json({ message: "Create smallHolder successfully" });
      }
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

export const getSmallHolder = async (
  req: any,
  res: any,
  next: NextFunction
): Promise<void> => {
  SmallHolderModel.find({ _id: req.param.id })
    .then((SmallHolder) => {
      return res.status(200).json({ data: SmallHolder });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

export const getAllSmallHolder = async (
  req: any,
  res: any,
  next: NextFunction
): Promise<void> => {
  SmallHolderModel.find({})
    .then((SmallHolder) => {
      return res.status(200).json({ data: SmallHolder });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

export const updateSmallHolder = async (
  req: any,
  res: any,
  next: NextFunction
): Promise<void> => {
  SmallHolderModel.findById(req.param.id)
    .then((SmallHolder) => {
      if (SmallHolder) {
        UserModel.updateOne({ _id: SmallHolder._id }, req.body)
          .then(() => {
            return res.status(200).json({
              message: "SmallHolder information has been updated.",
              status: true,
            });
          })
          .catch((err: WriteError & CallbackError) => {
            console.log(err);
            return next(err);
          });
      }
    })
    .catch((err: NativeError) => {
      console.log(err);
      return next(err);
    });
};

export const deleteSmallHolder = (
  req: any,
  res: any,
  next: NextFunction
): void => {
  SmallHolderModel.deleteOne({ _id: req.param.id })
    .then(() => {
      return res
        .status(200)
        .json({ message: "SmallHolder has been deleted.", status: true });
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

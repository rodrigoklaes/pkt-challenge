import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { logger } from '@src/util/logger';

export default class UserSchema {
  static async create(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const bodySchema = Joi.object({
      name: Joi.string().required(),
    });
    try {
      await bodySchema.validateAsync(req.body);
      next();
    } catch (err: any) {
      logger.error(err);
      res.status(400).send({ message: 'Validation Error', errors: err });
    }
  }

  static async update(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const bodySchema = Joi.object({
      name: Joi.string(),
    });

    const paramsSchema = Joi.object({
      id: Joi.string().required(),
    });

    try {
      await bodySchema.validateAsync(req.body);
      await paramsSchema.validateAsync(req.params);
      next();
    } catch (err: any) {
      logger.error(err);
      res.status(400).send({ message: 'Validation Error', errors: err });
    }
  }

  static async get(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const paramsSchema = Joi.object({
      id: Joi.string().required(),
    });

    try {
      await paramsSchema.validateAsync(req.params);
      next();
    } catch (err: any) {
      logger.error(err);
      res.status(400).send({ message: 'Validation Error', errors: err });
    }
  }

  static async delete(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const paramsSchema = Joi.object({
      id: Joi.string().required(),
    });

    try {
      await paramsSchema.validateAsync(req.params);
      next();
    } catch (err: any) {
      logger.error(err);
      res.status(400).send({ message: 'Validation Error', errors: err });
    }
  }
}

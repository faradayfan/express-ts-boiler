import { NextFunction, Request, Response } from "express";

/**
 * Constructor
 *
 * @class BaseRoute
 */
export class BaseRoute {

  /**
   * Constructor
   *
   * @class BaseRoute
   * @constructor
   */
  constructor() {
  }

  public send(req: Request, res: Response, obj: any): void {
    res.send(obj);
  }


}
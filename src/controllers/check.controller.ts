import { GET, route } from 'awilix-express';
import { Request, Response } from 'express';
import { TestService } from '../services/test.service';

@route('/check')
export class CheckController {
  constructor(private readonly testService: TestService) {}

  @GET()
  public index(req: Request, res: Response): void {
    res.send({
      node_env: process.env.NODE_ENV,
      app_env: process.env.APP_ENV
    });
  }

  @route('/test')
  @GET()
  public test(req: Request, res: Response): void {
    res.send(this.testService.get());
  }
}

import { DELETE, GET, POST, PUT, route } from 'awilix-express';
import { Response, Request } from 'express';
import { BaseController } from '../common/controllers/base.controller';
import {
  SubscriptionCreateDto,
  SubscriptionUpdateDto
} from '../dtos/subscription.dto';
import { SubscriptionService } from '../services/subscripton.service';

@route('/subscription')
export class SubscriptionController extends BaseController {
  constructor(private readonly subscriptionService: SubscriptionService) {
    super();
  }

  @GET()
  public async all(req: Request, res: Response) {
    try {
      res.send(await this.subscriptionService.all());
    } catch (error) {
      this.handleException(error, res);
    }
  }

  // subscription/1
  @route('/:id')
  @GET()
  public async find(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const result = await this.subscriptionService.find(id);
      if (result) {
        return res.send(result);
      }

      res.status(404);
      res.send();
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @POST()
  public async store(req: Request, res: Response) {
    try {
      await this.subscriptionService.store({
        user_id: req.body.user_id,
        code: req.body.code,
        amount: req.body.amount,
        cron: req.body.cron
      } as SubscriptionCreateDto);
      res.send();
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route('/:id')
  @PUT()
  public async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      await this.subscriptionService.update(id, {
        code: req.body.code,
        amount: req.body.amount,
        cron: req.body.cron
      } as SubscriptionUpdateDto);
      res.send();
    } catch (error) {
      this.handleException(error, res);
    }
  }

  @route('/:id')
  @DELETE()
  public async remove(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);

      await this.subscriptionService.remove(id);
      res.send();
    } catch (error) {
      this.handleException(error, res);
    }
  }
}

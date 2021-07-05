import express from 'express';
import { createContainer, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import { TestService } from './services/test.service';
import { SubscriptionMySQLRepository } from './services/repositories/implementation/mysql/subscription.repository';
import { SubscriptionService } from './services/subscripton.service';

export default (app: express.Application) => {
  const container = createContainer({ injectionMode: 'CLASSIC' });

  container.register({
    // repositories
    subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),

    // services
    subscriptionService: asClass(SubscriptionService).scoped(),
    testService: asClass(TestService).scoped()
  });

  app.use(scopePerRequest(container));
};

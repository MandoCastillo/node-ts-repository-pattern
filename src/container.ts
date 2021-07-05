import express from 'express';
import { createContainer, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import { TestService } from './services/test.service';
import { SubscriptionMySQLRepository } from './services/repositories/implementation/mysql/subscription.repository';
import { SubscriptionService } from './services/subscripton.service';
import { MovementService } from './services/movement.service';
import { MovementMySQLRepository } from './services/repositories/implementation/mysql/movement.repository';
import { BalanceMySQLRepository } from './services/repositories/implementation/mysql/balance.repository';

export default (app: express.Application) => {
  const container = createContainer({ injectionMode: 'CLASSIC' });

  container.register({
    // repositories
    subscriptionRepository: asClass(SubscriptionMySQLRepository).scoped(),
    movementRepository: asClass(MovementMySQLRepository).scoped(),
    balanceRepository: asClass(BalanceMySQLRepository).scoped(),

    // services
    subscriptionService: asClass(SubscriptionService).scoped(),
    movementService: asClass(MovementService).scoped(),
    testService: asClass(TestService).scoped()
  });

  app.use(scopePerRequest(container));
};

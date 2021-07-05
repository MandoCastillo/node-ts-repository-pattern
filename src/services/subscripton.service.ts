import { ApplicationException } from '../common/exceptions/application.exception';
import { SubscriptionCreateDto, SubscriptionUpdateDto } from '../dtos/subscription.dto';
import { Subscription } from './repositories/domain/subscription';
import { SubscriptionRepository } from './repositories/subscription.repository';

export class SubscriptionService {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository
  ) {}

  public async find(id: number): Promise<Subscription | null> {
    return await this.subscriptionRepository.find(id);
  }

  public async store(entry: SubscriptionCreateDto): Promise<void> {
    const originalEntry = await this.subscriptionRepository.findByUserIdAndCode(
      entry.user_id,
      entry.code
    );

    if (!originalEntry) {
      return await this.subscriptionRepository.store(entry as Subscription);
    }
    throw new ApplicationException('User subscription already exists.');
  }

  public async update(
    id: number,
    entry: SubscriptionUpdateDto
  ): Promise<void> {
    let originalEntry = await this.subscriptionRepository.find(id)

    if(originalEntry){
      originalEntry.code = entry.code;
      originalEntry.amount = entry.amount;
      originalEntry.cron = entry.cron;
      await this.subscriptionRepository.update(originalEntry);
      return
    }
    throw new ApplicationException('Subscription not found.');
  }

  public async all(): Promise<Subscription[]> {
    return await this.subscriptionRepository.all();
  }

  public async remove(id: number): Promise<void> {
    await this.subscriptionRepository.remove(id);
  }
}

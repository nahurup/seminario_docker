import { CACHE_MANAGER, Controller, Get, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager'

@Controller()
export class AppController {

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  @Get()
  async getCounter(): Promise<string> {
    const value = await this.cacheManager.store.get('value');
    return Promise.resolve('Valor: ' + value);
  }

  @Get('set1')
  async incCounter(): Promise<string> {
    return await this.cacheManager.store.set('value', 1);    
  }

  @Get('set2')
  async decCounter(): Promise<string> {
    return await this.cacheManager.store.set('value', 2);
  }
}

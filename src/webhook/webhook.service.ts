import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WebhookService {
  constructor(private httpService: HttpService) {}

  async sendWebhook(url: string, data: any): Promise<any> {
    try {
      const response = await firstValueFrom(this.httpService.post(url, data));
      return response.data;
    } catch (error) {
      throw new Error(`Failed to send webhook: ${error.message}`);
    }
  }
}

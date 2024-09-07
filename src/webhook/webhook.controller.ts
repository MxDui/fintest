import { Controller, Post, Body } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post('send')
  async sendWebhook(@Body() body: { url: string; data: any }) {
    const { url, data } = body;
    return await this.webhookService.sendWebhook(url, data);
  }
}

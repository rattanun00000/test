import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getWelcomeMessage(): string {
        return 'Welcome to Nextflix Clone Service API';
    }
}
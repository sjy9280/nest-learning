import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
    constructor(private configService: ConfigService) {}
    getUsers() {
        return this.configService.get('DB_HOST');
    }
}

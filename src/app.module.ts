import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module'
import { MailerModule } from '@nestjs-modules/mailer'

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'email-smtp.sa-east-1.amazonaws.com',
        port: 587,
        secure: false,
        tls:{
          ciphers: 'SSLv3'
        },
        auth: {
          user: 'AKIARVJUYIT4TAKR627F',
          pass: 'BANDA3Lr8Fd9tZzGx5ryn7HqzqNiKK733niSBjyUpihM'
        }
      }
    }),
    ProxyRMQModule,
    ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

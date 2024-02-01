import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ApplicationModule } from './application/application.module';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [ConfigModule.forRoot(),
      TypeOrmModule.forRoot({
          type:"postgres",
          host: process.env.DB_HOST,
          username: process.env.DB_USER,
          port:Number(process.env.DB_PORT),
          password: process.env.DB_PASSWORD,
          database:process.env.DB_NAME,
          entities:[__dirname+ '/**/*.entity{.js,ts}'],
          synchronize: true
      }),
      UserModule,
      AuthModule,
      ApplicationModule,
      WorkerModule

    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

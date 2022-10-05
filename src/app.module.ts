import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';


import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: process.env.SEQUELIZE_HOST,
    port: 3306,
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: process.env.SEQUELIZE_DATABASE,
    entities: [User],
    synchronize: true,
    autoLoadEntities: true,
  }),UsersModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}

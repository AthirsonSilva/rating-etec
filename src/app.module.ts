import { Module } from '@nestjs/common';
import { RatingsController } from './ratings/ratings.controller';
import { RatingsService } from './ratings/ratings.service';
import { RatingsModule } from './ratings/ratings.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './ratings/entities/rating.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'dbratings',
      entities: [Rating],
      synchronize: true,
    }),
    RatingsModule,
  ],
  controllers: [RatingsController],
  providers: [RatingsService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingsService {
  constructor(
    @InjectRepository(Rating)
    private ratingsRepository: Repository<Rating>,
  ) {}

  create(rating: Rating) {
    return this.ratingsRepository.save(rating);
  }

  findAll() {
    return this.ratingsRepository.find();
  }

  findOne(id: number) {
    return this.ratingsRepository.findOne(id);
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    this.ratingsRepository.update(id, updateRatingDto);
  }

  remove(id: number) {
    this.ratingsRepository.delete(id);
  }
}

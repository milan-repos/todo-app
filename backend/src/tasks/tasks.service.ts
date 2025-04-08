import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({ data: createTaskDto });
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async remove(id: number) {
    return this.prisma.task.delete({ where: { id } });
  }
}

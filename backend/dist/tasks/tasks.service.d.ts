import { PrismaService } from '../prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto): Promise<{
        id: number;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

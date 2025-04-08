import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
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
    remove(id: string): Promise<{
        id: number;
        title: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

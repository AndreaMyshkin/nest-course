import {
  Get,
  Controller,
  Post,
  Delete,
  Put,
  Patch,
  Body,
  Query,
  Param,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { query } from 'express';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}
  @Get()
  getAllTasks(@Query() query: any) {
    console.log(query);
    return this.tasksService.getTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.getTask(parseInt(id));
  }

  @Post()
  //@UsePipes(new ValidationPipe())
  createTasks(@Body() task: CreateTaskDto) {
    return this.tasksService.createTasks(task);
  }
  @Put()
  updateTasks(@Body() task: UpdateTaskDto) {
    return this.tasksService.updateTasks(task);
  }

  @Delete()
  deleteTasks() {
    return this.tasksService.deleteTasks();
  }

  @Patch()
  updateTaskStatus() {
    return this.tasksService.updateTasksStatus();
  }
}

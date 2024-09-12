import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

Injectable();

export interface User {
  name: string;
  age: number;
}
export class TasksService {
  private tasks = [];
  getTasks(): User[] {
    return this.tasks;
  }

  getTask(id: number): User {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }
  createTasks(task: CreateTaskDto) {
    console.log(task);

    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return this.tasks;
  }

  updateTasks(task: UpdateTaskDto) {
    console.log(task);
    return 'Actualizando tareas';
  }

  deleteTasks() {
    return 'Eliminando tareas';
  }

  updateTasksStatus() {
    return 'actualizando el estado de una tarea';
  }
}

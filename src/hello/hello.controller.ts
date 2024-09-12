import { Controller, Get, HttpCode, Param, ParseIntPipe, Req, Res, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import {Request, Response} from "express";
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
@Controller()
export class HelloController {
   @Get('/hello')
   index(@Req() request: Request, @Res() response: Response){
     response.status(200).json({
       message: "Hello World"
     })
   }

   @Get('/notfound')
   @HttpCode(404)
   notFound(){
     return "Not Found"
   }

   @Get('ticket/:num')
   getNumber(@Param('num', ParseIntPipe) num:number){
    return num + 14

   }


  @Get('active/:status')
  @UseGuards(AuthGuard)
  isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: { name: string; age: number }) {
    console.log(typeof query.age);
    console.log(typeof query.name);
    return `Hello ${query.name}, you are ${query.age + 30} years old`;
  }

} 

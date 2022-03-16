import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeRepository } from './Employee.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { Employee, EmployeeSchema } from './schema/Employee.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Employee.name, schema: EmployeeSchema }])],
  controllers: [EmployeesController],
  providers: [EmployeesService,EmployeeRepository]
})
export class EmployeesModule {}

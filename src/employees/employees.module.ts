import { Module } from '@nestjs/common';
import { EmployeeRepository } from './Employee.repository';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService,EmployeeRepository]
})
export class EmployeesModule {}

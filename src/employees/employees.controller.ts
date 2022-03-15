import { Body, Controller, Get, Param, Post, Query, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeTierValidationPipe } from 'src/employee-tier-validation.pipe';
import { EmployeeTiers } from './Employee.enum';
import { EmployeeCreateDto } from './EmployeeCreate.dto';
import { EmployeesService } from './employees.service';
import { EmployeeSearchDto } from './EmployeeSearch.dto';
import { EmployeeUpdateDto } from './EmployeeUpdate.dto';
import { Employee } from './schema/Employee.schema';
@Controller('employees')
export class EmployeesController {

    constructor(private employees: EmployeesService) {

    }

    @Get()
    @UsePipes(ValidationPipe)
    getAllEmployee(@Query() param : EmployeeSearchDto){
        //todo: implement
        if(Object.keys(param).length){
           return this.employees.employeeSearch(param);
        }else{
            return this.employees.getAllEmployees()
        }

        /** Do not do  this way  */
        // if(param)){
        //     console.log(param);
        //     console.log("Filter");
        //     this.employees.employeeSearch(param);
        // }else{
        //     console.log("no Filter")
        //     return this.employees.getAllEmployees()
        // }
      
    }
      
    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new EmployeeTierValidationPipe)
    createEmployee(@Body() employeeCreateDto: EmployeeCreateDto,): Employee{

     return this.employees.createEmployee(employeeCreateDto);
    }

    @Get('/:id')
    getEmployeeById(@Param('id') id: string): Employee{
        return this.employees.getEmployeeById(id);
    }

    @Put('/:id/city')
    updateEmployee(@Param('id') id: string, @Body() body:EmployeeUpdateDto){
        body.id = id;
       return this.employees.updateEmployee(body);
    }

}

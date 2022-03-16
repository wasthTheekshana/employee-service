import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeTiers,EmployeeStatus } from './Employee.enum';
import { EmployeesModule } from './employees.module';
import { v1 as uuid } from 'uuid'
import { EmployeeSearchDto } from './EmployeeSearch.dto';
import { EmployeeUpdateDto } from './EmployeeUpdate.dto';  
import { EmployeeCreateDto } from './EmployeeCreate.dto';
import { Employee } from './schema/Employee.schema';
import { EmployeeRepository } from './Employee.repository';

@Injectable()
export class EmployeesService {

    constructor(private employeeRepository: EmployeeRepository){

    }

    private employees : Employee[] = []

    async getAllEmployees():Promise<Employee[]>{
        // return this.employees;
        return await this.employeeRepository.findAll();
    }

   async createEmployee(employeeCreateDto: EmployeeCreateDto): Promise<Employee>{

        // const{
        //     firstName,
        //     lastName,
        //     designation,
        //     nearestCity,
        //     tires,
        // } = employeeCreateDto

        // const employe = {
        //     id: uuid(),
        //     firstName,
        //     lastName,
        //     designation,
        //     nearestCity,
        //     tires,
        //     status:EmployeeStatus.ACTIVE
        // }

       // this.employees.push(employe);
        return await this.employeeRepository.create(employeeCreateDto)

    }

    // employeeSearch(employeeSearchDto: EmployeeSearchDto){

    //     const {status,name} = employeeSearchDto;
    //     let employees = this.getAllEmployees();

    //     if(status){
    //         employees = employees.filter(employee => employee.status === status)
    //         console.log(employees)
    //     }
    //     if(name){
    //         employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name))
    //     }

    //     return employees;


    // }

    // getEmployeeById(id:string) :Employee {

    //     const employees = this.getAllEmployees();
    //      let employee = employees.find(employee => employee.id ==id);

    //      if(!(employee)){
    //         throw new NotFoundException(`${id} does not exist`);
    //      }
    //     return employee;
    // }


// updateEmployee(employeeUpdateDto :EmployeeUpdateDto) : Employee {

//     const{id,city} = employeeUpdateDto;

//     let employees = this.getEmployeeById(id);

//     employees.nearestCity=city;
//     return employees;
// }
}
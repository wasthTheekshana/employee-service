import { IsNotEmpty, NotEquals, notEquals } from "class-validator"
import { EmployeeTiers, EmployeeStatus } from "./Employee.enum"

export class EmployeeCreateDto{
    id: string
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string
     @NotEquals('CEO')
    designation: string
    nearestCity: string
    tires: EmployeeTiers
    status:EmployeeStatus 
}
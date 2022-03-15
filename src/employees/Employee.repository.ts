import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Employee, EmployeeDocument } from "./schema/Employee.schema";
import { Model } from "mongoose";
import { EmployeeCreateDto } from "./EmployeeCreate.dto";


@Injectable()
export class EmployeeRepository {

    constructor(@InjectModel(Employee.name),private employeeModel: Model<EmployeeDocument>){

    }

    async create(createEmployeeDto: EmployeeCreateDto): Promise<Employee>{

    }
}
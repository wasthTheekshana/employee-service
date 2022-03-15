import { EmployeeStatus, EmployeeTiers } from "../Employee.enum";
import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
/*
export const EmployeeSchema=({
        id: String,
    firstName: String,
    lastName: String,
    designation: String,
    nearestCity: String,
    tires: EmployeeTiers,
    status:EmployeeStatus
})*/

export type EmployeeDocument = Employee & Document

@Schema()
export class Employee{

    @Prop()
    id: string
    @Prop({required:true})
    firstName: string
    @Prop({required:true})
    lastName: string
    @Prop()
    designation: string
    @Prop()
    nearestCity: string
    @Prop()
    tires: EmployeeTiers
    @Prop()
    status:EmployeeStatus 
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
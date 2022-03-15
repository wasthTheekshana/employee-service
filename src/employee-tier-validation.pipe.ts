import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTiers } from './employees/Employee.enum';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!(value.tires in EmployeeTiers)){
      throw new BadRequestException(`${value.tiers} is not a vaild tiers`)
    }
    return value;
  }
}

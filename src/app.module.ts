import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTIONS } from './app.properties';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [EmployeesModule ,MongooseModule.forRoot(MONGO_CONNECTIONS)],
})
export class AppModule {}

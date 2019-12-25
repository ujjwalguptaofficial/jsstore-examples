import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { IStudent } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService {

  tableName = 'Students';

  getStudents() {
    return this.connection.select<IStudent>({
      from: this.tableName
    });
  }

  addStudent(student: IStudent) {
    return this.connection.insert<IStudent>({
      into: this.tableName,
      return: true, // as id is autoincrement, so we would like to get the inserted value
      values: [student]
    });
  }

  deleteStudent(studentId: number) {
    return this.connection.remove({
      from: this.tableName,
      where: {
        id: studentId
      }
    });
  }

  updateStudent(studentId: number, updateValue: IStudent) {
    return this.connection.update({
      in: this.tableName,
      where: {
        id: studentId
      },
      set: updateValue
    });
  }

  getStudentById(studentId: number) {
    return this.connection.select<IStudent>({
      from: this.tableName,
      where: {
        id: studentId
      }
    });
  }

  async clearStudents() {
    return await this.connection.clear(this.tableName);
  }

}

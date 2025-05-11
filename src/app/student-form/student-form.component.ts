import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  standalone: true,
  selector: 'app-student-form',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent {
  studentId = ''
  students: string[] = []
  createdMessage = ''

  addStudent() {
    if (!this.studentId.trim()) return
    this.students.push(this.studentId)
    this.createdMessage = 'Student with ID-' + this.studentId + ' has been created'
    this.studentId = ''
  }
}

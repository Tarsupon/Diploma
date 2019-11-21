import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      newTaskName: '',
      newTaskDescription: ''
    });
  }

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}

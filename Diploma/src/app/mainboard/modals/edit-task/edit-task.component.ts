import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { AddBoardComponent } from "../add-board/add-board.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {


  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      newTaskName: this.data ? this.data.oldTaskName : '',
      newTaskDescription: this.data ? this.data.oldTaskDescription : ''
    });
  }

}

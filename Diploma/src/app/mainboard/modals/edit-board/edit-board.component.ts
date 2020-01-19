import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddBoardComponent } from '../add-board/add-board.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.scss']
})
export class EditBoardComponent implements OnInit {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditBoardComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      newBoardName: this.data ? this.data.oldBoardName : '',
      newBoardDescription: this.data ? this.data.oldBoardDescription : ''
    });
  }

}

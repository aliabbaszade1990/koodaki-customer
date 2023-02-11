import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetFileDto } from '../../data-access/dtos/get-file.dto';

@Component({
  selector: 'koodaki-comment-on-file',
  templateUrl: './comment-on-file.component.html',
  styleUrls: ['./comment-on-file.component.scss'],
})
export class CommentOnFileComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public file: GetFileDto,
    private dialog: MatDialogRef<CommentOnFileComponent>,
    private fb: FormBuilder
  ) {}

  form: FormGroup = this.fb.group({
    comment: [this.file.comment, Validators.required],
  });
  ngOnInit(): void {}

  saveComment() {
    this.dialog.close(this.form.value);
  }
}

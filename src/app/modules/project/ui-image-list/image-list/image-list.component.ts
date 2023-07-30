import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileApiService } from '../../data-access/apis/file-api.service';
import { GetFileDto } from '../../data-access/dtos/get-file.dto';
import { GetProjectDto } from '../../data-access/dtos/get-project-dto';

@Component({
  selector: 'koodaki-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent {
  constructor(private dialog: MatDialog, private fileApi: FileApiService) {}
  @Input() list: GetFileDto[] = [];
  @Input() project?: GetProjectDto;
  @Input() inProgress = false;
  @Output() clickImage: EventEmitter<GetFileDto> = new EventEmitter();
  @Output() select: EventEmitter<GetFileDto> = new EventEmitter();
  @Output() comment: EventEmitter<GetFileDto> = new EventEmitter();
  @Output() delete: EventEmitter<GetFileDto> = new EventEmitter();

  onClickImage(image: GetFileDto) {
    this.clickImage.emit(image);
    this.getPreviouslySelectedFile().isCurrentItem = false;
    image.isCurrentItem = true;
  }

  getPreviouslySelectedFile(): GetFileDto {
    return this.list.find((item) => item.isCurrentItem) as GetFileDto;
  }

  onClickSelect(image: GetFileDto) {
    this.onClickImage(image);
    this.select.emit();
  }

  onClickComment(image: GetFileDto) {
    this.onClickImage(image);
    this.comment.emit();
  }

  onClickDelete(image: GetFileDto) {
    this.onClickImage(image);
    this.delete.emit();
  }
}

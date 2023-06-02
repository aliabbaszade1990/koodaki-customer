import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetFileDto } from '../../data-access/dtos/get-file.dto';

@Component({
  selector: 'koodaki-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss'],
})
export class ImageListComponent {
  @Input() list: GetFileDto[] = [];
  @Input() inProgress = false;
  @Output() clickImage: EventEmitter<GetFileDto> = new EventEmitter();

  onClickImage(image: GetFileDto) {
    this.clickImage.emit(image);
    this.getPreviouslySelectedFile().isCurrentItem = false;
    image.isCurrentItem = true;
  }

  getPreviouslySelectedFile(): GetFileDto {
    return this.list.find((item) => item.isCurrentItem) as GetFileDto;
  }
}

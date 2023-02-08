import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationComponent } from 'src/app/modules/shared';
import { SubSink } from 'subsink';
import { FileApiService } from '../../data-access/apis/file-api.service';
import { GetFileDto } from '../../data-access/dtos/get-file.dto';
import { PaginatorConfig } from '../../ui-paginator/interfaces/pagination-config.interface';
import { CommentOnFileComponent } from '../comment-on-file/comment-on-file.component';

@Component({
  selector: 'koodaki-project-files',
  templateUrl: './project-files.component.html',
  styleUrls: ['./project-files.component.scss'],
})
export class ProjectFilesComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private subsink: SubSink,
    private fileApi: FileApiService
  ) {}
  images: GetFileDto[] = [];
  selectedImages: string[] = [];
  paginatorConfig: PaginatorConfig = {
    total: 0,
    page: 1,
    size: 20,
    hasNext: true,
  };

  ngOnInit(): void {
    this.observeRoute();
  }

  observeRoute() {
    this.subsink.sink = this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getFiles(params['id']);
      }
    });
  }

  getFiles(id: string) {
    this.fileApi.getFiles(id).subscribe((result) => {
      this.images = result.items;

      this.paginatorConfig = {
        ...this.paginatorConfig,
        total: result.total,
        hasNext: result.hasNext,
      };

      this.images[0].isCurrentItem = true;
      this.currentItem = this.images[0];
    });
  }

  currentItem: GetFileDto = this.images[0];
  onClickImage(image: GetFileDto) {
    this.currentItem.isCurrentItem = false;
    this.currentItem = image;
    this.currentItem.isCurrentItem = true;
    this.resetRotation();
  }

  toggleSelectedImage() {
    this.currentItem.selected = !this.currentItem.selected;
  }

  onClickComment() {
    this.dialog
      .open(CommentOnFileComponent, {
        direction: 'rtl',
        width: '500px',
      })
      .afterClosed()
      .subscribe((result: any) => {
        this.currentItem.comment = result.comment || '';
      });
  }

  onClickDelete() {
    this.dialog
      .open(ConfirmationComponent, {
        direction: 'rtl',
        data: {
          title: 'از حذف این فایل مطمئن هستی؟',
          subtitle: 'در صورت حذف امکان بازیابی فایل وجود ندارد',
        },
      })
      .afterClosed()
      .subscribe((result) => {});
  }

  onClickNavigationNext() {
    let indexOfCurrentElement = this.images.indexOf(
      this.images.find((i) => i.isCurrentItem) as GetFileDto
    );
    this.currentItem.isCurrentItem = false;
    let nextEelement = this.images[indexOfCurrentElement + 1];
    this.currentItem = nextEelement || this.images[this.images.length - 1];
    this.currentItem.isCurrentItem = true;

    this.manageScrollingList(indexOfCurrentElement + 1);
    this.resetRotation();
  }

  @ViewChild('imageList') imageList: ElementRef = new ElementRef(null);
  manageScrollingList(index: number, scrollingDown = true) {
    let el = document.getElementById(`${this.images[index]}`);

    this.imageList.nativeElement.scrollTop = index * (113 + 12);
  }

  onClickNavigationPreviouse() {
    let indexOfCurrentElement = this.images.indexOf(
      this.images.find((i) => i.isCurrentItem) as GetFileDto
    );
    this.currentItem.isCurrentItem = false;
    let previouseEelement = this.images[indexOfCurrentElement - 1];

    this.currentItem = previouseEelement || this.images[0];
    this.currentItem.isCurrentItem = true;

    this.manageScrollingList(indexOfCurrentElement - 1, false);
    this.resetRotation();
  }

  resetRotation() {
    this.rotationDegree = 0;
  }

  @ViewChild('slider') slider: ElementRef = new ElementRef(null);
  @ViewChild('image') image: ElementRef = new ElementRef(null);
  rotationDegree = 0;
  onClickRotate() {
    this.rotationDegree = this.rotationDegree - 90;

    this.renderer.setStyle(
      this.image.nativeElement,
      'transform',
      `rotate(${this.rotationDegree}deg)`
    );

    this.renderer.setStyle(
      this.image.nativeElement,
      'max-width',
      this.imageIsVertical(this.rotationDegree)
        ? `${this.slider.nativeElement.offsetHeight}px`
        : '100%'
    );
  }

  imageIsVertical(degree: number): boolean {
    return degree === -90 || degree === -270;
  }

  onClickNext(page: number) {
    this.paginatorConfig.page = page;
  }

  onClickPrevious(page: number) {
    this.paginatorConfig.page = page;
  }
}

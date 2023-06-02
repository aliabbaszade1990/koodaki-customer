import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from 'src/app/modules/core';
import { ConfirmationComponent } from 'src/app/modules/shared';
import { SubSink } from 'subsink';
import { FileApiService } from '../../data-access/apis/file-api.service';
import { ProjectApiService } from '../../data-access/apis/project-api.service';
import { GetFileDto } from '../../data-access/dtos/get-file.dto';
import { GetProjectDto } from '../../data-access/dtos/get-project-dto';
import { UpdateProjectDto } from '../../data-access/dtos/update-project-dto';
import { FileListParams } from '../../data-access/models/list-params-file.model';
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
    private fileApi: FileApiService,
    private snackbar: SnackbarService,
    private projectApi: ProjectApiService
  ) {}
  choosenOnesControl = new FormControl(false);

  images: GetFileDto[] = [];
  selectedImages: string[] = [];
  paginatorConfig: PaginatorConfig = {
    total: 0,
    page: 1,
    size: 20,
    hasNext: true,
  };

  @HostListener('window:keydown.ArrowRight', ['$event'])
  @HostListener('window:keydown.ArrowDown', ['$event'])
  onArrowRightAndBottom() {
    this.onClickNavigationNext();
  }

  @HostListener('window:keydown.ArrowLeft', ['$event'])
  @HostListener('window:keydown.ArrowUp', ['$event'])
  onArrowLeftAndUp() {
    this.onClickNavigationPreviouse();
  }

  ngOnInit(): void {
    this.observeRoute();
    this.observeCheckbox();
  }

  observeCheckbox() {
    this.choosenOnesControl.valueChanges.subscribe((value) => {
      this.fileListParams.selected = value as boolean;
      this.getFiles();
    });
  }

  projectId: string = '';
  observeRoute() {
    this.subsink.sink = this.route.params.subscribe((params) => {
      if (params['id']) {
        this.projectId = params['id'];
        this.fileListParams.projectId = this.projectId;
        this.getProject();
        this.getFiles();
      }
    });
  }

  project?: GetProjectDto;
  getProject() {
    this.projectApi.get(this.projectId).subscribe((result) => {
      this.project = result;
    });
  }

  fileListParams: FileListParams = new FileListParams('', false, 20);
  inProgress = false;
  getFiles() {
    this.inProgress = true;
    this.fileApi.getFiles(this.fileListParams).subscribe({
      next: (result) => {
        this.inProgress = false;
        this.images = result.items;

        this.paginatorConfig = {
          ...this.paginatorConfig,
          page: this.fileListParams.page,
          total: result.total,
          hasNext: result.hasNext,
        };

        if (this.images && this.images.length) {
          this.images[0].isCurrentItem = true;
          this.currentItem = this.images[0];
        }
      },
      error: () => {
        this.inProgress = false;
      },
    });
  }

  currentItem: GetFileDto = this.images[0];
  onClickImage(image: GetFileDto) {
    this.currentItem.isCurrentItem = false;
    this.currentItem = image;
    this.currentItem.isCurrentItem = true;
    this.resetRotation();
  }

  onClickSelect() {
    this.currentItem.selected = !this.currentItem.selected;
    this.updateFile();
  }

  updateFile() {
    this.fileApi.update(this.currentItem).subscribe({
      next: (result) => {
        this.currentItem = result;
      },
      error: (error) => {
        this.currentItem.selected = false;
        this.snackbar.fail('انتخاب فایل ناموفق بود.');
      },
    });
  }

  onClickComment() {
    this.dialog
      .open(CommentOnFileComponent, {
        direction: 'rtl',
        width: '500px',
        data: this.currentItem,
      })
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.currentItem.comment = result.comment || '';
          this.updateFile();
        }
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
      .subscribe((result) => {
        if (result) {
          this.fileApi.delete(this.currentItem.id).subscribe((result) => {
            this.snackbar.succeed('فایل با موفقیت حذف شد');
            this.getFiles();
          });
        }
      });
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
    this.scrollTo(index * 185);
  }

  scrollTo(to: number) {
    this.imageList.nativeElement.scrollTop = to;
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

  onChangePage(page: number) {
    this.fileListParams.page = page;
    this.scrollTo(0);
    this.getFiles();
  }

  onChangeFinalized(event: MatSlideToggleChange) {
    (this.project as GetProjectDto).finalized = event.checked;
    const model: UpdateProjectDto = {
      id: this.project?.id as string,
      title: this.project?.title as string,
      isClosed: this.project?.isClosed as boolean,
      location: this.project?.location as string,
      customerId: this.project?.customer.id as string,
      startedAt: this.project?.startedAt as Date,
      finalized: event.checked,
    };
    this.projectApi.udpate(model).subscribe({
      next: (result) => {
        this.project = result;
      },
      error: () => {
        (this.project as GetProjectDto).finalized = !event.checked;
      },
    });
  }
}

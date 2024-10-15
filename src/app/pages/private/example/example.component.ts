import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonGroupComponent, NzButtonModule, NzButtonSize } from 'ng-zorro-antd/button';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { NzPlacementType } from 'ng-zorro-antd/dropdown';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    HttpClientModule,
    NzGridModule,NzCardModule,
    NzIconModule, 
    NzButtonModule,NzButtonGroupComponent,
    NzBreadCrumbModule,
    NzMenuModule,CommonModule,
    NzDropDownModule,
    NzListModule,
    NzTimelineModule
  ],
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent{
  size: NzButtonSize = 'large';
  listOfPosition: NzPlacementType[] = ['bottomLeft', 'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];


    
  constructor() {
    this.loadData(1);
  }
  data: ItemData[] = [];


  loadData(pi: number): void {
    this.data = new Array(5).fill({}).map((_, index) => ({
      href: 'http://ant.design',
      title: `ant design part ${index} (page: ${pi})`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources ' +
        '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    }));
  }


  reverse = false;

  toggleReverse(): void {
    this.reverse = !this.reverse;
  }
}

interface ItemData {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: string;
}

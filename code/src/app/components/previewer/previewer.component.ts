import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css']
})
export class PreviewerComponent implements OnInit {
	public items: any[] = [];
	public width = '100%';
	public height = (window.innerHeight - 200) + 'px';
    public opened = true;
	public title: string = '';
	public index: number = 0;
	public picWidth = 100;
	public picHeight = 100;

	constructor() {}
	ngOnInit() {
		const apiData = ajax('https://picsum.photos/v2/list');
		apiData.subscribe(res => {
			this.items = res.response.slice(0, 9);
			this.title = this.items[0].author;
		});
	}

    public onClose() {
        this.opened = false;
    }

    public onOpen() {
        this.opened = true;
    }

	public onPrint(e) {
        alert('Print Clicked');
    }

	public onDownload(e) {
        alert('Download Clicked');
    }

	public onItemChanged(e) {
		this.title = e.item.author;
		this.index = e.index;
    }

	public onMinus() {
		if (this.picWidth > 20) this.picWidth = this.picWidth - 20;
		if (this.picHeight > 20) this.picHeight = this.picHeight - 20;
    }

	public onPlus() {
        if (this.picWidth < 300) this.picWidth = this.picWidth + 20;
		if (this.picHeight < 300) this.picHeight = this.picHeight + 20;
    }
}

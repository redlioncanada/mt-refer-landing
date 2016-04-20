import {Component, ElementRef} from 'angular2/core';
import {AppDataService} from './services/appdata.service'

declare var $: JQueryStatic;

@Component({
    selector: 'masthead',
    template: `
    	<div class="{{!enabled ? 'hide': ''}}">
			<div class="mt-landing-title"><h1>{{title}}</h1></div>
			<div class="mt-landing-image">
				<img src="{{image}}" alt="{{alt}}" />
				<img src="{{imageForeground}}" alt="{{alt}}" />
			</div>
			<img class="mt-landing-light" src="./public/images/light.png" />
		</div>
    `
})
export class AppMasthead {
	private image: string
	private imageForeground: string
	private title: string
	private enabled: boolean
	private alt: string
	private element: any

	constructor(private appdata: AppDataService, private _elementRef: ElementRef) {
		this.enabled = true
		this.element = _elementRef.nativeElement
		var data = appdata.get()

		this.enabled = data.masthead.enabled
		this.image = data.masthead.image
		this.imageForeground = data.masthead.imageForeground
		this.title = data.masthead.title
		this.alt = data.masthead.alt
	}

	ngAfterViewInit() {
		var self = this

		setTimeout(function() {
			$(self.element).find('.mt-landing-image img').last().animate({ opacity: 1 }, { duration: 350, queue: false })
			$(self.element).find('.mt-landing-light').animate({ bottom: '70%' }, { duration: 300, queue: false, complete: function() {
				var self1 = this
				setTimeout(function() {
					$(self1).animate({ opacity: 0 }, { duration: 100, queue: false })
				}, 200)
			}});
		}, 4000)
	}
}
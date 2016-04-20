import {Component, ElementRef} from 'angular2/core'
import {MoreFeaturesFeature} from './landing.morefeatures.feature'
import {AppDataService} from './services/appdata.service'
import {LoggerService} from './services/logger.service'

declare var $: JQueryStatic;

@Component({
    selector: 'more-features',
    template: `
    	<div (window:resize)="onResize()" class="row {{!enabled ? 'hide' : ''}}">
			<h2 class="rl-mt-refer-landing-subtitle">{{title}}</h2>
		    <more-features-feature *ngFor="#feature of moreFeatures; #i=index" [cta]="feature.cta" [text]="feature.text" [analytics]="feature.analytics" [link]="feature.link" [title]="feature.title" [image]="feature.image" [alt]="feature.alt">
		    </more-features-feature>
		</div>
    `,
    directives: [MoreFeaturesFeature],
})
export class MoreFeatures {
	public moreFeatures
	public title
	private enabled

	private _lastHeight = -1;
	private _resizeInterval;

	constructor(private appdata: AppDataService, private logger: LoggerService, private elementRef: ElementRef) {
		this.enabled = true
		var data = appdata.get()
		this.enabled = data.morefeatures.enabled
		this.title = data.morefeatures.title
		this.moreFeatures = data.morefeatures.features
	}

	ngAfterViewInit() {
		var self = this
		this._resizeInterval = setInterval(function() { self.onResize.call(self) }, 250)
    }

    onResize() {
		//make sure the second image is the same height as the others
		var element = this.elementRef.nativeElement
		var height = $(element).find('more-features-feature .hover img').first().height()
		$(element).find('more-features-feature .hover img').eq(1).css('height', height)
		if (this._lastHeight == height && height != 0) clearInterval(this._resizeInterval)
		this._lastHeight = height
    }
}
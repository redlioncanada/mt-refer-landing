import {Component, Input, Output, EventEmitter, ElementRef} from 'angular2/core'
import {LoggerService} from './services/logger.service'
import {GoogleApiService} from './services/googleapi.service'
import {VideoPlayer} from './landing.video-player'
import {LearnMoreButton} from './landing.learn-more.button'
import {AnalyticsServiceOn} from './analytics.directive'

declare var $: JQueryStatic;

@Component({
	selector: 'videoplayer-selector',
    template: `
    	<div (click)="select()" class="{{selected ? 'selected' : ''}}" analyticsOn="click" analyticsCategory="{{data.analytics.category}}" analyticsAction="{{data.analytics.action}}" analyticsLabel="{{data.analytics.label}}">
			<div class="wp-refer-landing-videoplayer-text">
				<div class="wp-refer-landing-videoplayer-title rl-mt-refer-landing-subtitle" [innerHtml]="data.ctaTitle"></div>
				<learn-more-button [text]="data.ctaText" [backgroundImage]="data.ctaBackground"></learn-more-button>
			</div>
			<img class="wp-refer-landing-videoplayer-background" src="{{data.thumb}}" alt="{{data.alt}}"/>
		</div>
    `,
    directives: [LearnMoreButton, AnalyticsServiceOn]
})
export class VideoPlayerSelector {
	@Input() data
	@Input() id
	@Input() selected
	@Output() selectedVideo = new EventEmitter()
	init: boolean
	ready: boolean
	_renderInterval: any

	constructor(private logger: LoggerService, private api: GoogleApiService, private elementRef: ElementRef) {
		this.ready = false
		this.selected = false
		this.init = false
	}

	ngOnInit() {
		let self = this
		if (this.data.id && this.data.id.length && !(this.data.desc && this.data.desc.length)) {
			this.api.video(this.data.id, function(data, err) {
				if (data && !err) {
					self.initialize(data)
				} else {
					self.logger.error(err)
				}
			})
		}
	}

	ngAfterViewInit() {
		let self = this
		this.init = true
	}

	initialize(data) {
		//assumes 1 result
		data = data.items[0];
		this.data.desc = data.snippet.description.replace(/\\n/g, '')
		this.ready = true
	}

	select() {
		this.selectedVideo.emit(this.id)
		this.selected = true
	}
}
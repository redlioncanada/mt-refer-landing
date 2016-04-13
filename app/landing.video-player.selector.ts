import {Component, View, Input, Output, EventEmitter} from 'angular2/core'
import {Logger} from './services/logger.service'
import {GoogleApi} from './services/googleapi.service'
import {VideoPlayer} from './landing.video-player'
import {LearnMoreButton} from './landing.learn-more.button'

@Component({
	selector: 'videoplayer-selector',
    template: `
    	<div (click)="select()" class="{{selected ? 'selected' : ''}}">
			<div class="wp-refer-landing-videoplayer-text">
				<div class="wp-refer-landing-videoplayer-title subtitle" [innerHtml]="data.ctaTitle"></div>
				<learn-more-button [text]="data.ctaText" [backgroundImage]="data.ctaBackground"></learn-more-button>
			</div>
			<img class="wp-refer-landing-videoplayer-background" src="{{data.thumb}}" alt="{{data.alt}}"/>
		</div>
    `,
    directives: [LearnMoreButton]
})
export class VideoPlayerSelector {
	@Input() data
	@Input() id
	@Input() selected
	@Output() selectedVideo = new EventEmitter()
	ready: boolean

	constructor(private logger: Logger, private api: GoogleApi) {
		this.ready = false
		this.selected = false
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

	initialize(data) {
		//assumes 1 result
		data = data.items[0];
		console.log(data)
		this.data.desc = data.snippet.description.replace(/\\n/g, '');
		this.ready = true
	}

	select() {
		this.selectedVideo.emit(this.id)
		this.selected = true
	}
}
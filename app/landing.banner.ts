import {Component, Input} from 'angular2/core'
import {LearnMoreButton} from './landing.learn-more.button'
import {AppData} from './services/appdata.service'
import {Logger} from './services/logger.service'

@Component({
    selector: 'banner',
    template: `
    <div class="{{!enabled ? 'hide': ''}}">
		<img src="{{image}}"/>
		<learn-more-button [analytics]="analytics" [link]="link" [text]="ctaText" [backgroundImage]="ctaBackground"></learn-more-button>
	</div>
    `,
    directives: [LearnMoreButton],
})
export class Banner {
	private ctaText: string
	private ctaBackground: string
	private link: string
	private image: string
	private enabled: boolean
	private analytics: Object

	constructor(private appdata: AppData, private logger: Logger) {
		this.enabled = true
		var data = appdata.get()
		this.enabled = data.banner.enabled
		this.link = data.banner.link
		this.image = data.banner.image
		this.ctaText = data.banner.ctaText
		this.ctaBackground = data.banner.ctaBackground
		this.analytics = data.banner.analytics
	}
}
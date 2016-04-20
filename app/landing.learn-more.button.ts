import {Component, Input, Inject} from 'angular2/core'
import {AnalyticsServiceOn} from './analytics.directive'

@Component({
    selector: 'learn-more-button',
    template: `
    	<a *ngIf="!!link" href="{{link}}" analyticsOn="click" analyticsCategory="{{analytics.category}}" analyticsAction="{{analytics.action}}" analyticsLabel="{{analytics.label}}" target="_blank">
    		<div class="learn-more-button {{arrow ? 'learn-more-arrow': ''}}">
				<p>{{text}}</p>
			</div>
			<img *ngIf="!!backgroundImage" src="{{backgroundImage}}"/>
		</a>
		<div *ngIf="!link">
			<div class="learn-more-button {{arrow ? 'learn-more-arrow': ''}}">
				<p>{{text}}</p>
			</div>
			<img *ngIf="!!backgroundImage" src="{{backgroundImage}}"/>
		</div>
    `,
    directives: [AnalyticsServiceOn]
})
export class LearnMoreButton {
	@Input() link
	@Input() text
	@Input() backgroundImage
	@Input() analytics
}
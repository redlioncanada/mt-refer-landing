import {Component, Input, Inject} from 'angular2/core'

@Component({
    selector: 'learn-more-button',
    template: `
    	<a href="{{link}}" target="_blank">
    		<div class="learn-more-button {{arrow ? 'learn-more-arrow': ''}}">
				<p>{{text}}</p>
			</div>
			<img *ngIf="!!backgroundImage" src="{{backgroundImage}}"/>
		</a>
    `
})
export class LearnMoreButton {
	@Input() link
	@Input() text
	@Input() backgroundImage
}
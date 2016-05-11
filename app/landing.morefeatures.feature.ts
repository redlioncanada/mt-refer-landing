import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {AnalyticsServiceOn} from './analytics.directive'

declare var $: JQueryStatic;

@Component({
    selector: 'more-features-feature',
    template: `
    	<a href="{{link}}" target="_blank" analyticsOn="click" analyticsCategory="{{analytics.category}}" analyticsAction="{{analytics.action}}" analyticsLabel="{{analytics.label}}"><div>
			<div>
				<div class="hover">
					<!-- <div class="text-container">
						<div class="text-container-cell">
							<p class="text">{{text}}</p>
							<p class="cta">{{cta}}</p>
						</div>
					</div> -->
					<img src="{{image}}" alt="{{alt}}"/>
				</div>
			</div>
			<p class="bottom-text">{{title}}</p>
		</div></a>
    `,
    directives: [AnalyticsServiceOn]
})
export class MoreFeaturesFeature {
    @Input() image
    @Input() title
    @Input() link
    @Input() text
    @Input() cta
    @Input() alt
    @Input() analytics
}
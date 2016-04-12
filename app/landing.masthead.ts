/// <reference path="../typings/jquery/jquery.d.ts" />
import {Component} from 'angular2/core';
import {AppData} from './services/appdata.service'

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
		</div>
    `
})
export class AppMasthead {
	private image: string
	private imageForeground: string
	private title: string
	private enabled: boolean
	private alt: string

	constructor(private appdata: AppData) {
		this.enabled = true
		var data = appdata.get()

		this.enabled = data.masthead.enabled
		this.image = data.masthead.image
		this.imageForeground = data.masthead.imageForeground
		this.title = data.masthead.title
		this.alt = data.masthead.alt
	}

	ngAfterViewInit() {
		setTimeout(function() {
			$('masthead .mt-landing-image').addClass('fade-in')
		}, 1000)
	}
}
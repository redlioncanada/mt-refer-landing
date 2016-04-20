import {Component, Input, Inject, ElementRef} from 'angular2/core'
import {AnalyticsServiceOn} from './analytics.directive'

declare var $: JQueryStatic;

@Component({
    selector: 'feature-button',
    template: `
        <a href="{{btnLink}}" analyticsOn="click" analyticsCategory="{{analytics.category}}" analyticsAction="{{analytics.action}}" analyticsLabel="{{analytics.label}}">
            <div class="mt-landing-feature-button" >
                <div class="mt-landing-feature-button-up">
                    <div class="mt-landing-feature-icon mt-landing-innerBtn"><img class="{{btnType}}" src={{btnIcon}} alt="{{btnAlt}}" /></div>
                    <div class="mt-landing-feature-title mt-landing-innerBtn">{{btnTitle}}</div>
                    <div class="mt-landing-feature-rule mt-landing-innerBtn"></div>
                </div>
                <div class="mt-landing-feature-button-over">
                    <div class="mt-landing-feature-button-over-container">
                        <div class="mt-landing-feature-button-over-table">
                            <div class="mt-landing-feature-button-over-table-cell">
                                <p class="mt-landing-over-copy">{{btnRollOverCopy}}</p>
                                <p class="mt-landing-over-cta">{{btnRollOverCTA}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-landing-feature-button-over-background"></div>
                </div>
            </div>
        </a>
    `,
    directives: [AnalyticsServiceOn]
})

export class FeatureButton {
    @Input() btnIcon
    @Input() btnTitle
    @Input() btnRollOverCopy
    @Input() btnRollOverCTA
    @Input() btnLink
    @Input() btnType
    @Input() btnAlt
    @Input() analytics

    private rootElement;
    private elementRef: ElementRef;
    private target;
    private targetWidth;
    private targetHeight;

    public constructor(@Inject(ElementRef) elementRef: ElementRef) {
        this.elementRef = elementRef
        this.rootElement = $(this.elementRef.nativeElement)
    }
    
    public playAnimations(bType:string){
        switch(bType) {
            case "cart":
                //TweenMax.to(this.target, 1, {delay:1.5, left:0, ease:Power3.easeOut});
                //TweenMax.to(this.target, 1, {delay:2, left:50, css: {transform:"rotate(5deg)"}, ease:Power3.easeOut});
                //TweenMax.to(this.target, .3, {delay:2.5, css: {transform:"rotate(0deg)"}, ease:Bounce.easeOut});
                //TweenMax.to(this.target, 1, {delay:6, left:150, opacity:0, ease:Power3.easeIn});
                TweenMax.to(this.target, 2, {delay:1, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                break;
            case "star":
                //TweenMax.to(this.target, 1, {delay:2.2, top: 0, ease:Bounce.easeOut});
                //TweenMax.to(this.target, 1, {delay:6, top:150, opacity:0, ease:Power3.easeIn});
                TweenMax.to(this.target, 2, {delay:1.3, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                break;
            case "magnifier":
                TweenMax.to(this.target, 2, {delay:1.6, css: {transform:"scale(1)"}, ease:Elastic.easeOut});
                //TweenMax.to(this.target, 1, {delay:6, opacity:0, ease:Power3.easeIn});
                break;
            }
    }

    public resetAnimations(){
            switch(this.btnType) {
            case "cart":
                //TweenMax.to(this.target, 0, {delay:0, opacity:1, left:-150, ease:Power3.easeOut});
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            case "star":
                //TweenMax.to(this.target, 0, {delay:0, opacity:1, top:-160, ease:Power3.easeOut});
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            case "magnifier":
                TweenMax.to(this.target, 0, {delay:0, opacity:1, css: { transform: "scale(0.01)" }, ease:Power3.easeOut});
                break;
            }
             this.playAnimations(this.btnType);
    }

    private ngAfterViewInit() {
        this.target = $(this.rootElement).find('img')
        this.targetWidth = $(this.rootElement).find('img').parent().width()
        this.targetHeight = $(this.rootElement).find('img').parent().height()

       this.resetAnimations();
    }
}
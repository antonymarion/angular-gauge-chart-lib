/**
 * Angular 2 decorators and services
 */
import { Component, Input, ViewChild, } from '@angular/core';
import * as GaugeChart from 'gauge-chart';
import * as i0 from "@angular/core";
const _c0 = ["gaugeArea"];
/**
 * GaugeChart Component
 */
export class GaugeChartComponent {
    ngOnInit() {
        // calculate styles for name and bottomLabel
        if (this.name) {
            if (!this.nameFont) {
                this.nameFont = '' + Math.round(this.canvasWidth / 15);
            }
            this.nameMargin = '' + Math.round(+this.nameFont / 4);
        }
        if (this.bottomLabel) {
            if (!this.bottomLabelFont) {
                this.bottomLabelFont = '' + Math.round(this.canvasWidth / 10);
            }
            this.bottomLabelMargin = '-' + this.bottomLabelFont;
        }
        if (this.optionsCheck()) {
            this.element = this.gaugeArea.nativeElement;
            this.drawChart();
        }
        this.oldOptions = JSON.parse(JSON.stringify(this.options));
    }
    optionsCheck() {
        if (this.canvasWidth == null) {
            console.warn('gauge-chart warning: canvasWidth is not specified!');
            return false;
        }
        else if (this.needleValue == null) {
            console.warn('gauge-chart warning: needleValue is not specified!');
            return false;
        }
        if (this.centralLabel == null) {
            this.centralLabel = '';
        }
        return true;
    }
    ngDoCheck() {
        if (!this.areEqual(this.options, this.oldOptions)) {
            this.drawChart(true);
            this.oldOptions = JSON.parse(JSON.stringify(this.options));
        }
    }
    areEqual(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    drawChart(redraw = false) {
        if (redraw) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
        this.gaugeChart.updateNeedle(this.needleValue);
    }
    ngOnChanges(changes) {
        if (changes.needleValue && !changes.needleValue.firstChange) {
            this.needleValue = changes.needleValue.currentValue;
            this.gaugeChart.updateNeedle(this.needleValue);
        }
        if (changes.centralLabel && !changes.centralLabel.firstChange) {
            this.centralLabel = changes.centralLabel.currentValue;
            this.drawChart(true);
        }
    }
}
GaugeChartComponent.ɵfac = function GaugeChartComponent_Factory(t) { return new (t || GaugeChartComponent)(); };
GaugeChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GaugeChartComponent, selectors: [["rg-gauge-chart"]], viewQuery: function GaugeChartComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.gaugeArea = _t.first);
    } }, inputs: { canvasWidth: "canvasWidth", needleValue: "needleValue", centralLabel: "centralLabel", options: "options", wrapOptions: "wrapOptions", name: "name", nameFont: "nameFont", bottomLabel: "bottomLabel", bottomLabelFont: "bottomLabelFont" }, features: [i0.ɵɵNgOnChangesFeature()], decls: 7, vars: 12, consts: [[1, "gauge-chart"], ["gaugeArea", ""], [1, "gauge-chart__label"]], template: function GaugeChartComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "div", null, 1);
        i0.ɵɵelementStart(5, "span", 2);
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("width", ctx.canvasWidth, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("font-size", ctx.nameFont, "px")("margin-bottom", ctx.nameMargin, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.name, " ");
        i0.ɵɵadvance(3);
        i0.ɵɵstyleProp("font-size", ctx.bottomLabelFont, "px")("margin-top", ctx.bottomLabelMargin, "px");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.bottomLabel, " ");
    } }, styles: ["*[_ngcontent-%COMP%]{font-family:Roboto,'Helvetica Neue',sans-serif}.gauge-chart[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center}.gauge-chart__label[_ngcontent-%COMP%]{font-weight:700}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GaugeChartComponent, [{
        type: Component,
        args: [{
                selector: 'rg-gauge-chart',
                templateUrl: './gauge-chart.component.html',
                styleUrls: ['./gauge-chart.component.css'],
            }]
    }], null, { gaugeArea: [{
            type: ViewChild,
            args: ['gaugeArea', { static: true }]
        }], canvasWidth: [{
            type: Input
        }], needleValue: [{
            type: Input
        }], centralLabel: [{
            type: Input
        }], options: [{
            type: Input
        }], wrapOptions: [{
            type: Input
        }], name: [{
            type: Input
        }], nameFont: [{
            type: Input
        }], bottomLabel: [{
            type: Input
        }], bottomLabelFont: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiLCJsaWIvZ2F1Z2UtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLENBQUE7OztBQUV6Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7SUFvQjlCLFFBQVE7UUFDTiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ3REO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUE7YUFDOUQ7WUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUE7U0FDcEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUN2QixJQUFJLENBQUMsT0FB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QURFLHlDQUNGO1FBSUUsZUFBc0M7UUFBdEMsc0RBQXNDLDJDQUFBO1FBRXRDLGVBQ0Y7UUFERSxnREFDRjs7a0REU1csbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7a0JBRUUsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrQkFFdkMsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSzs7a0JBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQW5ndWxhciAyIGRlY29yYXRvcnMgYW5kIHNlcnZpY2VzXG4gKi9cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIERvQ2hlY2ssXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgKiBhcyBHYXVnZUNoYXJ0IGZyb20gJ2dhdWdlLWNoYXJ0J1xuXG4vKipcbiAqIEdhdWdlQ2hhcnQgQ29tcG9uZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3JnLWdhdWdlLWNoYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dhdWdlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHYXVnZUNoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIERvQ2hlY2sge1xuICBAVmlld0NoaWxkKCdnYXVnZUFyZWEnLCB7IHN0YXRpYzogdHJ1ZSB9KSBnYXVnZUFyZWFcblxuICBASW5wdXQoKSBjYW52YXNXaWR0aDogbnVtYmVyXG4gIEBJbnB1dCgpIG5lZWRsZVZhbHVlOiBudW1iZXJcbiAgQElucHV0KCkgY2VudHJhbExhYmVsOiBzdHJpbmdcbiAgQElucHV0KCkgb3B0aW9uc1xuICBASW5wdXQoKSB3cmFwT3B0aW9ucz9cbiAgQElucHV0KCkgbmFtZT86IHN0cmluZ1xuICBASW5wdXQoKSBuYW1lRm9udD86IHN0cmluZ1xuICBASW5wdXQoKSBib3R0b21MYWJlbD86IHN0cmluZ1xuICBASW5wdXQoKSBib3R0b21MYWJlbEZvbnQ/OiBzdHJpbmdcblxuICBwdWJsaWMgbmFtZU1hcmdpbjogc3RyaW5nXG4gIHB1YmxpYyBib3R0b21MYWJlbE1hcmdpbjogc3RyaW5nXG5cbiAgcHJpdmF0ZSBlbGVtZW50XG4gIHByaXZhdGUgZ2F1Z2VDaGFydDogYW55XG4gIHByaXZhdGUgb2xkT3B0aW9uc1xuXG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNhbGN1bGF0ZSBzdHlsZXMgZm9yIG5hbWUgYW5kIGJvdHRvbUxhYmVsXG4gICAgaWYgKHRoaXMubmFtZSkge1xuICAgICAgaWYgKCF0aGlzLm5hbWVGb250KSB7XG4gICAgICAgIHRoaXMubmFtZUZvbnQgPSAnJyArIE1hdGgucm91bmQodGhpcy5jYW52YXNXaWR0aCAvIDE1KVxuICAgICAgfVxuICAgICAgdGhpcy5uYW1lTWFyZ2luID0gJycgKyBNYXRoLnJvdW5kKCt0aGlzLm5hbWVGb250IC8gNClcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ib3R0b21MYWJlbCkge1xuICAgICAgaWYgKCF0aGlzLmJvdHRvbUxhYmVsRm9udCkge1xuICAgICAgICB0aGlzLmJvdHRvbUxhYmVsRm9udCA9ICcnICsgTWF0aC5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoIC8gMTApXG4gICAgICB9XG4gICAgICB0aGlzLmJvdHRvbUxhYmVsTWFyZ2luID0gJy0nICsgdGhpcy5ib3R0b21MYWJlbEZvbnRcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zQ2hlY2soKSkge1xuICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5nYXVnZUFyZWEubmF0aXZlRWxlbWVudFxuICAgICAgdGhpcy5kcmF3Q2hhcnQoKVxuICAgIH1cbiAgICB0aGlzLm9sZE9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpXG4gIH1cblxuICBvcHRpb25zQ2hlY2soKSB7XG4gICAgaWYgKHRoaXMuY2FudmFzV2lkdGggPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBjYW52YXNXaWR0aCBpcyBub3Qgc3BlY2lmaWVkIScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2UgaWYgKHRoaXMubmVlZGxlVmFsdWUgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS53YXJuKCdnYXVnZS1jaGFydCB3YXJuaW5nOiBuZWVkbGVWYWx1ZSBpcyBub3Qgc3BlY2lmaWVkIScpXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgaWYgKHRoaXMuY2VudHJhbExhYmVsID09IG51bGwpIHtcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gJydcbiAgICB9XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIG5nRG9DaGVjaygpIHtcbiAgICBpZiAoIXRoaXMuYXJlRXF1YWwodGhpcy5vcHRpb25zLCB0aGlzLm9sZE9wdGlvbnMpKSB7XG4gICAgICB0aGlzLmRyYXdDaGFydCh0cnVlKVxuICAgICAgdGhpcy5vbGRPcHRpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm9wdGlvbnMpKVxuICAgIH1cbiAgfVxuXG4gIGFyZUVxdWFsKG9iajEsIG9iajIpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqMSkgPT09IEpTT04uc3RyaW5naWZ5KG9iajIpXG4gIH1cblxuICBkcmF3Q2hhcnQocmVkcmF3ID0gZmFsc2UpIHtcbiAgICBpZiAocmVkcmF3KSB7XG4gICAgICB0aGlzLmdhdWdlQ2hhcnQucmVtb3ZlR2F1Z2UoKVxuICAgIH1cbiAgICB0aGlzLm9wdGlvbnMuY2VudHJhbExhYmVsID0gdGhpcy5jZW50cmFsTGFiZWxcbiAgICB0aGlzLmdhdWdlQ2hhcnQgPSBHYXVnZUNoYXJ0LmdhdWdlQ2hhcnQoXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLmNhbnZhc1dpZHRoLFxuICAgICAgdGhpcy5vcHRpb25zLFxuICAgIClcbiAgICB0aGlzLmdhdWdlQ2hhcnQudXBkYXRlTmVlZGxlKHRoaXMubmVlZGxlVmFsdWUpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMubmVlZGxlVmFsdWUgJiYgIWNoYW5nZXMubmVlZGxlVmFsdWUuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMubmVlZGxlVmFsdWUgPSBjaGFuZ2VzLm5lZWRsZVZhbHVlLmN1cnJlbnRWYWx1ZVxuICAgICAgdGhpcy5nYXVnZUNoYXJ0LnVwZGF0ZU5lZWRsZSh0aGlzLm5lZWRsZVZhbHVlKVxuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5jZW50cmFsTGFiZWwgJiYgIWNoYW5nZXMuY2VudHJhbExhYmVsLmZpcnN0Q2hhbmdlKSB7XG4gICAgICB0aGlzLmNlbnRyYWxMYWJlbCA9IGNoYW5nZXMuY2VudHJhbExhYmVsLmN1cnJlbnRWYWx1ZVxuICAgICAgdGhpcy5kcmF3Q2hhcnQodHJ1ZSlcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJnYXVnZS1jaGFydFwiIFtzdHlsZS53aWR0aC5weF09XCJjYW52YXNXaWR0aFwiPlxuICA8c3BhblxuICAgIFtzdHlsZS5mb250LXNpemUucHhdPVwibmFtZUZvbnRcIlxuICAgIFtzdHlsZS5tYXJnaW4tYm90dG9tLnB4XT1cIm5hbWVNYXJnaW5cIj5cbiAgICB7e25hbWV9fVxuICA8L3NwYW4+XG4gIDxkaXYgI2dhdWdlQXJlYT48L2Rpdj5cbiAgPHNwYW5cbiAgICBjbGFzcz1cImdhdWdlLWNoYXJ0X19sYWJlbFwiXG4gICAgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJib3R0b21MYWJlbEZvbnRcIlxuICAgIFtzdHlsZS5tYXJnaW4tdG9wLnB4XT1cImJvdHRvbUxhYmVsTWFyZ2luXCI+XG4gICAge3tib3R0b21MYWJlbH19XG4gIDwvc3Bhbj5cbjwvZGl2PlxuIl19
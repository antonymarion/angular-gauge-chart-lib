/**
 * Angular 2 decorators and services
 */
import { Component, Input, ViewChild, } from '@angular/core';
import * as GaugeChart from 'gauge-chart';
import * as i0 from "@angular/core";
var _c0 = ["gaugeArea"];
/**
 * GaugeChart Component
 */
var GaugeChartComponent = /** @class */ (function () {
    function GaugeChartComponent() {
    }
    GaugeChartComponent.prototype.ngOnInit = function () {
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
    };
    GaugeChartComponent.prototype.optionsCheck = function () {
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
    };
    GaugeChartComponent.prototype.ngDoCheck = function () {
        if (!this.areEqual(this.options, this.oldOptions)) {
            this.drawChart(true);
            this.oldOptions = JSON.parse(JSON.stringify(this.options));
        }
    };
    GaugeChartComponent.prototype.areEqual = function (obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    };
    GaugeChartComponent.prototype.drawChart = function (redraw) {
        if (redraw === void 0) { redraw = false; }
        if (redraw) {
            this.gaugeChart.removeGauge();
        }
        this.options.centralLabel = this.centralLabel;
        this.gaugeChart = GaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
        this.gaugeChart.updateNeedle(this.needleValue);
    };
    GaugeChartComponent.prototype.ngOnChanges = function (changes) {
        if (changes.needleValue && !changes.needleValue.firstChange) {
            this.needleValue = changes.needleValue.currentValue;
            this.gaugeChart.updateNeedle(this.needleValue);
        }
        if (changes.centralLabel && !changes.centralLabel.firstChange) {
            this.centralLabel = changes.centralLabel.currentValue;
            this.drawChart(true);
        }
    };
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
    return GaugeChartComponent;
}());
export { GaugeChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F1Z2UtY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vYW5ndWxhci1nYXVnZS1jaGFydC8iLCJzb3VyY2VzIjpbImxpYi9nYXVnZS1jaGFydC5jb21wb25lbnQudHMiLCJsaWIvZ2F1Z2UtY2hhcnQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSCxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFHTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLENBQUE7OztBQUV6Qzs7R0FFRztBQUNIO0lBQUE7S0FnR0M7SUF2RUMsc0NBQVEsR0FBUjtRQUNFLDRDQUE0QztRQUM1QyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxDQUFBO2FBQ3ZEO1lBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDdEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUMsQ0FBQTthQUM5RDtZQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQTtTQUNwRDtRQUVELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFP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RCxlQUErQjtZQUEvQiwrQ0FBK0IsdUNBQUE7WUFFL0IsZUFDRjtZQURFLHlDQUNGO1lBSUUsZUFBc0M7WUFBdEMsc0RBQXNDLDJDQUFBO1lBRXRDLGVBQ0Y7WUFERSxnREFDRjs7OEJEWkY7Q0FnSEMsQUFoR0QsSUFnR0M7U0EzRlksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztrQkFFRSxTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O2tCQUV2QyxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLOztrQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBbmd1bGFyIDIgZGVjb3JhdG9ycyBhbmQgc2VydmljZXNcbiAqL1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIFZpZXdDaGlsZCxcbiAgRG9DaGVjayxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCAqIGFzIEdhdWdlQ2hhcnQgZnJvbSAnZ2F1Z2UtY2hhcnQnXG5cbi8qKlxuICogR2F1Z2VDaGFydCBDb21wb25lbnRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncmctZ2F1Z2UtY2hhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2F1Z2UtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nYXVnZS1jaGFydC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdhdWdlQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgRG9DaGVjayB7XG4gIEBWaWV3Q2hpbGQoJ2dhdWdlQXJlYScsIHsgc3RhdGljOiB0cnVlIH0pIGdhdWdlQXJlYVxuXG4gIEBJbnB1dCgpIGNhbnZhc1dpZHRoOiBudW1iZXJcbiAgQElucHV0KCkgbmVlZGxlVmFsdWU6IG51bWJlclxuICBASW5wdXQoKSBjZW50cmFsTGFiZWw6IHN0cmluZ1xuICBASW5wdXQoKSBvcHRpb25zXG4gIEBJbnB1dCgpIHdyYXBPcHRpb25zP1xuICBASW5wdXQoKSBuYW1lPzogc3RyaW5nXG4gIEBJbnB1dCgpIG5hbWVGb250Pzogc3RyaW5nXG4gIEBJbnB1dCgpIGJvdHRvbUxhYmVsPzogc3RyaW5nXG4gIEBJbnB1dCgpIGJvdHRvbUxhYmVsRm9udD86IHN0cmluZ1xuXG4gIHB1YmxpYyBuYW1lTWFyZ2luOiBzdHJpbmdcbiAgcHVibGljIGJvdHRvbUxhYmVsTWFyZ2luOiBzdHJpbmdcblxuICBwcml2YXRlIGVsZW1lbnRcbiAgcHJpdmF0ZSBnYXVnZUNoYXJ0OiBhbnlcbiAgcHJpdmF0ZSBvbGRPcHRpb25zXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgLy8gY2FsY3VsYXRlIHN0eWxlcyBmb3IgbmFtZSBhbmQgYm90dG9tTGFiZWxcbiAgICBpZiAodGhpcy5uYW1lKSB7XG4gICAgICBpZiAoIXRoaXMubmFtZUZvbnQpIHtcbiAgICAgICAgdGhpcy5uYW1lRm9udCA9ICcnICsgTWF0aC5yb3VuZCh0aGlzLmNhbnZhc1dpZHRoIC8gMTUpXG4gICAgICB9XG4gICAgICB0aGlzLm5hbWVNYXJnaW4gPSAnJyArIE1hdGgucm91bmQoK3RoaXMubmFtZUZvbnQgLyA0KVxuICAgIH1cblxuICAgIGlmICh0aGlzLmJvdHRvbUxhYmVsKSB7XG4gICAgICBpZiAoIXRoaXMuYm90dG9tTGFiZWxGb250KSB7XG4gICAgICAgIHRoaXMuYm90dG9tTGFiZWxGb250ID0gJycgKyBNYXRoLnJvdW5kKHRoaXMuY2FudmFzV2lkdGggLyAxMClcbiAgICAgIH1cbiAgICAgIHRoaXMuYm90dG9tTGFiZWxNYXJnaW4gPSAnLScgKyB0aGlzLmJvdHRvbUxhYmVsRm9udFxuICAgIH1cblxuICAgIGlmICh0aGlzLm9wdGlvbnNDaGVjaygpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdhdWdlQXJlYS5uYXRpdmVFbGVtZW50XG4gICAgICB0aGlzLmRyYXdDaGFydCgpXG4gICAgfVxuICAgIHRoaXMub2xkT3B0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zKSlcbiAgfVxuXG4gIG9wdGlvbnNDaGVjaygpIHtcbiAgICBpZiAodGhpcy5jYW52YXNXaWR0aCA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IGNhbnZhc1dpZHRoIGlzIG5vdCBzcGVjaWZpZWQhJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH0gZWxzZSBpZiAodGhpcy5uZWVkbGVWYWx1ZSA9PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ2dhdWdlLWNoYXJ0IHdhcm5pbmc6IG5lZWRsZVZhbHVlIGlzIG5vdCBzcGVjaWZpZWQhJylcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBpZiAodGhpcy5jZW50cmFsTGFiZWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jZW50cmFsTGFiZWwgPSAnJ1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGlmICghdGhpcy5hcmVFcXVhbCh0aGlzLm9wdGlvbnMsIHRoaXMub2xkT3B0aW9ucykpIHtcbiAgICAgIHRoaXMuZHJhd0NoYXJ0KHRydWUpXG4gICAgICB0aGlzLm9sZE9wdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMub3B0aW9ucykpXG4gICAgfVxuICB9XG5cbiAgYXJlRXF1YWwob2JqMSwgb2JqMikge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmoxKSA9PT0gSlNPTi5zdHJpbmdpZnkob2JqMilcbiAgfVxuXG4gIGRyYXdDaGFydChyZWRyYXcgPSBmYWxzZSkge1xuICAgIGlmIChyZWRyYXcpIHtcbiAgICAgIHRoaXMuZ2F1Z2VDaGFydC5yZW1vdmVHYXVnZSgpXG4gICAgfVxuICAgIHRoaXMub3B0aW9ucy5jZW50cmFsTGFiZWwgPSB0aGlzLmNlbnRyYWxMYWJlbFxuICAgIHRoaXMuZ2F1Z2VDaGFydCA9IEdhdWdlQ2hhcnQuZ2F1Z2VDaGFydChcbiAgICAgIHRoaXMuZWxlbWVudCxcbiAgICAgIHRoaXMuY2FudmFzV2lkdGgsXG4gICAgICB0aGlzLm9wdGlvbnMsXG4gICAgKVxuICAgIHRoaXMuZ2F1Z2VDaGFydC51cGRhdGVOZWVkbGUodGhpcy5uZWVkbGVWYWx1ZSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlcy5uZWVkbGVWYWx1ZSAmJiAhY2hhbmdlcy5uZWVkbGVWYWx1ZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5uZWVkbGVWYWx1ZSA9IGNoYW5nZXMubmVlZGxlVmFsdWUuY3VycmVudFZhbHVlXG4gICAgICB0aGlzLmdhdWdlQ2hhcnQudXBkYXRlTmVlZGxlKHRoaXMubmVlZGxlVmFsdWUpXG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLmNlbnRyYWxMYWJlbCAmJiAhY2hhbmdlcy5jZW50cmFsTGFiZWwuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuY2VudHJhbExhYmVsID0gY2hhbmdlcy5jZW50cmFsTGFiZWwuY3VycmVudFZhbHVlXG4gICAgICB0aGlzLmRyYXdDaGFydCh0cnVlKVxuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImdhdWdlLWNoYXJ0XCIgW3N0eWxlLndpZHRoLnB4XT1cImNhbnZhc1dpZHRoXCI+XG4gIDxzcGFuXG4gICAgW3N0eWxlLmZvbnQtc2l6ZS5weF09XCJuYW1lRm9udFwiXG4gICAgW3N0eWxlLm1hcmdpbi1ib3R0b20ucHhdPVwibmFtZU1hcmdpblwiPlxuICAgIHt7bmFtZX19XG4gIDwvc3Bhbj5cbiAgPGRpdiAjZ2F1Z2VBcmVhPjwvZGl2PlxuICA8c3BhblxuICAgIGNsYXNzPVwiZ2F1Z2UtY2hhcnRfX2xhYmVsXCJcbiAgICBbc3R5bGUuZm9udC1zaXplLnB4XT1cImJvdHRvbUxhYmVsRm9udFwiXG4gICAgW3N0eWxlLm1hcmdpbi10b3AucHhdPVwiYm90dG9tTGFiZWxNYXJnaW5cIj5cbiAgICB7e2JvdHRvbUxhYmVsfX1cbiAgPC9zcGFuPlxuPC9kaXY+XG4iXX0=
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('gauge-chart')) :
    typeof define === 'function' && define.amd ? define('angular-gauge-chart', ['exports', '@angular/core', 'gauge-chart'], factory) :
    (global = global || self, factory(global['angular-gauge-chart'] = {}, global.ng.core, global.gaugeChart));
}(this, (function (exports, core, gaugeChart) { 'use strict';

    /**
     * Angular 2 decorators and services
     */
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
            this.gaugeChart = gaugeChart.gaugeChart(this.element, this.canvasWidth, this.options);
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
        GaugeChartComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: GaugeChartComponent, selectors: [["rg-gauge-chart"]], viewQuery: function GaugeChartComponent_Query(rf, ctx) { if (rf & 1) {
                core["ɵɵstaticViewQuery"](_c0, true);
            } if (rf & 2) {
                var _t;
                core["ɵɵqueryRefresh"](_t = core["ɵɵloadQuery"]()) && (ctx.gaugeArea = _t.first);
            } }, inputs: { canvasWidth: "canvasWidth", needleValue: "needleValue", centralLabel: "centralLabel", options: "options", wrapOptions: "wrapOptions", name: "name", nameFont: "nameFont", bottomLabel: "bottomLabel", bottomLabelFont: "bottomLabelFont" }, features: [core["ɵɵNgOnChangesFeature"]()], decls: 7, vars: 12, consts: [[1, "gauge-chart"], ["gaugeArea", ""], [1, "gauge-chart__label"]], template: function GaugeChartComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "div", 0);
                core["ɵɵelementStart"](1, "span");
                core["ɵɵtext"](2);
                core["ɵɵelementEnd"]();
                core["ɵɵelement"](3, "div", null, 1);
                core["ɵɵelementStart"](5, "span", 2);
                core["ɵɵtext"](6);
                core["ɵɵelementEnd"]();
                core["ɵɵelementEnd"]();
            } if (rf & 2) {
                core["ɵɵstyleProp"]("width", ctx.canvasWidth, "px");
                core["ɵɵadvance"](1);
                core["ɵɵstyleProp"]("font-size", ctx.nameFont, "px")("margin-bottom", ctx.nameMargin, "px");
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"](" ", ctx.name, " ");
                core["ɵɵadvance"](3);
                core["ɵɵstyleProp"]("font-size", ctx.bottomLabelFont, "px")("margin-top", ctx.bottomLabelMargin, "px");
                core["ɵɵadvance"](1);
                core["ɵɵtextInterpolate1"](" ", ctx.bottomLabel, " ");
            } }, styles: ["*[_ngcontent-%COMP%]{font-family:Roboto,'Helvetica Neue',sans-serif}.gauge-chart[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;text-align:center}.gauge-chart__label[_ngcontent-%COMP%]{font-weight:700}"] });
        return GaugeChartComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](GaugeChartComponent, [{
            type: core.Component,
            args: [{
                    selector: 'rg-gauge-chart',
                    templateUrl: './gauge-chart.component.html',
                    styleUrls: ['./gauge-chart.component.css'],
                }]
        }], null, { gaugeArea: [{
                type: core.ViewChild,
                args: ['gaugeArea', { static: true }]
            }], canvasWidth: [{
                type: core.Input
            }], needleValue: [{
                type: core.Input
            }], centralLabel: [{
                type: core.Input
            }], options: [{
                type: core.Input
            }], wrapOptions: [{
                type: core.Input
            }], name: [{
                type: core.Input
            }], nameFont: [{
                type: core.Input
            }], bottomLabel: [{
                type: core.Input
            }], bottomLabelFont: [{
                type: core.Input
            }] }); })();

    var GaugeChartModule = /** @class */ (function () {
        function GaugeChartModule() {
        }
        GaugeChartModule.ɵmod = core["ɵɵdefineNgModule"]({ type: GaugeChartModule });
        GaugeChartModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function GaugeChartModule_Factory(t) { return new (t || GaugeChartModule)(); }, imports: [[]] });
        return GaugeChartModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](GaugeChartModule, { declarations: [GaugeChartComponent], exports: [GaugeChartComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](GaugeChartModule, [{
            type: core.NgModule,
            args: [{
                    imports: [],
                    declarations: [GaugeChartComponent],
                    exports: [GaugeChartComponent],
                }]
        }], null, null); })();

    exports.GaugeChartComponent = GaugeChartComponent;
    exports.GaugeChartModule = GaugeChartModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-gauge-chart.umd.js.map

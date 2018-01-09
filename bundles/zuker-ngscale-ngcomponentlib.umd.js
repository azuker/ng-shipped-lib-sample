(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.zukerNgscaleNgcomponentlib = global.zukerNgscaleNgcomponentlib || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LibComponent = (function () {
    function LibComponent() {
        this.name = 'Angular Library';
    }
    LibComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'my-lib',
                    template: "<h2>Hello {{name}}</h2> ",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    LibComponent.ctorParameters = function () { return []; };
    return LibComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LibService = (function () {
    function LibService() {
    }
    /**
     * @return {?}
     */
    LibService.prototype.getMeaning = /**
     * @return {?}
     */
    function () { return 42; };
    LibService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    LibService.ctorParameters = function () { return []; };
    return LibService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LibModule = (function () {
    function LibModule() {
    }
    LibModule.decorators = [
        { type: _angular_core.NgModule, args: [{
                    declarations: [LibComponent],
                    providers: [LibService],
                    exports: [LibComponent]
                },] },
    ];
    /** @nocollapse */
    LibModule.ctorParameters = function () { return []; };
    return LibModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

exports.LibComponent = LibComponent;
exports.LibService = LibService;
exports.LibModule = LibModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=zuker-ngscale-ngcomponentlib.umd.js.map

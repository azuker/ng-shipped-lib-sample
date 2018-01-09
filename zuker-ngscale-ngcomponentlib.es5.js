import { Component, Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LibComponent = (function () {
    function LibComponent() {
        this.name = 'Angular Library';
    }
    LibComponent.decorators = [
        { type: Component, args: [{
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
        { type: Injectable },
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
        { type: NgModule, args: [{
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

export { LibComponent, LibService, LibModule };
//# sourceMappingURL=zuker-ngscale-ngcomponentlib.es5.js.map

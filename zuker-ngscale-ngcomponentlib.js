import { Component, Injectable, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LibComponent {
    constructor() {
        this.name = 'Angular Library';
    }
}
LibComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-lib',
                template: "<h2>Hello {{name}}</h2> ",
                styles: [""]
            },] },
];
/** @nocollapse */
LibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LibService {
    constructor() { }
    /**
     * @return {?}
     */
    getMeaning() { return 42; }
}
LibService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LibService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LibModule {
}
LibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [LibComponent],
                providers: [LibService],
                exports: [LibComponent]
            },] },
];
/** @nocollapse */
LibModule.ctorParameters = () => [];

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
//# sourceMappingURL=zuker-ngscale-ngcomponentlib.js.map

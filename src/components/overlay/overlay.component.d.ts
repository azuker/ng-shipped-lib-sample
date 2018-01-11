export declare type OverlayAnimationKindType = 'topToBottom' | 'leftToRight' | 'custom';
export declare class OverlayComponent {
    topToBottomActive: boolean;
    leftToRightActive: boolean;
    customTrigger: boolean;
    overlayAnimationKind: OverlayAnimationKindType;
    toggleOverlayInternal(value?: boolean): void;
    toggleOverlay(value?: boolean): void;
}

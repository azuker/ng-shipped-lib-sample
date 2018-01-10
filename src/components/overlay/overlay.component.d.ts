export declare type OverlayAnimationKindType = 'topToBottom' | 'leftToRight' | 'custom';
export declare class OverlayComponent {
    topToBottomActive: boolean;
    leftToRightActive: boolean;
    customTrigger: boolean;
    overlayAnimationKind: OverlayAnimationKindType;
    private toggleOverlayInternal(value?);
    toggleOverlay(value?: boolean): void;
}

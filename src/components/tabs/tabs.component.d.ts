import { QueryList, TemplateRef, EventEmitter, SimpleChanges, OnChanges, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { TabsPresenterDirective } from './tabs-presenter.directive';
export declare class TabsComponent implements OnChanges, AfterContentInit {
    tabs: QueryList<TabComponent>;
    headerTemplate: TemplateRef<any>;
    contentTemplate: TemplateRef<any>;
    tabsPresenter: TabsPresenterDirective;
    defaultTabsPresenterTemplate: TemplateRef<any>;
    defaultContentTemplate: TemplateRef<any>;
    defaultHeaderTemplate: TemplateRef<any>;
    tabsContentTemplate: TemplateRef<any>;
    selectionChanged: EventEmitter<TabComponent>;
    selectedTab: TabComponent;
    readonly tabsPresenterTemplate: TemplateRef<any>;
    readonly tabContentTemplate: TemplateRef<any>;
    readonly tabHeaderTemplate: TemplateRef<any>;
    ngOnChanges(changes: SimpleChanges): void;
    selectTab(tab: TabComponent): void;
    ngAfterContentInit(): void;
}

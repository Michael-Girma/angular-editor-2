import { NgModule } from '@angular/core';
import { AngularEditorComponent } from './angular-editor.component';
import { AngularEditorToolbarComponent } from './angular-editor-toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
import * as i0 from "@angular/core";
export class AngularEditorModule {
}
AngularEditorModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: AngularEditorModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularEditorModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.2", ngImport: i0, type: AngularEditorModule, declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent], imports: [CommonModule, FormsModule, ReactiveFormsModule], exports: [AngularEditorComponent, AngularEditorToolbarComponent] });
AngularEditorModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: AngularEditorModule, imports: [CommonModule, FormsModule, ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.2", ngImport: i0, type: AngularEditorModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule, FormsModule, ReactiveFormsModule
                    ],
                    declarations: [AngularEditorComponent, AngularEditorToolbarComponent, AeSelectComponent],
                    exports: [AngularEditorComponent, AngularEditorToolbarComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1lZGl0b3Ivc3JjL2xpYi9hbmd1bGFyLWVkaXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDOztBQVNwRSxNQUFNLE9BQU8sbUJBQW1COztnSEFBbkIsbUJBQW1CO2lIQUFuQixtQkFBbUIsaUJBSGYsc0JBQXNCLEVBQUUsNkJBQTZCLEVBQUUsaUJBQWlCLGFBRnJGLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLGFBR3RDLHNCQUFzQixFQUFFLDZCQUE2QjtpSEFFcEQsbUJBQW1CLFlBTDVCLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1COzJGQUtyQyxtQkFBbUI7a0JBUC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CO3FCQUMvQztvQkFDRCxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSw2QkFBNkIsRUFBRSxpQkFBaUIsQ0FBQztvQkFDeEYsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsNkJBQTZCLENBQUM7aUJBQ2pFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0FuZ3VsYXJFZGl0b3JDb21wb25lbnR9IGZyb20gJy4vYW5ndWxhci1lZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7QW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnR9IGZyb20gJy4vYW5ndWxhci1lZGl0b3ItdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBZVNlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vYWUtc2VsZWN0L2FlLXNlbGVjdC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtBbmd1bGFyRWRpdG9yQ29tcG9uZW50LCBBbmd1bGFyRWRpdG9yVG9vbGJhckNvbXBvbmVudCwgQWVTZWxlY3RDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQW5ndWxhckVkaXRvckNvbXBvbmVudCwgQW5ndWxhckVkaXRvclRvb2xiYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJFZGl0b3JNb2R1bGUge1xufVxuIl19
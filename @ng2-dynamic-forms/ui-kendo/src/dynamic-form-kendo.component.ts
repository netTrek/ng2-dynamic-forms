import {Component, Input, Output, EventEmitter, ContentChild, TemplateRef} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {DynamicFormControlComponent, DynamicFormControlModel} from "@ng2-dynamic-forms/core";

export const DYNAMIC_FORM_UI_KENDO = "KENDO";

@Component({

    moduleId: module.id,
    selector: "dynamic-form-kendo-control",
    templateUrl: "./dynamic-form-kendo.component.html"
})

export class DynamicFormKendoComponent extends DynamicFormControlComponent {

    @Input() bindId: boolean = true;
    @Input() controlGroup: FormGroup;
    @Input() model: DynamicFormControlModel;
    @Input() nestedTemplate: TemplateRef<any>;

    @Output() blur: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();
    @Output() change: EventEmitter<Event> = new EventEmitter<Event>();
    @Output() focus: EventEmitter<FocusEvent> = new EventEmitter<FocusEvent>();

    @ContentChild(TemplateRef) customTemplate;

    readonly type: string = DYNAMIC_FORM_UI_KENDO;

    constructor() {
        super();
    }
}
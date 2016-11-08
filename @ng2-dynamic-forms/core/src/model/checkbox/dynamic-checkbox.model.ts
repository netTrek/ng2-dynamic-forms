import {ClsConfig} from "../dynamic-form-control.model";
import {DynamicFormValueControlModel, DynamicFormValueControlModelConfig} from "../dynamic-form-value-control.model";
import {serializable} from "../../decorator/serializable.decorator";
import {getValue} from "../../utils";

export const DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX = "CHECKBOX";

export const DYNAMIC_FORM_CONTROL_CHECKBOX_ALIGN_START = "start";
export const DYNAMIC_FORM_CONTROL_CHECKBOX_ALIGN_END = "end";

export interface DynamicCheckboxModelConfig extends DynamicFormValueControlModelConfig {

    align?: string;
    indeterminate?: boolean;
}

export class DynamicCheckboxModel extends DynamicFormValueControlModel<boolean> {

    @serializable() align: string;
    @serializable() indeterminate: boolean;

    @serializable() readonly type: string = DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX;

    constructor(config: DynamicCheckboxModelConfig, cls?: ClsConfig) {

        super(config, cls);

        this.align = getValue(config, "align", DYNAMIC_FORM_CONTROL_CHECKBOX_ALIGN_START);
        this.indeterminate = getValue(config, "indeterminate", false);

        if (this.value !== true) {
            this.value = false;
        }
    }
}
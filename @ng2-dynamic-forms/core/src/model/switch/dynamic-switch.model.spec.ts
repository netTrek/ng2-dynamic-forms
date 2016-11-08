import {
    DYNAMIC_FORM_CONTROL_TYPE_SWITCH,
    DynamicSwitchModel
} from "./dynamic-switch.model";

describe("DynamicSwitchModel test suite", () => {

    describe("default model test suite", () => {

        let config = {id: "default"};
        let defaultModel: DynamicSwitchModel;

        beforeEach(() => {
            defaultModel = new DynamicSwitchModel(config);
        });
        
        it("tests if default model is correctly initialized", () => {

            expect(defaultModel.disabled).toBe(false);
            expect(defaultModel.id).toEqual(config.id);
            expect(defaultModel.label).toBeNull();
            expect(defaultModel.name).toEqual(defaultModel.id);
            expect(defaultModel.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_SWITCH);
            expect(defaultModel.value).toBe(false);
        });

        it("should serialize correctly", () => {

            let json = JSON.parse(JSON.stringify(defaultModel));

            expect(json.id).toEqual(defaultModel.id);
            expect(json.value).toBe(defaultModel.value);
            expect(json.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_SWITCH);
        });
        
    });

});
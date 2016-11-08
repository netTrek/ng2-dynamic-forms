import {DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP, DynamicRadioGroupModel} from "./dynamic-radio-group.model";

describe("DynamicRadioModel test suite", () => {

    describe("default model test suite", () => {

        let config = {id: "default", options: [{value: "1"}, {value: "2"}]};
        let defaultModel: DynamicRadioGroupModel<any>;

        beforeEach(() => {
            defaultModel = new DynamicRadioGroupModel(config);
        });

        it("tests if default model is correctly initialized", () => {

            expect(defaultModel.disabled).toBe(false);
            expect(defaultModel.errorMessages).toBeNull();
            expect(defaultModel.hasErrorMessages).toBe(false);
            expect(defaultModel.id).toEqual(config.id);
            expect(defaultModel.label).toBeNull();
            expect(defaultModel.legend).toBeNull();
            expect(defaultModel.name).toEqual(defaultModel.id);
            expect(defaultModel.options.length).toBe(config.options.length);
            expect(defaultModel.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP);
            expect(defaultModel.value).toBeNull();
        });

        it("should serialize correctly", () => {

            let json = JSON.parse(JSON.stringify(defaultModel));

            expect(json.id).toEqual(defaultModel.id);
            expect(json.options.length).toBe(defaultModel.options.length);
            expect(json.value).toBe(defaultModel.value);
            expect(json.type).toEqual(DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP);
        });

    });

});
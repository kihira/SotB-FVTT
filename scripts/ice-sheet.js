
export class IceItemSheet extends ItemSheet
{
    static get defaultOptions() {
        const options = super.defaultOptions;

        mergeObject(options, {
            classes: ["sotb sheet item"],
            width: 890,
            height: 750
        });
        return options;
    }

    /** @override */
    get template()
    {
        return "modules/shadowofthebeanstalk/templates/item.html";
    }

      /** @override */
    async getData(options)
    {
        let sheetData = super.getData(options);

        if (options?.action === "update")
        {
            await this.item.setFlag("shadowofthebeanstalk", "progamStrength", options.data.sotb.programStrength);
            await this.item.setFlag("shadowofthebeanstalk", "effects", options.data.sotb.effects);
            await this.item.setFlag("shadowofthebeanstalk", "additionalRules", options.data.sotb.additionalRules);
        }

        sheetData.sotb = {
            programStrength: await this.item.getFlag("shadowofthebeanstalk", "progamStrength"),
            effects: await this.item.getFlag("shadowofthebeanstalk", "effects"),
            additionalRules: await this.item.getFlag("shadowofthebeanstalk", "additionalRules"),
        };

        return sheetData;
    }
}
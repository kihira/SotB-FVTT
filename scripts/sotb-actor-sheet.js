import { ActorSheetFFG } from "../../../systems/starwarsffg/modules/actors/actor-sheet-ffg.js";

export class SOTBActorSheet extends ActorSheetFFG
{
    /**
     * @override
     */
    static get defaultOptions()
    {
        return mergeObject(super.defaultOptions, {
            classes: ["starwarsffg", "sheet", "actor", "cyberpunk"],
            template: "modules/shadowofthebeanstalk/templates/actor.html",
            width: 710,
            height: 650,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "characteristics" }],
            scrollY: [".tableWithHeader", ".tab", ".skillsGrid"],
        });
    }

    /**
     * @override
     */
    get template()
    {
        return `modules/shadowofthebeanstalk/templates/actor.html`;
    }
}
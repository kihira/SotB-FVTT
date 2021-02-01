import { IceItemSheet } from "./ice-sheet.js";
import { SOTBActorSheet } from "./sotb-actor-sheet.js";

Hooks.once("init", () => 
{
    CONFIG.debug.hooks = true;

    Actors.registerSheet("sotb", SOTBActorSheet,
    {
        types: ["character"],
        label: "Shadow of the Beanstalk",
    });

    Items.registerSheet("sotb", IceItemSheet, { label: "Ice Sheet" });

});
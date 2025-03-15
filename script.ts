import github from 'npm:@actions/github';
import core from 'npm:@actions/core';
import axios from "npm:axios";

if (import.meta.main) {
    const lastPublishedVersion = Deno.readTextFileSync("./lastAnnouncedVersion.txt");
    
    const denoFile = Deno.readTextFileSync("./deno.json");
    const denoJSON = JSON.parse(denoFile);

    console.log(denoJSON.version);

    if (lastPublishedVersion !== denoJSON.version) {
        console.log("New version detected, announcing...");
        const context = github.context;
        const n8nUrl = Deno.args[0];
        axios.post(n8nUrl, {
            version: denoJSON.version,
            timestamp: new Date().toISOString(),
            message: "Hello, world!",
            context: context,
            lastPublishedVersion: lastPublishedVersion,
        });
    } else {
        console.log("No new version detected, skipping...");
    }

    // lastPublished.txt
    Deno.writeTextFileSync("./lastAnnouncedVersion.txt", denoJSON.version);    
}
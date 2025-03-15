import github from 'npm:@actions/github';
import core from 'npm:@actions/core';
import axios from "npm:axios";

if (import.meta.main) {
    const context = github.context;
    const n8nUrl = Deno.args[0];
    axios.post(n8nUrl, {
        timestamp: new Date().toISOString(),
        message: "Hello, world!",
        context: context,
    });
}
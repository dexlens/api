// read the deno.json for the version
const denoJSON = JSON.parse(Deno.readTextFileSync("./deno.json"));

export const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Dexlens API",
        version: denoJSON.version,
    },
    tags: [
        {
            name: "ETH",
            description: "Ethereum-related endpoints",
        },
        {
            name: "WebSocket",
            description: "WebSocket endpoints",
        },
    ],
    components: {
        securitySchemes: {
            ApiKeyAuth: {
                type: "apiKey",
                in: "header",
                name: "api-key", // Header name that clients must use
            },
        },
    },
    security: [
        {
            ApiKeyAuth: [],
        },
    ],
    // add a category for eth and blocknumber endpoints
    paths: {
        // ...ethBlockNumber,
        // ...ethEstimateGas,
        // ...ethGetBlockByNumber,
        // ...ethGetBalance,
        // ...ethGetBlockNumber,
        // ...eth_websocketEndpoint,
    },
};
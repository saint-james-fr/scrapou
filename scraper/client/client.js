import axios from "axios";
import http from "http";
import { scraperConfig } from "../scraper_config/scraper_config.js";
// We load needed config variables
const { useProxy, proxyHost, proxyPort, proxyUsername, proxyPassword, maxSockets, baseURL, userAgents } = scraperConfig;
const getRandomUserAgent = () => {
    return userAgents[Math.floor(Math.random() * userAgents.length)];
};
const headers = {
    "User-Agent": getRandomUserAgent(),
    Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate",
    Connection: "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "Sec-Fetch-Dest": "document",
    "Sec-Fetch-Mode": "navigate",
    "Sec-Fetch-Site": "none",
    "Sec-Fetch-User": "?1",
    "Cache-Control": "max-age=0",
};
const httpAgent = new http.Agent({
    keepAlive: true,
    maxSockets,
});
const proxy = useProxy
    ? {
        protocol: "http",
        host: proxyHost,
        port: proxyPort,
        auth: {
            username: proxyUsername,
            password: proxyPassword,
        },
    }
    : undefined;
// We create a new client and return it.
export const newClient = () => {
    try {
        // We raise errors if needed config variables are not set
        if (!baseURL)
            throw new Error("No baseURL provided");
        if (useProxy && !proxyHost)
            throw new Error("No proxyHost provided");
        if (useProxy && !proxyPort)
            throw new Error("No proxyPort provided");
        if (useProxy && !proxyUsername)
            throw new Error("No proxyUsername provided");
        if (useProxy && !proxyPassword)
            throw new Error("No proxyPassword provided");
        // We create the proxy object if defined
        return axios.create({
            baseURL,
            httpAgent,
            headers,
            proxy,
        });
    }
    catch (error) {
        throw error;
    }
};

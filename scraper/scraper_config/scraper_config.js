var _a;
import dotenv from "dotenv";
dotenv.config();
export const scraperConfig = {
    baseURL: String(process.env.SCRAPING_BASE_URL),
    proxyHost: String(process.env.PROXY_HOST),
    proxyPort: Number(process.env.PROXY_PORT),
    proxyUsername: String(process.env.PROXY_USERNAME),
    proxyPassword: String(process.env.PROXY_PASSWORD),
    useProxy: process.env.USE_PROXY === "true",
    maxSockets: Number(process.env.MAX_SOCKETS) || 5,
    delay: Number(process.env.DELAY) || 1000,
    userAgents: ((_a = process.env.USER_AGENTS) === null || _a === void 0 ? void 0 : _a.split(",")) || [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
    ],
};

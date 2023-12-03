var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import logger from "../../config/logger/logger.js";

function wait(ms) {
    return new Promise(function(resolve) {
        return setTimeout(resolve, ms);
    });
}

export const get = (axiosInstance, url, maxRetries = 5) => __awaiter(void 0, void 0, void 0, function* () {
    let retries = 0;
    // We try to fetch the data and implement a retry strategy for rate limiting
    while (retries < maxRetries) {
        try {
            const response = yield axiosInstance.get(url);
            const html = response.data;
            // We return if the request was successful
            return html;
        }
        catch (error) {
            // if we get limited let's retry
            if (error.response && error.response.status === 429) {
                logger.warn(`Rate limited. Retrying in 5 seconds... Tentative #${retries + 1} / ${maxRetries}`);
                // Wait for 5 seconds before retrying
                yield wait(5000);
                retries++;
            }
            else {
                // If it's not a 429 error, rethrow the error
                throw error;
            }
        }
    }
    throw new Error(`Max retries (${maxRetries}) exceeded!`);
});
// This is our function that fetches the HTML, it implements delay
export const fetchWithRetryAndDelay = (url, client, delay) => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => setTimeout(resolve, delay));
    const html = yield get(client, url);
    return html;
});

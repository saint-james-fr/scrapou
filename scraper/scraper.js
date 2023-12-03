import { newClient } from "./client/client.js";
import { getWithRetryAndDelay } from "./fetcher/fetcher.js";
import { scraperConfig } from "./scraper_config/scraper_config.js";
const { delay } = scraperConfig;
// We create a new scraper object and export it
const scraper = {
  client: newClient(),
  delay,
  get: function (url) {
    return getWithRetryAndDelay(url, this.client, this.delay);
  },
};
export default scraper;

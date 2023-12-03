# Scrapou

scrapou is meant to build an opiniated client for scraping requests, with proxy config, user-agent optimization, retry mechanism and delay between requests.

## Usage

```javascript
// .env
// This is the onlye needed env variable
SCRAPING_BASE_URL = "https://www.somesite.com";

// yourfile.js
import scraper from "scrapou";

// this will make a request to https://www.somesite.com
try {
  // Scraping base url
  const answer await scraper.get("");
  // it returns an AxiosResponse
  const html  = answer.data
  // You can inject paths or queries
  await scraper.get("posts?author=me");
  // GET https://www.somesite.com/posts?author=me
} catch (error) {
  throw error;
}
```

## Configuration

Provide env variables with dotenv installation for using scrapou.

### BaseUrl & Delay

```plain
SCRAPING_BASE_URL="some url"
DELAY="some delay between the requests to avoid rate limiting" # defaults to 1000ms if not provided
```

### Max sockets

```plain
MAX_SOCKETS="2" #defaults to 5 if this env variable is not provided
```

### Proxy

```plain
USE_PROXY="true"
PROXY_HOST="some host"
PROXY_PORT="some port"
PROXY_USERNAME="some username"
PROXY_PASSWORD"some password"
```

### User-Agents

```plain
USER_AGENTS="provide a comma separated list and it will choose a random user agent."
# defaults to some already good user agents if this env variable is
# "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
# "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
# "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
# "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
# "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
# "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15",
# "Mozilla/5.0 (Macintosh; Intel Mac OS X 13_1) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15"
```

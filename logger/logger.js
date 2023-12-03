import winston from "winston";
import chalk from "chalk";
const { combine, timestamp, printf, errors } = winston.format;
const myFormat = printf((info) => {
    if (info.stack && info.level == "error") {
        // Print the stack trace in red
        return `${chalk.blue(info.timestamp)} ${chalk.red(info.level)}: ${info.message} - ${chalk.red(info.stack)}`;
    }
    // No stack trace, just print the message
    return `${chalk.blue(info.timestamp)} ${chalk.green(info.level)}: ${info.message}`;
});
const logger = winston.createLogger({
    level: "info",
    format: combine(winston.format.errors({ stack: true }), timestamp(), myFormat),
    transports: [new winston.transports.Console()],
});
export default logger;

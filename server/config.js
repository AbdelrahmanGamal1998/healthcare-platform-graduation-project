require('dotenv').config();

/** The value of an environment variable. Stops with a clear message when it is not set. */
function get(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing environment variable ${name}. Copy .env.example to .env and fill it in.`);
    }
    return value;
}

module.exports = { get };

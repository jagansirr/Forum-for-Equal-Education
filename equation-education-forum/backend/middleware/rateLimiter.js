const rateLimit = require('express-rate-limit');

// Define rate limiter for login attempts
const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per windowMs
    message: 'Too many login attempts. Please try again later.',
});

module.exports = loginRateLimiter;

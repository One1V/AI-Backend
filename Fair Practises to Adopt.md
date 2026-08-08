
# Best Practice

Instead of writing:

```javascript
console.log("Error");
```

Professional applications use logging libraries (like Winston or Pino in Node.js) that can include timestamps, log levels, and write logs to files or external systems.

Example:

```text
2026-08-05 10:30:15 ERROR Database connection failed
```

This is much more useful than a plain message.

# Project Goal

Build this architecture:

```text
Browser
      │
      ▼
Nginx (Port 80)
      │
      ├──────────────► Frontend (HTML/CSS/JS)
      │
      └──────────────► Express (Port 5000)
```

When the browser requests:

```
/
```

Nginx serves the frontend.

When JavaScript requests

```
/api/message
```

Nginx forwards it to Express.

---

# Step 1 — Create Project Structure

```text
Project 2/

    frontend/
        index.html
        style.css
        script.js

    backend/
        server.js
        package.json
```

---

# Step 2 — Create Express Backend

Install Express

```bash
cd backend

npm init -y

npm install express
```

---

Create

```js
server.js
```

```javascript
const express = require("express");

const app = express();

app.get("/api/message", (req, res) => {

    res.json({
        message: "Hello Ayush"
    });

});

app.listen(5000, () => {

    console.log("Server running on port 5000");

});
```

---

Run

```bash
node server.js
```

Visit

```
http://localhost:5000/api/message
```

Expected

```json
{
    "message":"Hello Ayush"
}
```

Backend is complete.

---

# Step 3 — Create Frontend

Create

```
index.html
```

```html
<!DOCTYPE html>

<html>

<head>

<title>Nginx Reverse Proxy Demo</title>

<link rel="stylesheet" href="style.css">

</head>

<body>

<h1>Nginx Reverse Proxy Demo</h1>

<button id="btn">

Fetch API

</button>

<p id="res"></p>

<script src="script.js"></script>

</body>

</html>
```

---

style.css

```css
body{

font-family:Arial;

text-align:center;

margin-top:100px;

}
```

---

script.js

```javascript
document.getElementById("btn").onclick = async () => {

    const response = await fetch("/api/message");

    const data = await response.json();

    document.getElementById("res").innerText = data.message;

};
```

Notice

```
fetch("/api/message")
```

NOT

```
fetch("http://localhost:5000/api/message")
```

Reason:

Browser only talks to Nginx.

---

# Step 4 — Install Nginx

Ubuntu

```bash
sudo apt update

sudo apt install nginx
```

Check

```bash
nginx -v
```

---

# Step 5 — Copy Frontend

Instead of serving files from

```
/home/ayush/Desktop/...
```

copy them into

```bash
sudo mkdir -p /var/www/myapp

sudo cp -r "/home/ayush/Desktop/AI Backend/NGINX/Project 2/frontend/"* /var/www/myapp/
```

Why?

Because Nginx already has permission to read `/var/www`.

---

# Step 6 — Configure Nginx

Edit

```bash
sudo nano /etc/nginx/sites-available/default
```

Delete the default server block.

Replace with

```nginx
server {

    listen 80;

    server_name localhost;

    root /var/www/myapp;

    index index.html;

    location / {

        try_files $uri $uri/ /index.html;

    }

    location /api/ {

        proxy_pass http://localhost:5000;

        proxy_http_version 1.1;

        proxy_set_header Host $host;

        proxy_set_header X-Real-IP $remote_addr;

        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    }

}
```

---

# Step 7 — Test Configuration

```bash
sudo nginx -t
```

Expected

```
syntax is ok

test is successful
```

---

# Step 8 — Reload Nginx

```bash
sudo systemctl reload nginx
```

---

# Step 9 — Test Backend

```
http://localhost:5000/api/message
```

Should return JSON.

---

# Step 10 — Test Frontend

Visit

```
http://localhost
```

Expected

```
Nginx Reverse Proxy Demo

[ Fetch API ]
```

Click button

↓

Browser executes

```javascript
fetch("/api/message")
```

↓

Browser sends request

```
GET /api/message
```

↓

Nginx receives request.

↓

Nginx sees

```
location /api
```

↓

Nginx forwards

```
localhost:5000/api/message
```

↓

Express receives request.

↓

Express returns

```json
{
    "message":"Hello Ayush"
}
```

↓

Nginx returns JSON.

↓

JavaScript updates

```javascript
document.getElementById("res").innerText
```

↓

Page becomes

```
Hello Ayush
```

---

# Debugging Checklist

## If browser shows

```
Welcome to nginx
```

Problem

Default configuration.

---

## If browser shows

```
500 Internal Server Error
```

Check

```bash
sudo tail -f /var/log/nginx/error.log
```

---

## If error says

```
Permission denied
```

Cause

Serving frontend from `/home/...`

Fix

Move frontend to

```
/var/www/myapp
```

---

## If Fetch API doesn't work

Test backend

```bash
curl http://localhost:5000/api/message
```

---

Test Nginx proxy

```bash
curl http://localhost/api/message
```

---

## If JavaScript doesn't update

Open

```
F12

Console
```

Read browser errors.

---

## If browser still shows old code

Update the deployed frontend:

```bash
sudo cp -r "/home/ayush/Desktop/AI Backend/NGINX/Project 2/frontend/"* /var/www/myapp/
```

Then reload Nginx:

```bash
sudo systemctl reload nginx
```

Hard refresh the browser:

* **Ctrl + Shift + R**

---

# What You Learned

This single project taught you:

* Express server creation
* Static frontend
* Browser `fetch()`
* Relative URLs
* Nginx installation
* Reverse proxy
* Static file serving
* `location` blocks
* `proxy_pass`
* `try_files`
* Linux file permissions
* Reading Nginx logs
* Browser DevTools
* Debugging configuration issues

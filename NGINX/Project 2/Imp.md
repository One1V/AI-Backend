# I'll explain **every line** and what happens internally, as if you're debugging a production server. given below:

---

# The complete configuration

```nginx
server {

    listen 80;

    server_name localhost;

    root /absolute/path/to/frontend;
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

Think of this as **Nginx's rulebook**.

Whenever a request comes in, Nginx reads this file to decide what to do.

---

# Step 1

```nginx
server {
```

This starts one **server block**.

Think of it like:

> "If someone connects to this website, follow these rules."

Large companies have many server blocks.

Example:

```text
google.com
youtube.com
gmail.com
maps.google.com
```

Each can have its own server block.

---

# Step 2

```nginx
listen 80;
```

Port **80** is the default HTTP port.

```
Browser
      │
      ▼
localhost
```

actually becomes

```
localhost:80
```

because browsers automatically use port 80 for HTTP.

If HTTPS is used:

```
listen 443 ssl;
```

---

# Step 3

```nginx
server_name localhost;
```

This tells Nginx:

> "These rules apply when someone visits `localhost`."

Production example:

```nginx
server_name youtube.com;
```

or

```nginx
server_name mywebsite.com www.mywebsite.com;
```

If a request comes for another domain, another server block may handle it.

---

# Step 4

```nginx
root /absolute/path/to/frontend;
```

This is one of the most important lines.

Imagine your frontend is here:

```
frontend/

    index.html
    style.css
    app.js
    logo.png
```

Suppose:

```
root /home/ayush/frontend;
```

Now Nginx knows:

```
Need index.html?

Look inside

/home/ayush/frontend
```

---

## Example

Browser asks:

```
GET /
```

Nginx checks

```
/home/ayush/frontend/index.html
```

and sends it.

---

Browser asks

```
GET /style.css
```

Nginx checks

```
/home/ayush/frontend/style.css
```

and returns it.

No Express is involved here.

---

# Step 5

```nginx
index index.html;
```

When someone visits

```
localhost/
```

Nginx automatically serves

```
index.html
```

without requiring

```
localhost/index.html
```

---

# Step 6

```nginx
location /
```

This means:

> "For every request beginning with `/`, follow these rules."

Examples:

```
/

```

```
/about
```

```
/login
```

```
/style.css
```

```
/app.js
```

Everything starts with `/`.

---

# Step 7

```nginx
try_files $uri $uri/ /index.html;
```

This line is confusing at first, so let's break it down.

Suppose the browser asks for:

```
/style.css
```

Nginx checks:

```
Does style.css exist?
```

Yes?

Return it.

---

Suppose the browser asks:

```
/logo.png
```

Exists?

Yes.

Return it.

---

Suppose the browser asks:

```
/about
```

Nginx checks

```
about
```

No file.

Checks

```
about/
```

No directory.

So it serves

```
index.html
```

Why?

Because in React, Vue, Angular, etc., the frontend router handles routes like `/about`, `/profile`, `/dashboard`. Nginx doesn't know about those pages, so it falls back to `index.html`, allowing the frontend app to render the correct page.

---

# Step 8

```nginx
location /api/
```

This is another rule.

It means:

> "If the URL begins with `/api`, don't serve frontend files."

Instead:

```
/api/login

/api/users

/api/payment
```

all follow the API rule.

---

# Step 9

```nginx
proxy_pass http://localhost:5000;
```

This is the reverse proxy.

Suppose the browser requests

```
GET /api/users
```

Nginx forwards it to

```
http://localhost:5000/api/users
```

Express handles the request, returns the response, and Nginx passes it back to the browser.

The browser never knows Express is running on port 5000.

---

# Step 10

```nginx
proxy_http_version 1.1;
```

This tells Nginx to communicate with Express using **HTTP/1.1**.

Why?

Features like:

* Keep-alive connections
* WebSockets
* Chunked transfer encoding

require HTTP/1.1 or newer. It's a common production setting.

---

# Step 11

```nginx
proxy_set_header Host $host;
```

The original request was:

```
Host: mywebsite.com
```

If Nginx didn't forward this header, Express might only see:

```
Host: localhost:5000
```

Forwarding the original `Host` lets the backend know which domain the client requested, which is useful for multi-domain applications, redirects, and logging.

---

# Step 12

```nginx
proxy_set_header X-Real-IP $remote_addr;
```

Without Nginx:

```
Client IP

192.168.1.5
```

Express sees that IP directly.

With Nginx, Express would otherwise only see the proxy's IP.

This header preserves the real client's IP address.

---

# Step 13

```nginx
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
```

If requests pass through multiple proxies, this header builds a chain.

Example:

```
Client
↓

Cloudflare
↓

AWS Load Balancer
↓

Nginx
↓

Express
```

The header might look like:

```
X-Forwarded-For:
203.0.113.10, 172.16.1.4, 10.0.0.8
```

This lets Express know the original client IP and the proxy path.

---

# Final request flow

```text
Browser
   │
   │ GET /
   ▼
Nginx
   │
   ├── Looks in /home/ayush/nginx-express-demo/frontend
   │
   ▼
Returns index.html
   │
   ▼
Browser loads HTML + CSS + JS
   │
   │ fetch("/api/message")
   ▼
Nginx
   │
   ├── Matches location /api/
   │
   ▼
Forwards to Express (localhost:5000)
   │
   ▼
Express returns JSON
   │
   ▼
Nginx forwards it back
   │
   ▼
Browser displays the data
```

This pattern—**Nginx serving static frontend files and reverse-proxying `/api/*` requests to the backend**—is one of the most common production architectures for Express applications.

# **"Where do I write this Nginx configuration?"**

## If you're using Ubuntu/Linux (most common)

Open the terminal and edit the Nginx site configuration:

```bash
sudo nano /etc/nginx/sites-available/default
```

Replace its contents with your configuration, then save.


After that:

```bash
sudo nginx -t
```

This checks whether the configuration has any syntax errors.

If you see:

```text
syntax is ok
test is successful
```

reload Nginx:

```bash
sudo systemctl reload nginx
```

You are here:

```text
/etc/nginx/sites-available/default
```

Now do the following.

---

## Step 1: Remove the default configuration

Scroll down until you see something like:

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;

    index index.html index.htm index.nginx-debian.html;

    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

You can either:

* Replace **only the `server { ... }` block**, or
* Delete everything in the file and paste your own configuration (fine for learning).

---

## Step 2: Paste this

Replace:

```nginx
root /absolute/path/to/frontend;
```

with your real frontend path.

For example:

```nginx
server {
    listen 80;
    server_name localhost;

    root /home/ayush/nginx-express-demo/frontend;
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

## Step 3: Save

In Nano:

* Press **Ctrl + O** (Write Out)
* Press **Enter**
* Press **Ctrl + X** (Exit)

---

## Step 4: Test the configuration

Run:

```bash
sudo nginx -t
```

If you get:

```text
syntax is ok
test is successful
```

then reload Nginx:

```bash
sudo systemctl reload nginx
```

---

### Before you continue, tell me:

**Where is your frontend folder?**

For example:

```text
/home/ayush/nginx-express-demo/frontend
```

or run:

```bash
pwd
```

inside your frontend directory and paste the output. I'll tell you the exact `root` path to use.

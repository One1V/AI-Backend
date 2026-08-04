
document.getElementById("btn").onclick = async () => {
    const response = await fetch("/api/message");
// No localhost:5000 here. The browser talks only to Nginx, and Nginx forwards API requests to Express.
// IN that case it's like this--->  fetch("http://localhost:5000/api/message")


// Nginx is standing in front of everything.
//                 Internet
//                     │
//                     ▼
//             youtube.com
//                     │
//                Nginx (Port 80/443)
//                /            \
//               /              \
//       Frontend Files      Express API

    const data = await response.json();

    document.getElementById("result").innerText = data.message;
};
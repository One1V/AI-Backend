# Linux for Backend Placements (100 Questions)

## Module 1 — Linux Fundamentals (1–10)

**Goal:** Understand what Linux is and how it works.

1. What is Linux? Why do companies use Linux servers?
2. What is the Linux kernel?
3. What is a Linux distribution? Ubuntu vs Debian vs CentOS.
4. Linux architecture (Kernel → Shell → Applications → Hardware).
5. What is the shell? Bash vs Zsh.
6. How does the terminal work?
7. What happens internally when you execute a Linux command?
8. Linux filesystem hierarchy (`/`, `/home`, `/etc`, `/var`, `/usr`, `/tmp`).
9. What is the difference between Linux and Windows from a backend engineer's perspective?
10. How does Linux boot from power-on to login?

---

# Module 2 — Navigation & Files (11–20)

11. What is the present working directory (pwd)?
12. How does `cd` work?
13. What is the difference between absolute and relative paths?
14. How do `ls`, `-l`, `-a`, and `-h` work?
15. How do `mkdir`, `rmdir`, and `touch` work?
16. How do `cp`, `mv`, and `rm` work?
17. What are hidden files?
18. How does file globbing (`*`, `?`, `[]`) work?
19. What are symbolic links and hard links?
20. Mini Project: Build a project directory structure using Linux commands only.

---

# Module 3 — Viewing & Editing Files (21–30)

21. How do `cat`, `less`, `more`, `head`, and `tail` differ?
22. How does `tail -f` help monitor logs?
23. How does `grep` work?
24. What is regular expression (regex) in Linux?
25. How do `find` and `locate` differ?
26. How does `wc` work?
27. How do `sort`, `uniq`, and `cut` work?
28. How do `nano` and `vim` differ?
29. How do pipes (`|`) work?
30. Mini Project: Analyze an Express server log using Linux commands.

---

# Module 4 — Permissions & Ownership (31–40)

31. Why does Linux have permissions?
32. Read, write, execute explained.
33. User, group, others.
34. `chmod` (numeric and symbolic).
35. `chown` vs `chgrp`.
36. What are `sudo` and root?
37. Why shouldn't you always work as root?
38. How do permissions affect Node.js applications?
39. How do file permissions affect deployment?
40. Mini Project: Secure a deployed backend application.

---

# Module 5 — Processes (41–50)

41. What is a process?
42. Process vs program.
43. Foreground vs background processes.
44. How do `ps` and `top` work?
45. What is `htop`?
46. How do `kill` and `kill -9` differ?
47. What are signals (SIGTERM, SIGKILL, SIGINT)?
48. How does `jobs`, `bg`, and `fg` work?
49. Why does your Node server stop when you close SSH?
50. Mini Project: Run an Express server in the background.

---

# Module 6 — Networking (51–60)

51. What is localhost?
52. IP address, private vs public IP.
53. What are ports?
54. What is a socket?
55. How do `ping`, `curl`, and `wget` work?
56. How do `netstat` and `ss` help debug networking?
57. How do `lsof` and `fuser` identify port usage?
58. DNS from a backend engineer's perspective.
59. How does SSH work?
60. Mini Project: Connect to a remote Linux server using SSH.

---

# Module 7 — Package Management (61–65)

61. What is `apt`?
62. `apt update` vs `apt upgrade`.
63. How do packages get installed?
64. How do you uninstall software?
65. Mini Project: Install Node.js, Git, and Nginx.

---

# Module 8 — Environment & Configuration (66–72)

66. What are environment variables?
67. How does the `PATH` variable work?
68. `.bashrc` vs `.profile`.
69. `.env` files in backend projects.
70. Exporting environment variables.
71. Why keep secrets out of source code?
72. Mini Project: Configure environment variables for Express.

---

# Module 9 — Logs & Monitoring (73–80)*(left for practical use)

73. Where are Linux logs stored?
74. How do `journalctl` and system logs work?
75. How do you monitor Express logs?
76. How do you monitor Nginx logs?
77. How do you identify high CPU usage?
78. How do you identify high memory usage?
79. How do you identify disk usage (`df`, `du`)?
80. Mini Project: Debug a production server.

---

# Module 10 — Services (81–87)

81. What is `systemd`?
82. What is a service?
83. How do `systemctl start`, `stop`, `restart`, and `status` work?
84. How do you enable services at boot?
85. How do you run a Node.js app as a service?
86. PM2 vs `systemd`.
87. Mini Project: Deploy Express using `systemd`.

---

# Module 11 — Deployment (88–94)

88. Deploying a MERN application on Ubuntu.
89. How does Git fit into deployment?
90. Pulling updates from GitHub.
91. Nginx + Express deployment flow.
92. SSL certificates and HTTPS.
93. Backup and restore basics.
94. Mini Project: Deploy a production-ready backend.

---

# Module 12 — Backend Interview Linux (95–100)

95. Explain the complete Linux filesystem.
96. Explain the journey of an HTTP request inside Linux.
97. Debug: "Port 5000 already in use."
98. Debug: "Permission denied."
99. Debug: "Server is down."
100. Complete production architecture:

```
Browser
      ↓
DNS
      ↓
Linux Server
      ↓
Nginx
      ↓
Docker
      ↓
Express
      ↓
Redis
      ↓
MongoDB
```

Explain every step from browser request to database response.

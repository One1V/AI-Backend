# Behind the scenes, Vercel/Render:

* Create a Linux server
* Install Node.js
* Clone the GitHub repository
* Install dependencies (`npm install`)
* Set environment variables
* Start the application
* Keep it running
* Configure HTTPS
* Handle restarts if the application crashes

# Linux is responsible for:

1. Receiving the network packet.
2. Passing it to Nginx (which is listening on port 443).
3. Allowing Nginx to forward the request to Express (for example, on port 5000).
4. Scheduling CPU time for both processes.
5. Managing memory used by each process.
6. Reading data from MongoDB.
7. Sending the response back over the network.

# Networking

When someone visits:

```text
https://yourdomain.com/api/users
```

The kernel:

* receives network packets,
* passes them to Nginx,
* lets Nginx forward them to Express,
* sends the response back.

The kernel is the foundation of Linux networking.

###### The kernel manages:

* Processes
* Memory
* Files
* Devices
* Networking
* Almost every backend operation (`fs.readFile`, `app.listen`, database connections, HTTP requests) ultimately relies on the kernel.

**Linux Distribution (Distro)** is:

> **Linux Kernel + Essential software + Package Manager + Shell + Libraries + Applications**

## Without a shell:

* The kernel wouldn't understand text commands.
* You couldn't type Linux commands directly.

# Backend Example

Suppose you buy a VPS.

The provider asks:

```text
Choose Operating System

○ Ubuntu 24.04

○ Debian 13

○ AlmaLinux

○ Rocky Linux
```

If you're deploying a MERN or AI backend,

you'll most likely choose:

`Ubuntu 24.04 LTS`

### Q1. Explain Linux Architecture.

**Answer:**

> Linux architecture consists of four main layers: Applications, Shell, Kernel, and Hardware. Applications interact with the kernel (often through libraries or via commands interpreted by the shell), and the kernel manages hardware resources such as CPU, memory, storage, and networking.


* **Terminal** → User interface (window)
* **Shell** → Understands commands
* **Kernel** → Manages hardware
* **Hardware** → Executes the actual work

### Q3. Difference between Bash and Zsh?

A good answer:

> Bash is the traditional and widely used shell, while Zsh provides additional features such as improved auto-completion, themes, and plugins. Both can run most of the same commands and scripts.
>
> ### Q1. What happens when you execute a Linux command?
>
> A good answer:
>
>> The terminal sends the command to the shell. The shell interprets it, finds the executable using the PATH environment variable, and requests the kernel to execute it. The kernel creates a process, allocates resources, runs the program, and the output is displayed in the terminal.
>>
>
> * **Terminal** accepts your input and displays output.
> * **Shell** interprets commands and finds executables.
> * **PATH** tells the shell where to look for programs.
> * **Kernel** creates processes and manages execution.
> * Every backend command (`node`, `npm`, `git`, `docker`) follows this same lifecycle.




# Key Takeaways

* Linux has **one root directory (`/`)**, unlike Windows' multiple drive letters.
* Important directories:

  * `/home` → User files and projects
  * `/etc` → Configuration files
  * `/var` → Logs and changing data
  * `/usr` → Installed software
  * `/tmp` → Temporary files

  > **etc = settings**
  >

* Knowing where things are stored makes deployment and debugging much easier.


```
Windows
   ↓
Great for many desktop tasks and development

Linux
   ↓
The most common choice for backend servers and cloud deployments
```



# Real Cloud Server Example

Imagine you restart your cloud server.

The sequence is:

```text
AWS / VPS Starts

↓

Ubuntu Boots

↓

Kernel Loads

↓

systemd Starts

↓

SSH Starts

↓

Nginx Starts

↓

Docker Starts

↓

MongoDB Starts

↓

Server Ready
```

Now you can connect:

```bash
ssh ubuntu@server-ip
```

---

# 📘 Module 1 Summary (Questions 1–10) – Backend Internship Level

---

## **1. What is Linux?**

Linux is an **open-source operating system** used to run servers, cloud platforms, and backend applications.

### Why companies use Linux

* Free & Open Source
* Fast
* Secure
* Stable
* Runs most cloud servers (AWS, Azure, GCP)
* Ideal for Node.js, Docker, Nginx, Redis, MongoDB

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **2. What is the Linux Kernel?**

The **Kernel** is the **core of the operating system**.

It acts as a bridge between:

```text
Applications
      ↓
Kernel
      ↓
Hardware
```

Responsibilities:

* CPU management
* Memory management
* File system management
* Device management

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **3. What is a Linux Distribution?**

A Linux Distribution (Distro) is:

> **Kernel + Software + Package Manager + User Interface**

Examples:

| Distribution         | Mainly Used For        |
| -------------------- | ---------------------- |
| Ubuntu               | Backend Development ⭐ |
| Debian               | Stable Servers         |
| CentOS / Rocky Linux | Enterprise Servers     |

**Recommendation:** Learn **Ubuntu**.

⭐ **Importance:** ⭐⭐⭐⭐☆

---

## **4. Linux Architecture**

```text
Applications
      ↓
Shell
      ↓
Kernel
      ↓
Hardware
```

### Meaning

* **Applications** → Node.js, Chrome, VS Code
* **Shell** → Accepts your commands
* **Kernel** → Executes them using hardware
* **Hardware** → CPU, RAM, SSD, etc.

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **5. What is Bash?**

**Bash (Bourne Again Shell)** is the **most popular Linux shell**.

It:

* Accepts commands
* Passes them to the kernel
* Displays the output

Example:

```bash
ls
pwd
mkdir backend
```

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **6. How does the Terminal work?**

Flow:

```text
You Type Command
        ↓
Terminal
        ↓
Bash (Shell)
        ↓
Kernel
        ↓
Hardware
        ↓
Result
```

Example:

```bash
ls
```

The terminal displays the result after Bash and the Kernel process the command.

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **7. What happens when you execute a Linux command?**

Example:

```bash
ls
```

Internal flow:

```text
You type ls
      ↓
Terminal
      ↓
Bash
      ↓
Kernel
      ↓
Filesystem
      ↓
Kernel
      ↓
Terminal
      ↓
Output
```

The shell interprets the command, the kernel performs the requested operation, and the result is displayed.

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **8. Linux Filesystem Hierarchy**

Important directories:

| Directory | Purpose                |
| --------- | ---------------------- |
| `/`     | Root directory         |
| `/home` | User files             |
| `/etc`  | Configuration files    |
| `/var`  | Logs and variable data |
| `/usr`  | Installed software     |
| `/tmp`  | Temporary files        |

For backend developers:

* `.env` → Often in your project directory under `/home/...`
* Nginx config → `/etc`
* Logs → `/var/log`

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **9. Linux vs Windows (Backend Perspective)**

| Linux                                 | Windows                            |
| ------------------------------------- | ---------------------------------- |
| Most production servers               | Mostly personal desktops           |
| Better for backend deployment         | Less common for production servers |
| Native support for Docker, Nginx, SSH | Often requires extra setup         |
| Preferred by cloud providers          | Less common in cloud servers       |

**Conclusion:**

Developers often build on Windows or macOS but deploy on Linux.

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **10. Linux Boot Process (Basic)**

```text
Power On
      ↓
BIOS / UEFI
      ↓
Bootloader (GRUB)
      ↓
Kernel
      ↓
systemd
      ↓
Login Screen / Terminal
```

You only need the basic flow for internships.

⭐ **Importance:** ⭐⭐⭐☆☆

---

# 🎯 Commands to Memorize

Module 1 is mostly conceptual, so there are very few commands.

```bash
ls
pwd
```

(You'll learn them in detail in Module 2.)

---

# ⭐ Priority (Backend / AI Backend)

### Must Know (⭐⭐⭐⭐⭐)

* Linux
* Kernel
* Linux Architecture
* Bash
* Terminal Flow
* Command Execution Flow
* Filesystem Hierarchy
* Linux vs Windows

### Good to Know (⭐⭐⭐☆☆)

* Boot Process

---

# 📌 Interview Revision (2 Minutes)

* Linux = Open-source operating system.
* Kernel = Core of Linux; manages hardware and resources.
* Distribution = Kernel + tools (Ubuntu, Debian, etc.).
* Bash = Most common shell.
* Terminal → Bash → Kernel → Hardware → Output.
* `/` = Root.
* `/home` = User files.
* `/etc` = Configuration.
* `/var` = Logs.
* `/usr` = Installed software.
* `/tmp` = Temporary files.
* Linux is the standard choice for backend servers.
* Boot flow: **Power → BIOS/UEFI → GRUB → Kernel → `systemd` → Login**.

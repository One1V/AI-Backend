
# 📘 Module 3 Summary – Viewing & Editing Files (Backend Internship Level)

## 1. `cat` – Display Entire File

Shows the complete contents of a file.

```bash
cat file.txt
```

**Use Cases:**

* View `.env`
* View `README.md`
* View small configuration files

**Importance:** ⭐⭐⭐⭐⭐

---

## 2. `less` – View Large Files

Opens a file with scrolling.

```bash
less server.log
```

Useful for:

* Large log files
* Nginx logs
* Express logs

Exit with:

```text
q
```

**Importance:** ⭐⭐⭐⭐⭐

---

## 3. `more`

Older version of `less`.

```bash
more file.txt
```

Shows one page at a time.

**Importance:** ⭐⭐☆☆☆

---

## 4. `head`

Shows the first 10 lines.

```bash
head server.log
```

First 5 lines:

```bash
head -5 server.log
```

**Importance:** ⭐⭐⭐⭐☆

---

## 5. `tail`

Shows the last 10 lines.

```bash
tail server.log
```

Last 20 lines:

```bash
tail -20 server.log
```

**Importance:** ⭐⭐⭐⭐⭐

---

## 6. `tail -f`

Continuously watches a log file.

```bash
tail -f server.log
```

Stop:

```text
Ctrl + C
```

Used for:

* Express logs
* Nginx logs
* Docker logs
* Production debugging

**Importance:** ⭐⭐⭐⭐⭐

---

## 7. `grep`

Searches text inside files.

```bash
grep "ERROR" server.log
```

Ignore case:

```bash
grep -i "error" server.log
```

Show line numbers:

```bash
grep -n "ERROR" server.log
```

Count matches:

```bash
grep -c "ERROR" server.log
```

**Importance:** ⭐⭐⭐⭐⭐

---

## 8. Basic Regex (Only Required Part)

| Symbol    | Meaning                    |
| --------- | -------------------------- |
| `^`     | Starts with                |
| `$`     | Ends with                  |
| `.`     | Any one character          |
| `*`     | Zero or more               |
| `[abc]` | One character from the set |

Example:

```bash
grep "^GET" server.log
```

**Importance:** ⭐⭐⭐☆☆

---

## 9. `find`

Searches files in real time.

```bash
find . -name ".env"
```

Find log files:

```bash
find . -name "*.log"
```

**Importance:** ⭐⭐⭐⭐⭐

---

## 10. `locate`

Searches a filename database.

```bash
locate server.log
```

Faster than `find`, but the database may not be up to date.

**Importance:** ⭐⭐☆☆☆

---

## 11. `wc`

Counts lines, words, and characters.

Count lines:

```bash
wc -l server.log
```

Count words:

```bash
wc -w README.md
```

Count errors:

```bash
grep "ERROR" server.log | wc -l
```

**Importance:** ⭐⭐⭐⭐☆

---

## 12. `sort`

Sorts lines alphabetically.

```bash
sort file.txt
```

**Importance:** ⭐⭐⭐☆☆

---

## 13. `uniq`

Removes consecutive duplicate lines.

```bash
sort file.txt | uniq
```

**Importance:** ⭐⭐⭐☆☆

---

## 14. `cut`

Extracts specific columns.

```bash
cut -d " " -f1 access.log
```

Extract first field.

**Importance:** ⭐⭐☆☆☆

---

## 15. `nano`

Simple terminal text editor.

Open:

```bash
nano .env
```

Save:

```text
Ctrl + O
```

Exit:

```text
Ctrl + X
```

**Importance:** ⭐⭐⭐⭐⭐

---

## 16. `vim`

Powerful terminal editor.

Open:

```bash
vim .env
```

Insert mode:

```text
i
```

Save & Exit:

```text
:wq
```

Exit without saving:

```text
:q!
```

**Importance:** ⭐⭐⭐⭐☆

---

## 17. Pipes (`|`)

Passes the output of one command as the input to another.

Example:

```bash
cat server.log | grep "ERROR"
```

Count errors:

```bash
grep "ERROR" server.log | wc -l
```

Remove duplicates:

```bash
sort file.txt | uniq
```

**Importance:** ⭐⭐⭐⭐⭐

---

# 🛠 Mini Project

Analyze an Express log file.

Tasks:

```bash
cat server.log
tail server.log
tail -f server.log
grep "ERROR" server.log
grep "ERROR" server.log | wc -l
grep "/login" server.log
find . -name "server.log"
```

---

# 🎯 Commands to Memorize

```bash
cat
less
head
tail
tail -f
grep
find
wc -l
sort
uniq
cut
nano
vim
```

---

# ⭐ Must-Know Commands (Top Priority)

```bash
cat file.txt

less server.log

tail -f server.log

grep "ERROR" server.log

find . -name ".env"

grep "ERROR" server.log | wc -l

sort file.txt | uniq

nano .env

vim .env
```

---

# 📊 Importance for AI Backend / MERN

| Topic           | Importance  |
| --------------- | ----------- |
| `cat`         | ⭐⭐⭐⭐⭐  |
| `less`        | ⭐⭐⭐⭐⭐  |
| `tail`        | ⭐⭐⭐⭐⭐  |
| `tail -f`     | ⭐⭐⭐⭐⭐  |
| `grep`        | ⭐⭐⭐⭐⭐  |
| Pipes (``)      | ⭐⭐⭐⭐⭐  |
| `find`        | ⭐⭐⭐⭐⭐  |
| `nano`        | ⭐⭐⭐⭐⭐  |
| `vim` (basic) | ⭐⭐⭐⭐☆  |
| `head`        | ⭐⭐⭐⭐☆  |
| `wc`          | ⭐⭐⭐⭐☆  |
| Basic Regex     | ⭐⭐⭐☆☆  |
| `sort`        | ⭐⭐⭐☆☆  |
| `uniq`        | ⭐⭐⭐☆☆  |
| `cut`         | ⭐⭐☆☆☆  |
| `locate`      | ⭐⭐☆☆☆  |

---

# ✅ After Module 3, You Can

* Read and inspect files from the terminal.
* Analyze Express and Nginx logs.
* Search logs efficiently using `grep`.
* Monitor live logs with `tail -f`.
* Locate files using `find`.
* Count log entries with `wc`.
* Combine commands using pipes (`|`).
* Edit files using `nano` or basic `vim`.

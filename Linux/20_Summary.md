# 📘 Module 2 Summary (Questions 11–20) – Backend Internship Level

---

## **11. `pwd` (Present Working Directory)**

Shows your current location in the filesystem.

```bash
pwd
```

Example output:

```text
/home/ayush/backend
```

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **12. `cd` (Change Directory)**

Move between directories.

```bash
cd backend
cd ..
cd ~
cd /
```

Common commands:

| Command       | Meaning            |
| ------------- | ------------------ |
| `cd folder` | Enter folder       |
| `cd ..`     | Go back one folder |
| `cd ~`      | Home directory     |
| `cd /`      | Root directory     |

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **13. Absolute vs Relative Path**

### Absolute Path

Starts from root (`/`).

```text
/home/ayush/backend/server.js
```

### Relative Path

Starts from your current directory.

```text
backend/server.js
```

**Memory Tip:**

* Absolute = Full address
* Relative = Relative to current location

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **14. `ls`**

List files and folders.

```bash
ls
```

Useful options:

```bash
ls -l
ls -a
ls -lh
ls -la
```

| Option  | Meaning                 |
| ------- | ----------------------- |
| `-l`  | Detailed view           |
| `-a`  | Show hidden files       |
| `-h`  | Human-readable sizes    |
| `-la` | Detailed + hidden files |

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **15. `mkdir`, `rmdir`, `touch`**

Create folders:

```bash
mkdir backend
```

Remove empty folder:

```bash
rmdir backend
```

Create file:

```bash
touch server.js
```

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **16. `cp`, `mv`, `rm`**

Copy:

```bash
cp file1.txt file2.txt
```

Move/Rename:

```bash
mv old.txt new.txt
```

Delete file:

```bash
rm file.txt
```

Delete folder recursively:

```bash
rm -r folder
```

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **17. Hidden Files**

Hidden files start with a dot (`.`).

Examples:

```text
.env
.gitignore
```

View them:

```bash
ls -a
```

Backend examples:

* `.env`
* `.gitignore`

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

## **18. File Globbing**

Wildcards for matching filenames.

### `*`

Matches any number of characters.

```bash
ls *.js
```

### `?`

Matches exactly one character.

```bash
ls file?.txt
```

### `[ ]`

Matches one character from a set.

```bash
ls file[12].txt
```

⭐ **Importance:** ⭐⭐⭐☆☆

---

## **19. Symbolic Link vs Hard Link**

### Symbolic Link (Soft Link)

Like a Windows shortcut.

Create:

```bash
ln -s original.txt shortcut.txt
```

If original is deleted → Link breaks.

---

### Hard Link

Another name for the same file.

Create:

```bash
ln original.txt hardlink.txt
```

Deleting one filename doesn't remove the data as long as another hard link exists.

⭐ **Importance:** ⭐⭐⭐☆☆

---

## **20. Mini Project – Create Backend Project Structure**

Commands:

```bash
mkdir backend
cd backend
mkdir routes controllers models middleware config uploads
touch server.js package.json .env .gitignore README.md
ls -la
```

Result:

```text
backend/
├── controllers/
├── routes/
├── models/
├── middleware/
├── config/
├── uploads/
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md
```

⭐ **Importance:** ⭐⭐⭐⭐⭐

---

# 🎯 Commands to Memorize

```bash
pwd

cd folder
cd ..
cd ~
cd /

ls
ls -la

mkdir folder
rmdir folder
touch file.txt

cp source destination
mv old new
rm file
rm -r folder

ln -s original shortcut
ln original hardlink
```

---

# ⭐ Priority (Backend / AI Backend)

### Must Know (⭐⭐⭐⭐⭐)

* `pwd`
* `cd`
* Absolute vs Relative Path
* `ls`, `ls -la`
* `mkdir`
* `touch`
* `cp`
* `mv`
* `rm`
* Hidden files (`.env`, `.gitignore`)
* Project structure creation

### Good to Know (⭐⭐⭐☆☆)

* File globbing (`*`, `?`, `[]`)
* Symbolic links vs Hard links

---

# 📌 Interview Revision (2 Minutes)

* `pwd` → Show current directory
* `cd` → Change directory
* Absolute path → Full path from `/`
* Relative path → From current directory
* `ls -la` → List all files (including hidden)
* `mkdir` → Create directory
* `touch` → Create file
* `cp` → Copy
* `mv` → Move/Rename
* `rm` → Delete
* Hidden files → `.env`, `.gitignore`
* `*` → Any characters
* `?` → One character
* `ln -s` → Symbolic link (shortcut)
* `ln` → Hard link (another name for same file)

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Git Commands 

PS C:\Users\siddh\Desktop\Project\hms-project> git status -s
?? .gitignore
?? README.md
?? eslint.config.js
?? index.html
?? package-lock.json
?? package.json
?? public/
?? src/
?? tailwind.config.js
?? vite.config.js
PS C:\Users\siddh\Desktop\Project\hms-project> git add .
warning: in the working copy of '.gitignore', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'eslint.config.js', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'index.html', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package-lock.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'package.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/App.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/index.css', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'src/main.jsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'vite.config.js', LF will be replaced by CRLF the next time Git touches it
PS C:\Users\siddh\Desktop\Project\hms-project> git commit -m "Dashboard and SideBar added"
[master (root-commit) e4e74e4] Dashboard and SideBar added
 16 files changed, 5414 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 README.md
 create mode 100644 eslint.config.js
 create mode 100644 index.html
 create mode 100644 package-lock.json
 create mode 100644 package.json
 create mode 100644 public/clinovations logo.jpeg
 create mode 100644 public/vite.svg
 create mode 100644 src/App.jsx
 create mode 100644 src/assets/components/dashboard/MainContent.jsx
 create mode 100644 src/assets/components/dashboard/SideBar.jsx
 create mode 100644 src/assets/react.svg
 create mode 100644 src/index.css
 create mode 100644 src/main.jsx
 create mode 100644 tailwind.config.js
 create mode 100644 vite.config.js
PS C:\Users\siddh\Desktop\Project\hms-project> git branch
* master
PS C:\Users\siddh\Desktop\Project\hms-project> git branch -M main
PS C:\Users\siddh\Desktop\Project\hms-project> git branch        
* main
PS C:\Users\siddh\Desktop\Project\hms-project> git remote add origin https://github.com/siddhesh2017/HSM_Project.git
PS C:\Users\siddh\Desktop\Project\hms-project> git push origin main
Enumerating objects: 23, done.
Counting objects: 100% (23/23), done.
Delta compression using up to 12 threads
Compressing objects: 100% (22/22), done.
Writing objects: 100% (23/23), 50.04 KiB | 6.25 MiB/s, done.
Total 23 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/siddhesh2017/HSM_Project.git
 * [new branch]      main -> main
PS C:\Users\siddh\Desktop\Project\hms-project> git branch
* main
PS C:\Users\siddh\Desktop\Project\hms-project> git switch -s siddhesh
error: unknown switch `s'
usage: git switch [<options>] [<branch>]

    -c, --[no-]create <branch>
                          create and switch to a new branch
    -C, --[no-]force-create <branch>
                          create/reset and switch to a branch
    --[no-]guess          second guess 'git switch <no-such-branch>'
    --[no-]discard-changes
                          throw away local modifications
    -q, --[no-]quiet      suppress progress reporting
    --[no-]recurse-submodules[=<checkout>]
                          control recursive updating of submodules
    --[no-]progress       force progress reporting
    -m, --[no-]merge      perform a 3-way merge with the new branch
    --[no-]conflict <style>
                          conflict style (merge, diff3, or zdiff3)
    -d, --[no-]detach     detach HEAD at named commit
    -t, --[no-]track[=(direct|inherit)]
                          set branch tracking configuration
    -f, --[no-]force      force checkout (throw away local modifications)
    --[no-]orphan <new-branch>
                          new unborn branch
    --[no-]overwrite-ignore
                          update ignored files (default)
    --[no-]ignore-other-worktrees
                          do not check if another worktree is holding the given ref

PS C:\Users\siddh\Desktop\Project\hms-project> git branch
* main
PS C:\Users\siddh\Desktop\Project\hms-project> git switch -c siddhesh
Switched to a new branch 'siddhesh'


git init 
git add.
git commit -m ""
git branch
* master
git branch -M main
git branch        
* main
git remote add origin https://github.com/siddhesh2017/HSM_Project.git
git push origin main
git switch -s siddhesh
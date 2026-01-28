# Student Task Manager - SPA

### 1. Project Title & Goal
[cite_start]A full-stack Single Page Application (SPA) designed to track student homework tasks using Node.js and local JSON storage[cite: 75, 81].

### 2. Setup Instructions
1. Open your terminal in the project folder.
2. Run `npm install express cors` to set up dependencies.
3. [cite_start]Run `node server.js` to start the backend[cite: 10].
4. Open `index.html` in your browser to use the app.

### 3. The Logic (How I thought)
* [cite_start]**Approach:** I chose Node.js with Express because it is efficient for building simple APIs, and I used a local `.json` file for storage to ensure the project runs locally without external database dependencies[cite: 18, 81].
* **Hardest Bug:** Ensuring the task list updated instantly without a page refresh was challenging. [cite_start]I fixed this by using an `async/await` fetch function to reload the list immediately after a successful POST request[cite: 13, 80].

### 4. Output Screenshots
![Project Screenshot](./screenshot.png)
[cite_start]*(This screenshot shows 4 tasks added, proving the dynamic functionality [cite: 83]).*

### 5. Future Improvements
[cite_start]If I had 2 more days, I would add a "Delete" feature to remove completed tasks and a "Due Date" field to help students prioritize their work[cite: 15].
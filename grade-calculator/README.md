# Simple Grade Calculator

A simple JavaScript project that calculates a student's total marks, average, and letter grade for 5 subjects using conditional (if-else) logic.

## 📁 Folder Structure

```
grade-calculator/
├── index.html          # Main HTML page
├── css/
│   └── style.css        # Styling
├── js/
│   └── script.js         # Grade calculation logic
└── README.md
```

## 🚀 How It Works

1. Click **"Start Calculation"** on the page.
2. The browser will prompt you (using `prompt()`) to enter marks for 5 subjects, one at a time.
3. The script:
   - Adds up the marks to get the **Total**.
   - Divides the total by 5 to get the **Average**.
   - Uses `if-else` statements to assign a **Grade**:
     - 90 and above → A+
     - 80–89 → A
     - 70–79 → B
     - 60–69 → C
     - 50–59 → D
     - 40–49 → E
     - Below 40 → F (Fail)
4. Results are shown in an `alert()` popup, and also displayed on the page.

## 🧪 Testing

Open `index.html` directly in any browser (double-click the file, or use a local server) and test with different mark combinations, including:
- All high marks (e.g. 95, 92, 88, 90, 96) → should give A+/A
- Mixed marks around grade boundaries (e.g. 60, 59, 70, 69, 50) → check boundaries work correctly
- Low marks (e.g. 20, 30, 15, 25, 10) → should give F
- Invalid input (letters, empty, out-of-range numbers) → should re-prompt until valid
- Clicking "Cancel" on a prompt → should stop gracefully

## 🌐 Deployment (GitHub Pages)

1. Create a new repository on GitHub (e.g. `grade-calculator`).
2. Push this project folder to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Simple Grade Calculator"
   git branch -M main
   git remote add origin https://github.com/<your-username>/grade-calculator.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`, choose the `main` branch and `/ (root)` folder, then save.
5. GitHub will give you a live URL like:
   ```
   https://<your-username>.github.io/grade-calculator/
   ```
6. Submit that link as your project URL.

# 🌟 GitHub Profile Card – React App

A sleek and responsive GitHub Profile Card app built with **React 19**, **Tailwind CSS 4**, **Axios**, and **Vite 6**. Search any GitHub user and view their public profile details in a beautifully styled UI. Bonus: Export the card as a JPG!

![GitHub Card Screenshot](https://github.com/hardikdevaliya2006/Github_Card/blob/main/src/assets/preview.png)

## 🚀 Live Demo

```bash
https://githubprofilecardgenerator.vercel.app/
```

## 📦 Tech Stack

| Tech                | Description                        |
| ------------------- | ---------------------------------- |
| React 19            | Frontend framework                 |
| Tailwind CSS 4      | Styling and responsive layout      |
| Axios               | Fetch data from GitHub API         |
| Vite 6              | Fast build tool and dev server     |
| React Router 7      | Client-side routing (optional)     |
| html2canvas + jsPDF | Export card as PDF (bonus feature) |

## 🔧 Features

- 🔍 Search GitHub users by username
- 🧾 View profile info (avatar, name, bio, location, repos, followers, etc.)
- 📱 Fully responsive UI
- 🖨️ Export profile card to PDF
- ⚡ Super-fast loading with Vite
- 🚫 Error handling for invalid users or network issues

## 🖥️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/hardikdevaliya2006/Github_Card.git
cd Github_Card

# Install dependencies
npm install

# Start development server
npm run dev
```

### 📁 Folder Structure

```
Github_Card/
├── public/
├── src/
│   ├── assets/
│   │   ├── preview1.png
│   │   └── preview2.png
│   ├── components/
│   │   └── GitHubCard.jsx
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.cjs
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌐 API Reference

Using the GitHub REST API:

```
GET https://api.github.com/users/{username}
```

**Returns:**

- `avatar_url`
- `login`, `name`
- `bio`, `location`
- `followers`, `following`
- `public_repos`, etc.

## 🖨️ Export to PDF

This app uses `html2canvas` + `jsPDF` to let users download the GitHub card as a PDF.  
Click the **"Download PDF"** button to save the snapshot.

## 📸 Screenshots

<img style="border-radius: 0.75rem;" src="https://github.com/hardikdevaliya2006/Github_Card/blob/main/src/assets/preview1.png" width="100%" />
<img style="border-radius: 0.75rem;" src="https://github.com/hardikdevaliya2006/Github_Card/blob/main/src/assets/preview2.png" width="100%" />

## 🧠 Learning Goals

- Learn to use the GitHub API
- Practice styling with Tailwind CSS
- Work with modern React (v19+)
- Implement PDF generation in web apps
- Build modular and clean component structure

## 🤝 Contributing

Contributions are welcome!

```bash
# Fork the repo
# Create a feature branch
git checkout -b feature/your-feature-name

# Make your changes and commit
git commit -m "Add your message here"

# Push and open a PR
git push origin feature/your-feature-name
```

## 🧑‍💻 Author

Made with ❤️ by Hardik Devaliya

## 📌 Tags

`react` `tailwindcss` `github-api` `vite` `axios` `responsive` `profile-card` `pdf-generator`

### ✅ To Use It:

1. Create a file named `README.md` in your project root (if it doesn’t exist).
2. Copy and paste the above content into it.
3. Commit and push it to GitHub.

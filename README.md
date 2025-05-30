# 🌟 GitHub Card – React App

A sleek and responsive React-based GitHub Profile Card App that lets you search for any GitHub user and see their public profile details. Built with modern technologies like React 19, Tailwind CSS 4, Axios, and Vite, this project is lightning fast and beautifully styled.

![GitHub Card Screenshot](https://github.com/hardikdevaliya2006/Github_Card/assets/preview.png)

---

## 🚀 Live Demo

Check it out here: [Live Demo](https://your-live-link.vercel.app)  
*(replace with actual deployed link)*

---

## 📦 Tech Stack

| Tech           | Usage                                   |
|----------------|-----------------------------------------|
| React 19       | Frontend framework                      |
| Tailwind CSS 4 | Styling and responsive layout           |
| Axios          | Fetch GitHub API data                   |
| Vite 6         | Super-fast bundler and dev server       |
| React Router 7 | Client-side routing (if applicable)     |
| HTML2PDF + jsPDF | Export profile card as PDF (bonus!)   |

---

## 🔧 Features

- 🔍 Search GitHub users by username
- 📄 View profile info: avatar, bio, location, followers, etc.
- 📜 Clean and responsive UI using Tailwind CSS
- 📥 Download profile card as a PDF
- ⚡ Super fast loading with Vite
- 🔄 Realtime updates and error handling

---

## 🖥️ Installation & Setup

\`\`\`bash
# Clone the repo
git clone https://github.com/hardikdevaliya2006/Github_Card.git
cd Github_Card

# Install dependencies
npm install

# Start development server
npm run dev
\`\`\`

---

## 📁 Folder Structure

\`\`\`
Github_Card/
├── public/
├── src/
│   ├── components/
│   │   └── GitHubCard.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── vite.config.js
└── README.md
\`\`\`

---

## 🌐 API Reference

This app uses the official GitHub API to fetch user data:

\`\`\`bash
GET https://api.github.com/users/{username}
\`\`\`

Returned data includes:

- Avatar
- Username
- Name
- Bio
- Location
- Followers / Following
- Public Repositories

---

## 🖨️ Bonus: Export to PDF

This project uses \`html2canvas\` + \`jsPDF\` to export the profile card as a downloadable PDF. Click the "Download PDF" button to save the card!

---

## 📸 Screenshots

<img src="https://github.com/hardikdevaliya2006/Github_Card/assets/preview1.png" width="100%" />
<img src="https://github.com/hardikdevaliya2006/Github_Card/assets/preview2.png" width="100%" />

---

## 🧠 Learning Goals

- Practice using the GitHub API
- Style efficiently with Tailwind CSS 4
- Work with modern React (v19+)
- Learn PDF generation in web apps
- Practice clean folder structure and component-based design

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

\`\`\`bash
# Fork it
# Create your feature branch
git checkout -b feature/new-feature
# Commit your changes
git commit -m 'Add new feature'
# Push to the branch
git push origin feature/new-feature
# Open a Pull Request
\`\`\`

---

## 🧑‍💻 Author

Made with ❤️ by [Hardik Devaliya](https://github.com/hardikdevaliya2006)

---

## 📄 License

This project is licensed under the MIT License.  
See the [LICENSE](LICENSE) file for details.

---

## 📌 Tags

\`react\` \`tailwindcss\` \`github-api\` \`vite\` \`axios\` \`responsive\` \`profile-card\` \`pdf-generator\`

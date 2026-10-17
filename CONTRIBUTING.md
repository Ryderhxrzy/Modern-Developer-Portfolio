# Contributing to Modern Developer Portfolio

Thank you for your interest in contributing to **Modern Developer Portfolio**! We welcome all contributions, from bug fixes and documentation enhancements to new design patterns and performance optimizations.

---

## Code of Conduct

By participating in this project, you agree to foster a welcoming, inclusive, and respectful environment for everyone. Please treat all contributors and users with dignity and mutual respect.

---

## How Can I Contribute?

### 1. Reporting Bugs
- Search existing [Issues](https://github.com/Ryderhxrzy/Modern-Developer-Portfolio/issues) before opening a new one to ensure it hasn't already been reported.
- If you find a new bug, please open an issue including:
  - A clear and descriptive title.
  - Steps to reproduce the bug.
  - Expected behavior vs. actual behavior.
  - Screenshots or console output (if applicable).
  - Your environment (browser, OS, Node.js version).

### 2. Suggesting Enhancements & Design Ideas
- We welcome suggestions for new UI components, animations, theme variations, or performance optimizations!
- Open an [Issue](https://github.com/Ryderhxrzy/Modern-Developer-Portfolio/issues) with the tag `enhancement` and describe your proposal in detail.

### 3. Submitting Pull Requests

1. **Fork the Repository**
   Click the **Fork** button at the top right of the GitHub repository page.

2. **Clone your Fork**
   ```bash
   git clone https://github.com/<your-username>/Modern-Developer-Portfolio.git
   cd Modern-Developer-Portfolio
   ```

3. **Create a Topic Branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/issue-description
   ```

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Make your Changes**
   - Follow the established architecture: keep portfolio content strictly in `src/data/` and components modular in `src/components/`.
   - Ensure all styles follow Tailwind CSS v4 syntax and design tokens defined in `src/app/globals.css`.
   - Respect accessibility guidelines (e.g., maintaining `prefers-reduced-motion` fallbacks for any motion components).

6. **Verify and Lint**
   Ensure that TypeScript passes and linting is clean:
   ```bash
   npm run lint
   npm run build
   ```

7. **Commit Your Changes**
   Write clear and descriptive commit messages (following [Conventional Commits](https://www.conventionalcommits.org/)):
   ```bash
   git commit -m "feat: add interactive project filter"
   # or
   git commit -m "fix: resolve theme toggle contrast issue in dark mode"
   ```

8. **Push to Your Fork**
   ```bash
   git push origin feature/amazing-feature
   ```

9. **Open a Pull Request**
   - Navigate to the original repository on GitHub and click **Compare & pull request**.
   - Provide a concise summary of the changes and link any related issues (e.g., `Closes #12`).

---

## Architecture Principles

- **Zero-Hydration Mismatch:** The light/dark theme uses an inline bootstrap script in `src/app/layout.tsx` and pure CSS attribute selectors (`[data-theme="dark"]`). Avoid injecting client-rendered state into server components that causes hydration mismatches.
- **Content-Driven:** All text, project showcases, skills, and personal information reside in `src/data/`. Components should consume data typed via TypeScript interfaces without hardcoding content.
- **Performance First:** Keep external client-side dependencies minimal. Heavy animations should rely on native CSS transitions and keyframes, accelerated via hardware transforms (`translate3d`).

---

## License

By contributing to this repository, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).


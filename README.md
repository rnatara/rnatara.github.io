# rnatara.github.io

Personal developer portfolio showcasing projects in event-driven architecture, distributed systems, and AI/ML.

## Tech Stack

- **Jekyll** - Static site generator
- **GitHub Pages** - Hosting
- **Hacker Theme** - Terminal-inspired dark theme
- **GitHub Actions** - Automated deployment

## Local Development

### Prerequisites

- Ruby 3.1+
- Bundler

### Setup

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

### Building

```bash
# Build site
bundle exec jekyll build

# Output in _site/
```

## Project Structure

```
├── _config.yml           # Jekyll configuration
├── _data/               # Project data (YAML)
│   ├── work.yml         # Solace work projects
│   ├── personal.yml     # Personal projects
│   └── academic.yml     # Academic projects
├── _includes/           # Reusable components
├── _layouts/            # Page layouts
├── _sass/              # Custom styles
├── assets/             # CSS, JS, images
├── index.md            # Landing page
└── .github/workflows/  # GitHub Actions
```

## Adding Projects

Edit the appropriate YAML file in `_data/`:

```yaml
- name: "Project Name"
  description: "Brief description"
  tech_stack: [Tech1, Tech2, Tech3]
  github_url: "https://github.com/username/repo"
  live_url: "https://demo.com"  # Optional
  status: "production"  # production, beta, poc, archived
  year: 2024
```

## Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

### Manual Deployment

1. Push to `main` branch
2. GitHub Actions builds and deploys automatically
3. Visit https://rnatara.github.io

## Customization

### Colors

Edit `_sass/_custom.scss` to customize colors:

```scss
$accent-green: #39d353;  // Terminal green
$accent-blue: #58a6ff;   // Links and tags
```

### Contact Info

Update `_config.yml`:

```yaml
email: "your@email.com"
social:
  github: "yourusername"
  linkedin: "yourusername"
```

## License

© 2024 rnatara. All rights reserved.

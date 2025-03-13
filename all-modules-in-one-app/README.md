# Forge All-in-One Modules for Jira and Confluence

This "just for fun" project demonstrates how to incorporate **all** [Forge modules](https://developer.atlassian.com/platform/forge/manifest-reference/modules/) for Jira and Confluence into a single app. While created primarily for entertainment, it can be highly beneficial for Forge developers. By showcasing every possible location in the Jira and Confluence UI where Forge can be extended, this app allows you to install it on your cloud development instance and gain insights into which Forge modules best suit your development needs.

For documentation and tutorials on Forge, visit [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge).

## Requirements

To get started, follow the instructions to set up Forge: [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/).

## Quick Start

1. **Install top-level dependencies:**
    ```bash
    yarn
    ```

2. **Install dependencies (inside the `static/ui` directory):**
    ```bash
    cd static/ui
    yarn
    ```

3. **Build your app (inside the `static/ui` directory):**
    ```bash
    yarn build
    ```

4. **Register your app (from root folder):**
    ```bash
    forge register
    ```

5. **Deploy your app (from root folder):**
    ```bash
    forge deploy
    ```

6. **Install your app on an Atlassian site (from root folder):**
    ```bash
    forge install
    ```

### Notes
- Use the `forge deploy` command to persist code changes.
- Use the `forge install` command to install the app on a new site.
- Once the app is installed on a site, it will automatically pick up new changes you deploy without needing to rerun the install command.

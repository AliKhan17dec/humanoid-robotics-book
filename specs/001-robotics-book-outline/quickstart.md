# Quickstart: Physical AI & Humanoid Robotics Book

This guide provides a quickstart for setting up the development environment and building the "Physical AI & Humanoid Robotics" book.

## 1. Prerequisites

- **Operating System**: Ubuntu 22.04
- **Software**:
  - Python 3.10+
  - ROS 2 Humble or Iron
  - Gazebo
  - NVIDIA Isaac Sim 4.x (requires NVIDIA GPU with driver version 525.60.11 or later)
  - Node.js 18.x or later
  - Yarn 1.x

## 2. Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/humanoid-robotics-book.git
    cd humanoid-robotics-book
    ```

2.  **Install Docusaurus dependencies**:
    ```bash
    yarn install
    ```

## 3. Building the Book

To build a static version of the book, run the following command:

```bash
yarn build
```

The output will be in the `build` directory.

## 4. Running the Development Server

To start a local development server with hot-reloading, run the following command:

```bash
yarn start
```

The book will be available at `http://localhost:3000`.

## 5. Running Code Examples

The code examples in the book are designed to be run in their respective environments (ROS 2, Isaac Sim, etc.). Please refer to the specific chapters for instructions on how to run the examples.

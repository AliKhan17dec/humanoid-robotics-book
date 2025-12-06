import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.
 */
const sidebars: SidebarsConfig = {
  bookSidebar: [
    'intro', // docs/intro.mdx
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'module1-ros2/intro',
        'module1-ros2/architecture',
        'module1-ros2/rclpy',
        'module1-ros2/urdf',
        'module1-ros2/mini-project',
        'module1-ros2/assessment',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'module2-digital-twin/intro',
        'module2-digital-twin/gazebo',
        'module2-digital-twin/unity',
        'module2-digital-twin/mini-project',
        'module2-digital-twin/assessment',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'module3-nvidia-isaac/intro',
        'module3-nvidia-isaac/isaac-ros',
        'module3-nvidia-isaac/navigation',
        'module3-nvidia-isaac/mini-project',
        'module3-nvidia-isaac/assessment',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'module4-vla/whisper',
        'module4-vla/planners',
        'module4-vla/assessment',
      ],
    },
    'capstone/index', // docs/capstone/index.mdx
    'glossary', // docs/glossary.mdx
    'references', // docs/references.mdx
    {
      type: 'category',
      label: 'Appendices',
      items: [
        'appendices/hardware',
        'appendices/setup',
      ],
    },
  ],
};

export default sidebars;

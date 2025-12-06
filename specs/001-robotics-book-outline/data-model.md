# Data Model: Physical AI & Humanoid Robotics Book

This document defines the key entities for the "Physical AI & Humanoid Robotics" book.

## 1. Module

A major section of the book, containing multiple chapters.

- **Attributes**:
  - `title`: The title of the module (e.g., "The Robotic Nervous System (ROS 2)")
  - `description`: A brief overview of the module's content.
  - `chapters`: An ordered list of Chapter entities.

## 2. Chapter

A specific topic within a module.

- **Attributes**:
  - `title`: The title of the chapter (e.g., "ROS 2 Architecture")
  - `content`: The main body of the chapter in MDX format.
  - `summary`: A brief summary of the chapter's key takeaways.
  - `glossary`: A list of terms and definitions specific to the chapter.
  - `tasks`: A list of practical tasks and exercises for the reader.
  - `troubleshooting`: A section discussing common errors and how to solve them.
  - `references`: A list of citations in APA format.

## 3. Code Snippet

A runnable piece of code demonstrating a concept.

- **Attributes**:
  - `language`: The programming language of the snippet (e.g., "python").
  - `code`: The code itself.
  - `description`: An explanation of what the code does.
  - `runnable`: A boolean indicating whether the code is intended to be run by the reader.

## 4. Diagram

A visual explanation of a concept.

- **Attributes**:
  - `title`: The title of the diagram.
  - `image_url`: The path to the image file.
  - `caption`: A brief description of the diagram.
  - `attribution`: The source of the diagram, if not original.

## 5. Assessment

A set of questions or a project to test understanding.

- **Attributes**:
  - `type`: The type of assessment (e.g., "multiple-choice", "short-answer", "project").
  - `questions`: A list of questions.
  - `solutions`: The solutions to the questions.

# Vision document

## Purpose

The personal task list API allows users to manage a simple list of personal tasks.

## Goals

Users should be able to:
- Create tasks
- Read taks
- Update tasks
- Delete tasks
- Mark task as completed

## Non goals

The system will not include:
- Authentication
- Notifications
- Categories
- Deadlines
- Task sharing
- Task groups
- Task by user

# Contraints

- REST api only
- In-memory persistence allowed
- No Authentication required
- UI out off scope
- Tasks must have title and description is optional
- The system should answer with a structured JSON response
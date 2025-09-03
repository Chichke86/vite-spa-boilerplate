# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Magic Drawer SPA - a file sharing application that allows users to "magically" send files to others around the world. The app is built with Vite and vanilla JavaScript, featuring an Apple-inspired design with clean aesthetics, glassmorphism effects, and smooth animations.

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:5173)
- `npm run build` - Build for production 
- `npm run preview` - Preview production build locally

## Architecture

The application uses a simple vanilla JavaScript architecture:

- **Entry Point**: `src/main.js` - Contains the main application logic and DOM manipulation
- **Styling**: `src/style.css` - Apple-inspired CSS with gradients, backdrop-filter effects, and responsive design
- **HTML Template**: `index.html` - Minimal HTML shell with app mount point

### Key Features

- **File Upload Interface**: Drag & drop functionality with visual feedback
- **Send/Receive Simulation**: Mock functionality demonstrating the Magic Drawer concept
- **Responsive Design**: Mobile-first approach with CSS Grid and media queries
- **Interactive States**: Loading states, hover effects, and dynamic content updates

### Design System

The UI follows Apple's design language:
- System fonts (-apple-system, BlinkMacSystemFont)
- Blue gradient branding (#007aff to #5856d6)  
- Glassmorphism with backdrop-filter and rgba backgrounds
- Rounded corners (12px-20px border-radius)
- Subtle shadows and hover animations
# Lumina Photography Studio Portfolio

A premium, modern photography portfolio built with React, Vite, and Tailwind CSS v4.

## Features
- **Premium Hero Section**: Split layout with bold typography and high-impact visuals.
- **Portfolio Gallery**: Support for both Grid and Masonry layouts with category filtering.
- **Collections**: Album-based organization with detailed case studies.
- **Services & Pricing**: Clear package breakdowns with add-ons.
- **Journal**: Blog system for stories and insights.
- **Fully Responsive**: Optimized for all devices with a mobile-first approach.
- **Dark/Light Mode**: Persisted theme preferences.
- **Animations**: Subtle, premium transitions using Framer Motion.

## Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Routing**: React Router Dom v6
- **Icons**: Lucide React
- **Components**: Radix UI (Headless)

## How to Replace Images
All images are currently served via `picsum.photos` for demonstration. To use your own images:
1. Place your image files in the `/public/images/` directory.
2. Update the `src` paths in `/src/data/mockData.ts` to point to your local files (e.g., `/images/my-photo.jpg`).

## Setup
1. `npm install`
2. `npm run dev`

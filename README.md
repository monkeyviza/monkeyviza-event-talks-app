# TechTalks 2026 Event App

TechTalks 2026 is a single-page web application designed to showcase the schedule for a one-day technical conference. It features a curated list of expert talks across various domains like AI, Rust, Backend development, and more.

## Purpose

The application serves as a digital guide for event attendees, providing:
- **Event Schedule:** A clear timeline of talks, breaks, and lunch.
- **Detailed Information:** Access to talk titles, speakers, durations, and descriptions.
- **Categorized Search:** Quickly find talks by tags (e.g., "AI", "Frontend", "Security").
- **Responsive Design:** A clean, modern interface that works on both desktop and mobile devices.

## Tech Stack

- **Backend:** Node.js with [Express](https://expressjs.com/)
- **Frontend:** Vanilla JavaScript, CSS, and HTML
- **API:** RESTful endpoint for schedule data retrieval

## How to Execute Locally

Follow these steps to get the project running on your local machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v14 or higher recommended).

### 1. Clone the repository
```bash
git clone https://github.com/monkeyviza/monkeyviza-event-talks-app.git
cd monkeyviza-event-talks-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
node server.js
```

### 4. Access the app
Open your web browser and navigate to:
[http://localhost:8080](http://localhost:8080)

## Project Structure

- `server.js`: The main Express server and API definitions.
- `public/`: Contains the static frontend assets.
  - `index.html`: The main page structure.
  - `app.js`: Logic for fetching schedule data and category filtering.
  - `style.css`: Custom styling and layout.

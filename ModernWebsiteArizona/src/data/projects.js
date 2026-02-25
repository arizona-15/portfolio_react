// src/data/project.js

// Data proyek - Arizona dapat menambahkan proyek sendiri di sini
// Format: { id, title, description, thumbnail, category, link }

export const projects = [
  {
    id: 1,
    title: "Design of an IoT-Based Long-Term Monitoring System for Temperature and Dissolved Oxygen in Lake Toba Using LoRa",
    description:
      "A LoRa-based IoT system for real-time and continuous monitoring of temperature and dissolved oxygen (DO) levels in Lake Toba. Data is transmitted via LoRa communication and visualized through both Grafana and custom-built dashboards.",
    thumbnail: "/projects/monitoring.png",
    category: "IoT",
    link: "https://github.com/arizona-15/myportfolio/tree/main/Final%20Project",
  },
  {
    id: 2,
    title: "Automatic Bird Pest Detection and Repelling System",
    description:
      "An automated system utilizing PIR sensors, ultrasonic sound, and LoRa communication to detect and repel bird pests in agricultural areas. When one node detects movement, both nodes activate simultaneously and trigger the repelling devices.",
    thumbnail: "/projects/embedded_project.png",
    category: "IoT",
    link: "https://github.com/arizona-15/myportfolio/tree/main/Last%20Year%20Project%20II",
  },
  {
    id: 3,
    title: "Automatic Soil Moisture-Based Irrigation System",
    description:
      "An automatic irrigation system based on soil moisture sensors. When moisture levels fall below a predefined threshold, a relay activates the water pump until the soil moisture returns to an optimal level.",
    thumbnail: "/projects/irrigation.png",
    category: "Embedded System",
    link: "https://github.com/arizona-15/myportfolio/tree/main/Embedded%20system%20Project",
  },
  {
    id: 4,
    title: "Hema Beauty Salon Static Website",
    description:
      "A static website for Hema Beauty Salon showcasing the business profile, services, and photo gallery with a responsive design.",
    thumbnail: "/projects/salon_websire.png",
    category: "Web Development",
    link: "https://github.com/arizona-15/myportfolio/tree/main/Last%20Year%20Project%20I",
  },
];

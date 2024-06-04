<template>
    <div class="timeline">
      <div class="timeline-header">
        <img src="" alt="Company Logo" class="logo" />
        <h2>2019 to 2021</h2>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>Full Project Analyst</h3>
          <p>Modern Logistics</p>
          <p>Apr 2020 - Mar 2021 - 1 year</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3>Analista de Projetos Junior</h3>
          <p>Modern Logistics</p>
          <p>Apr 2019 - Mar 2020 - 1 year</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .timeline {
    font-family: Arial, sans-serif;
    color: #565656;
  }
  
  .timeline-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .logo {
    width: 50px;
    height: 50px;
  }
  
  h2 {
    color: #5E72E4;
    font-size: 24px;
  }
  
  .timeline-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
  }
  
  .timeline-marker {
    width: 1px;
    height: 0.5rem;
    background-color: #5E72E4;
    border-radius: 1000%;
    margin-right: 10px;
    position: relative;
    top: 5px;
  }
  
  .timeline-content {
    margin-left: 10px;
  }
  
  .timeline-content h3 {
    font-size: 18px;
    margin: 0;
  }
  
  .timeline-content p {
    margin: 2px 0;
    color: #888;
  }
  </style>
  
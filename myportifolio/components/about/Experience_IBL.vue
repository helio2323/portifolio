<template>
    <div class="timeline">
      <div class="timeline-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpkFQZxoOVgT1yTm3bH2UMdvmSmnSAomWvQ&s" alt="Company Logo" class="logo" />
        <h2>2019 to 2021</h2>
      </div>
      <div class="timeline-item">
          <CircleIcon />
      <div class="timeline-content">
          
            <h3>Full Project Analyst</h3>
          <p>IBL Logistics</p>
          <p>Apr 2020 - Mar 2021 - 1 year</p>
        </div>
      </div>
      <div class="timeline-item">
        <CircleIcon />
        <div class="timeline-content">
          <h3>Junior Project Analyst</h3>
          <p>IBL logistics</p>
          <p>Apr 2019 - Mar 2020 - 1 year</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  import CircleIcon from '../about/CircleIcon.vue'

  const props = defineProps({
    img: {
        type: String,
        default: ''
    }
})

  </script>
  
  <style scoped>
  .timeline {
    font-family: Arial, sans-serif;
    color: var(--Secondary);
    margin-top: 30px;
    max-width: fit-content;
  }
  
  .timeline-header {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
    align-items: center;
  }
  
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 10%;
  }
  
  h2 {
    color: var(--Primary);
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
    background-color: var(--Primary);
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
    color: var(--Secondary);
  }

  h3 {
    color: var(--Secondary);
    font-weight: bold;
    color: var(--Text);

  }
  </style>
  
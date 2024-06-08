<template>
    <div class="timeline">
      <div class="timeline-header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpkFQZxoOVgT1yTm3bH2UMdvmSmnSAomWvQ&s" alt="Company Logo" class="logo" />
        <h2>2016 to 2018</h2>
      </div>
      <div class="timeline-item">
          <CircleIcon />
      <div class="timeline-content">
            <h3>Commercial Leader</h3>
          <p>Mundial Logistics</p>
          <p>Out 2017 - Out 2018 - 1 year 1 mos</p>
        </div>
      </div>
      <div class="timeline-item">
        <CircleIcon />
        <div class="timeline-content">
          <h3>Commercial Analyst</h3>
          <p>Mundial Logistics</p>
          <p>Out 2016 - Sep 2017 - 1  year </p>
        </div>
      </div>

      <div class="timeline-item">
        <CircleIcon />
        <div class="timeline-content">
          <h3>Commercial Assistant</h3>
          <p>Mundial Logistics</p>
          <p>Out 2012 - Sep 2016 - 1 year</p>
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
  
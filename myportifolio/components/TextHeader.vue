<template>
    <div>
      <h3 :style="{ color: textColor }">{{ text }}</h3>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { defineProps } from 'vue'
  
  const props = defineProps({
    text: {
      type: String,
      default: ''
    }
  })
  
  const route = useRoute()
  
  


  </script>
  
  <style scoped>
  h3:hover {
    cursor: pointer;
    color: #5E72E4;
    transition: all 0.8s;
  }
  </style>
  
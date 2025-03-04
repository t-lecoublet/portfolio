<template>
  <div class="carousel-container">
    <TransitionGroup name="slide" mode="out-in" :duration="{ enter: 500, leave: 500 }">
      <div :key="currentSlideIndex" v-for="(slide, index) in slides" v-show="index === currentSlideIndex" class="slide">
        {{ slide.title }}
      </div>
    </TransitionGroup>

    <div class="controls">
      <button @click="previousSlide">Précédent</button>
      <button @click="nextSlide">Suivant</button>
    </div>
  </div>
</template>

<script setup>
const slides = ref([
  { title: 'Slide 1' },
  { title: 'Slide 2' },
  { title: 'Slide 3' }
]);

const currentSlideIndex = ref(0);

function nextSlide() {
  if (currentSlideIndex.value < slides.value.length - 1) {
    currentSlideIndex.value++;
  }
}

function previousSlide() {
  if (currentSlideIndex.value > 0) {
    currentSlideIndex.value--;
  }
}
</script>

<style>
.carousel-container {
  position: relative;
  overflow: hidden;
}

.slide {
  padding: 20px;
  background-color: #f0f0f0;
  margin: 10px;
  border-radius: 5px;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}
</style>
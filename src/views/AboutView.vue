<template>
  <div class="about-container">
    <h1 class="text-4xl font-bold mb-4 text-gray-700">About Music Project</h1>

    <p class="text-gray-700 mb-8">
      Welcome to the Music Project – a space where music enthusiasts come together to share and enjoy their favorite tunes!
    </p>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-700">Our Mission</h2>
      <p class="text-gray-700">
        At Music Project, we aim to create a vibrant community where users can seamlessly connect through the universal language of music. Whether you're an artist looking to share your work or a listener searching for new beats, you're in the right place.
      </p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-bold mb-4 text-gray-700">Features</h2>
      <ul class="list-disc pl-6 text-gray-700">
        <li>Register and become part of our musical community</li>
        <li>Upload your favorite tracks and showcase your talent</li>
        <li>Leave comments to connect with fellow music lovers</li>
        <li>Enjoy a seamless music playback experience</li>
      </ul>
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-4 text-gray-700">Get Involved</h2>
      <p class="text-gray-700">
        We believe in the power of collaboration. Join us on this musical journey and let's create something extraordinary together. Whether you're a developer, designer, or just passionate about music, there's a place for you in the Music Project family.
      </p>
    </section>

    <footer class="mt-8 text-center text-gray-700">
      <p>Created by Anna Kabatova, 2024</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
};
</script>

<style scoped>
.about-container {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
</style>

<template>
  <div class="container mt-4">
    <h2>Add New Design</h2>
    <form @submit.prevent="submitDesign">
      <div class="mb-3">
        <label for="designName" class="form-label">Design Name</label>
        <input type="text" class="form-control" id="designName" v-model="formData.designName" required>
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" v-model="formData.description" required></textarea>
      </div>
      <div class="mb-3">
        <label for="imageUrl" class="form-label">Image URL</label>
        <input type="url" class="form-control" id="imageUrl" v-model="formData.imageUrl" required>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    <router-link to="/" class="btn btn-secondary mt-3">Back to Home</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default {
  setup() {
    const formData = ref({
      designName: '',
      description: '',
      imageUrl: ''
    });

    const submitDesign = async () => {
      try {
        await addDoc(collection(db, 'designs'), {
          name: formData.value.designName,
          description: formData.value.description,
          imageUrl: formData.value.imageUrl,
        });
        alert('Design added successfully!');
        formData.value = { designName: '', description: '', imageUrl: '' };
      } catch (error) {
        console.error('Error adding design:', error);
      }
    };

    return { formData, submitDesign };
  }
};
</script>

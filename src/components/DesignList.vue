<template>
  <div class="container mt-4">
    <h2>My Designs</h2>
    <div class="row">
      <div class="col-md-4" v-for="design in designs" :key="design.id">
        <div class="card mb-4">
          <img :src="design.imageUrl" class="card-img-top" alt="Design Image">
          <div class="card-body">
            <h5 class="card-title">{{ design.name }}</h5>
            <p class="card-text">{{ design.description }}</p>
            <button class="btn btn-warning" @click="editDesign(design.id)">Edit</button>
            <button class="btn btn-danger" @click="deleteDesign(design.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { db } from '../firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default {
  setup() {
    const designs = ref([]);

    const fetchDesigns = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "designs"));
        designs.value = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
      } catch (error) {
        console.error("Error fetching designs:", error);
      }
    };

    const deleteDesign = async (id) => {
      try {
        await deleteDoc(doc(db, 'designs', id));
        // Refresh the list after deletion
        fetchDesigns();
      } catch (error) {
        console.error("Error deleting design:", error);
      }
    };

    onMounted(fetchDesigns);

    return { designs, deleteDesign };
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-body {
  text-align: center;
}

button {
  margin-right: 10px;
}
</style>

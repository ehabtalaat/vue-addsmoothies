<template>
    <div class="modal fade" id="myModal2">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h3 class="modal-title">edit smoothie {{smoothie.title}}</h3>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <form @submit.prevent="editSmoothie">
      <div class="field title form-group">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="smoothie.title" class="form-control">
      </div>
      <div v-for="(ing, index) in smoothie.ingredients" class="field ingredient" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]" class="form-control">
        <i class="fas fa-trash-alt" @click="deleteIng(ing)"></i>
      </div>
      <div class="field add-ingredient form-group">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient"  @keydown.enter.prevent="addIng" 
        class="form-control" v-model="another">
      </div>
      <div class="form-group">
         <p v-if="feedback" class="alert alert-danger">{{ feedback }}</p>
        <input class="btn btn-primary" type="submit" value="update">
      </div>
    </form>
      </div>

    </div>
  </div>
</div>
</template>
<script>
import db from '@/firebase/init'
import slugify from 'slugify'
export default {
    props:["smoothie"],
      data(){
    return{
      another: null,
      feedback: null,
      slug: null
    }
  },
    methods:{
        editSmoothie(){
       if(this.smoothie.title){
        this.feedback = null
        // create a slug
        this.slug = slugify(this.smoothie.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        if(this.another){
         this.smoothie.ingredients.push(this.another);
         this.another = null;
        }
        // update smoothie in firestore
        db.collection('smoothies').doc(this.smoothie.id).update({
          title: this.smoothie.title,
          slug: this.slug,
          ingredients: this.smoothie.ingredients
        }).then(() => {
          location.reload();
        }).catch(err => {
          console.log(err)
        })
      } else {
        this.feedback = 'You must enter a smoothie title'
      }
    
    },
         addIng(){
      if(this.another){
        this.smoothie.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to add another ingredient'
      }
    },
        deleteIng(ing){
      this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
        return ingredient != ing
      })
        }
    }
};
</script>
<style scoped>
.field{
  position: relative;
}
 .fa-trash-alt{
  position: absolute;
  right: 8px;
  bottom: 12px;
  color: #aaa;
  font-size: 1.1rem;
  cursor: pointer;
 }
 label{
    color: #f05f5d;
    font-weight: bold;
 }
 .btn{
   background-color:  #72c0b7;
   color: #f05f5d;
   font-weight: bold;
   border-radius: 20px;
   border: none;
 }
 .btn:hover{
   background-color:  #72c0b7;
   color: #f05f5d;
   font-weight: bold;
   border-radius: 20px;
   border: none;
 }
 h3{
  font-size: 1.3rem;
  text-align: center;
  color: #f05f5d;
  font-weight:bold;
  margin-top:20px;
  margin-bottom: 20px;
}
</style>
<template>
    <div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h3 class="modal-title">add new smootie</h3>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <form @submit.prevent="addSmoothie">
      <div class="field title form-group">
        <label for="title">Smoothie title:</label>
        <input type="text" name="title" v-model="title" class="form-control">
      </div>
      <div v-for="(ing, index) in ingredients" class="field ingredient" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="ingredients[index]" class="form-control">
        <i class="fas fa-trash-alt" @click="deleteIng(ing)"></i>
      </div>
      <div class="field add-ingredient form-group">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient"  @keydown.enter.prevent="addIng" 
        class="form-control" v-model="another">
      </div>
      <div class="form-group">
         <p v-if="feedback" class="alert alert-danger">{{ feedback }}</p>
        <input class="btn btn-primary" type="submit" value="add smoothies">
      </div>
    </form>
      </div>

    </div>
  </div>
</div>
</template>
<script>
import db from "../firebase/init.js"
import slugify from 'slugify'
export default {
    data(){
        return{
     title: null,
      ingredients: [],
      another: null,
      feedback: null
        }
    },
    methods:{
     addSmoothie(){
      if(this.title){
      this.feedback = null;
      this.slug = slugify(this.title,{
          replacement:'-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
      })
      console.log(this.slug);
      this.ingredients.push(this.another);
     db.collection('smoothies').add({
          title:this.title,
          ingredients:this.ingredients,
          slug:this.slug
      }).then(() => {
          location.reload();
        }).catch(err => {
          console.log(err)
        });

      }else{
         this.feedback = 'You must enter a smoothie title'
      }
     },
       addIng(){
      if(this.another){
        this.ingredients.push(this.another)
        this.another = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a value to add another ingredient'
      }
    },
    deleteIng(ing){
        this.ingredients = this.ingredients.filter((ingredient)=>{
            return ingredient != ing;
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
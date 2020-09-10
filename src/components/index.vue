<template>
	<div class="container">
	<div class="row">
			<editsmoothie :smoothie="smoothie" v-if="smoothiesall" />
		<div class="col-md-4"  v-for="smoothie in smoothies" :key="smoothie.id">
			<div class="card">
				<i class="fas fa-trash-alt" @click="deletesmoothie(smoothie.id)"></i>
				<h3 class="text-center">{{smoothie.title}}</h3>
		<i class="fas fa-edit" aria-hidden="true" @click="displaysmoothies(smoothie)"
		data-toggle="modal" data-target="#myModal2"></i>
				<ul>
			<li v-for="(grad,index) in smoothie.ingredients" :key="index">
				{{grad}}
				
			</li>
			</ul>			
			</div>
		</div>
	</div>
	</div>
	
</template>
<script>
import db from "../firebase/init.js"
import editsmoothie from "./editsmoothie"
	export default{
components:{
editsmoothie
},
	data(){
		return{
	smoothiesall:false,
	smoothie:null,
	smoothies: []
			}
		},
	created(){
	db.collection("smoothies").get()
	.then((all) =>{
	all.forEach((doc) =>{
	let smoothie =doc.data();
	smoothie.id = doc.id;
	this.smoothies.push(smoothie);
		})
	})
	},
 methods:{
deletesmoothie(id){
db.collection('smoothies').doc(id).delete()
.then(() => {
this.smoothies = this.smoothies.filter((smoothie) =>{
return smoothie.id != id;
});
 });
 },
 displaysmoothies(smoothie) {
 this.smoothie = smoothie;
 this.smoothiesall = true;
}
 }
	};
</script>
<style scoped>
.container{
	margin-top:50px;
}
.card{
	margin-top: 20px;
	margin-bottom: 10px;
}
.card h3{
  font-size: 1.8rem;
  text-align: center;
  color: #f05f5d;
  font-weight:bold;
  margin-top:20px;
  margin-bottom: 20px;
}
ul{
	list-style: none;
	margin-bottom: 20px;
}
ul li{
	display: inline-block;
	padding: 6px 10px;;
	margin-left: 10px;
	color:#f05f5d;
	border-radius: 20px;
	background-color: #78b1aa;
	margin-top: 3px;
	font-weight: bold;
}
.fa-trash-alt{
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
.fa-edit{
cursor: pointer;
color:#07689f;
font-weight: bold;
font-size: 2rem;
bottom: -14px;
right: -14px;
position:absolute;
}
</style>
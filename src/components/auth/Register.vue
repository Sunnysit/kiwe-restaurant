<template>
  <div class="register-container">
        <h1 class="container-title">Sign Up</h1>
       <form action="#">
        <label for="email">E-mail</label>
        <input v-model="inputEmail" type="email" name="email" >
        <label for="password">Password</label>
        <input v-model="inputPwd" type="password" name="password" >
        <label for="nickname">Nickname</label>
        <input v-model="inputNickName" type="text" name="nickname" >
        <button class="btn" v-on:click="submitSignup" type="submit">Sign up</button>
      </form>
        <p class="red-text">{{errMsg}}</p>
  </div>
</template>

<script>
import firebase from 'firebase';


export default {
  name: 'Register',
  props:{
      showRegister: Boolean
  },
  data: function(){
      return{
          inputEmail: '',
          inputPwd: '',
          inputNickName: '',
          inputPhone:'',
          errMsg:''
      }
  },
  methods: {
    submitSignup:function(e){
            e.preventDefault();
            //Submit to Firebase
            firebase.auth().createUserWithEmailAndPassword(this.inputEmail, this.inputPwd)
            //grab the email and password to create a new user
            .then((resp)=>{
              //resp is what the database is returning to us after creating a new user
              console.log(resp);
               let db = firebase.firestore();
               //firestore is the cloud
                return db.collection('restaurants').doc(resp.user.uid).set({
                  //From this object of the firebase(reps), grab just the UID to set the user information on firebase.
                rName : this.inputNickName,
                rid:'123',
                cuisine: 'mexican',
                rating: 4.5,
                priceLevel: 2,
                address: '',
                rImgRef:'',
                waitTime:''
                
               })
             
            }).catch((err) => {
                  // Handle Errors here.
                  this.errMsg = err.message;
                 
                });
            
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

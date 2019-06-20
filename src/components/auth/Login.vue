<template>
  <div class="login-container" >
    <h1 class="container-title">Log In</h1>
    <form >
        <label for="email">E-mail</label>
        <input v-model="inputEmail" type="email" name="email" >
         <label for="password">Password</label>
        <input v-model="inputPwd" type="password" name="password" >
        <button class="btn" v-on:click="submitLogin" type="submit">Log in</button>
    </form>
    <p class="red-text">{{errMsg}}</p>

  </div>

</template>

<script>
import firebase from 'firebase';


export default {
  name: 'Login',
  data: function(){
      return{
          inputEmail: '',
          inputPwd: '',
          errMsg:''
      }
  },
  methods: {
      submitLogin:function(e){
          e.preventDefault();
          //Submit to Firebase
           firebase.auth().signInWithEmailAndPassword(this.inputEmail, this.inputPwd)
            .then((user) => {

              let db = firebase.firestore();
           
              let docRef = db.collection("restaurants").doc(user.user.uid);
                  docRef.get().then((doc) => {
                      if (doc.exists) {
                          console.log("Document data:", doc.data());
                        
                        this.$store.dispatch('getLoginId',doc.data().loginId);
                        this.$store.dispatch('getLineupSwitch',doc.data().openLineUp);
                        this.$store.dispatch('changeTableSizeSmall',doc.data().sizeStandard.small);
                        this.$store.dispatch('changeTableSizeMedium',doc.data().sizeStandard.medium);
                        this.$store.dispatch('changeTableSizeLarge',doc.data().sizeStandard.large);
                          
                          //Go to Homepage
                          this.$router.push('home');

                      } else {
                          // doc.data() will be undefined in this case
                          console.log("No such document!");
                      }
                  }).catch((err) => {
                      console.log("Error getting document:", err);
                       this.errMsg = err;
                  });

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

<template>
  <div class="login-container" >
    <h1 class="container-title">QUEUE MANAGEMENT</h1>
    <section class="login-section">
      <img class="logo" src="@/assets/kiwe__Logo.png" alt="kiwe logo">
      <p class="logo-title">kiwe</p>
    <form class="login-form">
        <label for="email">E-mail</label>
        <input v-model="inputEmail" type="email" name="email" >
         <label for="password">Password</label>
        <input v-model="inputPwd" type="password" name="password" >
        <button class="btn btn-text" v-on:click="submitLogin" type="submit">Log In</button>
    </form>
    <p class="red-text">{{errMsg}}</p>
     </section>
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
          errMsg:'',
          
          
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
                        this.$store.dispatch('getRid',doc.data().rid);
                        this.$store.dispatch('getRname',doc.data().rName);
                        this.$store.dispatch('getLineupSwitch',doc.data().openLineUp);
                        this.$store.dispatch('changeTableSizeSmall',doc.data().sizeStandard.small);
                        this.$store.dispatch('changeTableSizeMedium',doc.data().sizeStandard.medium);
                        this.$store.dispatch('changeTableSizeLarge',doc.data().sizeStandard.large);
                        this.$store.dispatch('changeEstTimeSmall',doc.data().waitTime.small);
                        this.$store.dispatch('changeEstTimeMedium',doc.data().waitTime.medium);  
                        this.$store.dispatch('changeEstTimeLarge',doc.data().waitTime.large);

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
@import "../../sass/_variables.scss";

    .logo{ //(0,0,1,0)
      width: 120px;
      height: auto;
      display: block;
      margin:  0 auto;
      margin-top: 30px;
    }

    .logo-title{  //(0,0,1,0)
    text-align: center;
    font-family: Lobster, sans-serif;
    margin-top: 1vh;
    color: $main-green;
    font-size: 2.5rem;
    margin-bottom: 30px;
    }

    .container-title {  //(0,0,1,0)
    color: $main-green;
    text-transform: uppercase;
    font-size: 2rem;
    font-family: "Source Serif Pro";
    font-weight: bold;
    margin-top: 10px;
    }

    .login-form{  //(0,0,1,0)
        label { //(0,0,0,1)
        font-family: "Source Serif Pro", "Times New Roman", serif;
        font-size: 1.25rem;
        color: black;
        font-weight: bold;
        display: block;
          }

        input{  //(0,0,0,1)
              background-color: #ebf1c8 !important;
              font-family: "Open Sans", Arial, sans-serif;
              font-size: 1rem;
              border-radius: 7px !important;
              border-bottom: none !important;
              padding-left: 1rem !important;
              margin-bottom: 2.5vh !important;
              box-shadow: none;
              border: none;
              outline: none;
              height: 3rem;
              width: 300px;
        }
    }

</style>

<template>
  <section class="waitlist-section">
    <!-- <button class="btn green" v-on:click="getListData">Fetch</button> -->
    <div class="waitlist-container">
    <!-- Small Group -->
    <div class="col s12 m4">
        <p class="group-title">Small group</p>
        <ul class="single-list">
          <li class="card" v-for="spot in waitLineSmall" :key="spot.joinTime">
          <div class="card-content white-text">
            <h2 class="card-title"><span>{{spot.nickName}}</span><span class="text-orange">{{spot.grSize}}</span></h2>
            <p class="join-time"><span>Join time</span><span class="text-orange">{{new Date(spot.joinTime).getHours()}}:{{new Date(spot.joinTime).getMinutes()}}</span></p>
            <p class="wait-time"><span>Time waited</span><span class="text-orange">{{ ((currentTime-new Date(spot.joinTime).getTime())/60000+1).toFixed(0)}}min</span></p>
            <div class="addition-container">
            <p>{{spot.addOptionsAccs}}</p>
            <p>{{spot.addOptionsSeating}}</p>
            </div>
          </div>

          <div class="card-action btn-group">
          <button v-on:click="sendReadyUser(`${spot.joinTime}_${spot.uid}`)" class="btn green"><img src="@/assets/kiwe__Done.png" alt="icon-done"></button>
          <button v-on:click="sendNotification(`${spot.joinTime}_${spot.uid}`)" class="btn orange "><img src="@/assets/kiwe__FiveMinute.png" alt="icon-notification"></button>
          <button v-on:click="cancelUser(`${spot.joinTime}_${spot.uid}`, `${spot.uid}`)" class="btn grey"><img src="@/assets/kiwe__Cancel.png" alt="icon-cancel"></button></div>
          </li>
        </ul>
    </div>
    <div class="divider"></div>
      <!-- Medium Group -->
    <div class="col s12 m4">
         <p class="group-title">Medium group</p>
      <ul class="single-list">
      <li class="card" v-for="spot in waitLineMedium" :key="spot.joinTime">
        <div class="card-content white-text">
            <h2 class="card-title"><span>{{spot.nickName}}</span><span class="text-orange">{{spot.grSize}}</span></h2>
            <p class="join-time"><span>Join time</span><span class="text-orange">{{new Date(spot.joinTime).getHours()}}:{{new Date(spot.joinTime).getMinutes()}}</span></p>
            <p class="wait-time"><span>Time waited</span><span class="text-orange">{{ ((currentTime-new Date(spot.joinTime).getTime())/60000+1).toFixed(0)}}min</span></p>
            <div class="addition-container">
            <p>{{spot.addOptionsAccs}}</p>
            <p>{{spot.addOptionsSeating}}</p>
            </div>
        </div>

        <div class="card-action btn-group">
          <button v-on:click="sendReadyUser(`${spot.joinTime}_${spot.uid}`)" class="btn green"><img src="@/assets/kiwe__Done.png" alt="icon-done"></button>
          <button v-on:click="sendNotification(`${spot.joinTime}_${spot.uid}`)" class="btn orange "><img src="@/assets/kiwe__FiveMinute.png" alt="icon-notification"></button>
          <button v-on:click="cancelUser(`${spot.joinTime}_${spot.uid}`, `${spot.uid}`)" class="btn grey"><img src="@/assets/kiwe__Cancel.png" alt="icon-cancel"></button>
        </div>
      </li>
      </ul>
    </div>
    <div class="divider"></div>
      <!-- Large Group -->
    <div class="col s12 m4">
      <p class="group-title">Large group</p>
      <ul class="single-list">
      <li class="card" v-for="spot in waitLineLarge" :key="spot.joinTime">
        <div class="card-content white-text">
            <h2 class="card-title"><span>{{spot.nickName}}</span><span class="text-orange">{{spot.grSize}}</span></h2>
            <p class="join-time"><span>Join time</span><span class="text-orange">{{new Date(spot.joinTime).getHours()}}:{{new Date(spot.joinTime).getMinutes()}}</span></p>
            <p class="wait-time"><span>Time waited</span><span class="text-orange">{{ ((currentTime-new Date(spot.joinTime).getTime())/60000+1).toFixed(0)}}min</span></p>
            <div class="addition-container">
            <p>{{spot.addOptionsAccs}}</p>
            <p>{{spot.addOptionsSeating}}</p>
            </div>
        </div>

        <div class="card-action btn-group">
          <button v-on:click="sendReadyUser(`${spot.joinTime}_${spot.uid}`)" class="btn green"><img src="@/assets/kiwe__Done.png" alt="icon-done"></button>
          <button v-on:click="sendNotification(`${spot.joinTime}_${spot.uid}`)" class="btn orange "><img src="@/assets/kiwe__FiveMinute.png" alt="icon-notification"></button>
          <button v-on:click="cancelUser(`${spot.joinTime}_${spot.uid}`, `${spot.uid}`)" class="btn grey"><img src="@/assets/kiwe__Cancel.png" alt="icon-cancel"></button> </div>
      </li>
      </ul>
    </div>


  </div>
  </section>
</template>

<script>
import firebase from 'firebase';



export default {
  name: 'WaitList',
  data:function(){
      return{
        currentTime: new Date().getTime()
      }
  },
  computed:{
       waitLineSmall(){
       return this.$store.state.waitLineSmall;
     },
       waitLineMedium(){
       return this.$store.state.waitLineMedium;
     },
       waitLineLarge(){
       return this.$store.state.waitLineLarge;
     },
       waitLineSpec(){
       return this.$store.state.waitLineSpec;
     },
      sizeStandard(){
       return this.$store.state.sizeStandard;
      }

  },
  methods:{
    getListData(){
          
    let currentDate = `${this.$store.state.queryDate.month}-${this.$store.state.queryDate.date}-${this.$store.state.queryDate.year}`;
    let rid = this.$store.state.rid;
    let that = this;
    let db = firebase.firestore();
 

    db.collection("waitlist").where("status", "==", 'waiting').where("date","==",currentDate).where("rid","==",rid)
    .onSnapshot(function(querySnapshot) {
           let spotCounter = {
                smallSpot:1,
                mediumSpot: 1,
                largeSpot: 1,
              }
        that.$store.dispatch('emptyWaitList').then(()=>{
            querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
             //Add People to waitlist-spec
                let item = doc.data();
           
                    //Add People to waitlist-small
                    if(item.grSize<=that.$store.state.sizeStandard.small)
                    {   
                        item.currentSpot = spotCounter.smallSpot;
                        spotCounter.smallSpot++;
                        that.$store.dispatch('pushToSmallList',item)
                    }
                    //Add People to waitlist-medium
                    else if(item.grSize<=that.$store.state.sizeStandard.medium)
                    {   
                        item.currentSpot = spotCounter.mediumSpot;
                        spotCounter.mediumSpot++;
                        that.$store.dispatch('pushToMediumList',item)
                    }
                    //Add People to waitlist-large
                    else{
                        item.currentSpot = spotCounter.largeSpot;
                        spotCounter.largeSpot++;
                        that.$store.dispatch('pushToLargeList',item)
                          }
              });

              })


          })
      },
      sendReadyUser(spotId){

        let db = firebase.firestore();
                return db.collection('waitlist').doc(spotId).update({
                  status: 'success'
               })
      },
      sendNotification(spotId){

        let db = firebase.firestore();
                return db.collection('waitlist').doc(spotId).update({
                  notification: '5 minutes'
               })
      },
      cancelUser(spotId,uId){
        let db = firebase.firestore();
        console.log(uId);
        console.log('database id');
        console.log(spotId);

        db.collection("waitlist").doc(spotId).delete();
        db.collection("users").doc(uId).update({
          isInLine: false,
        }).then(function() {
            console.log("Document successfully deleted!");
        })
        .catch(function(error) {
            console.error("Error removing document: ", error);
        }); 
      },
      updateTime(){
        setInterval(() => {
        this.currentTime = new Date().getTime()
        }, 60000);
      }
  },
  created(){
      this.getListData();
      this.updateTime();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../sass/_variables.scss";
    
    .waitlist-section{
      background-color: #fff;
      border-radius: 20px;
      
    }

    .group-title{
    color: $main-green;
    font-family: "Source Serif Pro", sans-serif;
    font-size: 1.2rem;
    margin-top: 0;
    padding-bottom: 15px;
    font-weight: bold;
    text-transform: uppercase;
    }

    .waitlist-container{
      padding-top: 10px;
      display: grid;
      grid-template-columns: 1fr 5px 1fr 5px 1fr;
      grid-gap: 10px;
      min-height: 500px;

      @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
      }

    }

    .divider{
    background-color: $main-green;
    margin: 20px 0;
    border-radius: 20px;
    }

    .single-list{
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      margin-left: 0;
      padding-left: 0;
      align-items: center;

      .card{
        border: 4px solid $main-green;
        border-radius: 10px;
        
        height: 180px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 15px;
        @media screen and (max-width: 700px) {
        width: 60vw;
        }
      }

      .card-title,
      .join-time,
      .wait-time{
        display: flex;
        justify-content: space-between;
        padding: 0 8px;
        margin: 0;
        font-weight: bold;
      }
      .card-content{
        width: 100%;
      }

      .addition-container p{
        color: $accent;
        margin: 0;
        font-weight: bold;
      }

      .card-action{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 8px;
        padding: 0 8px;
        .btn{
          width: 40px;
          height:40px;
          background-color: $main-green;
          outline: none;
          border: none;
          img{
            display: block;
            width: 20px;
            margin: 0 auto;
          }
          
        }
      }
    }
    .text-orange{
      color: $accent;
      
    }
    
</style>

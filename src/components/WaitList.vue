<template>
  <div class="waitlist-container">
    <!-- <button class="btn green" v-on:click="getListData">Fetch</button> -->
    <div class="row">
    <!-- Small Group -->
    <div class="col s12 m4">
        <p>Small group</p>
      <div class="card blue" v-for="spot in waitLineSmall" :key="spot.joinTime">
        <div class="card-content white-text">
          <span class="card-title">{{spot.nickName}} - {{spot.grSize}}</span>
          <p>Join time:{{new Date(spot.joinTime).getHours()}}:{{new Date(spot.joinTime).getMinutes()}}:{{new Date(spot.joinTime).getSeconds()}}</p>
          <p>Wait Time:{{ ((currentTime-new Date(spot.joinTime).getTime())/60000+1).toFixed(0)}}mins</p>
          <span class="white-text red">{{spot.addOptionsAccs}}</span>
          <br/>
          <span class="white-text red">{{spot.addOptionsSeating}}</span>
        </div>

        <div class="card-action btn-group">
          <button v-on:click="sendReadyUser(`${spot.joinTime}_${spot.uid}`)" class="btn green"><i class="fas fa-check"></i></button>
          <button v-on:click="sendNotification(`${spot.joinTime}_${spot.uid}`)" class="btn orange"><i class="fas fa-bell"></i></button>
          <button v-on:click="cancelUser(`${spot.joinTime}_${spot.uid}`, `${spot.uid}`)" class="btn grey"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
      <!-- Medium Group -->
    <div class="col s12 m4">
         <p>Medium group</p>
      <div class="card teal lighten-2" v-for="spot in waitLineMedium" :key="spot.joinTime">
        <div class="card-content white-text">
           <span class="card-title">{{spot.nickName}} - {{spot.grSize}}</span>
          <p>Join time:{{new Date(spot.joinTime).getHours()}}:{{new Date(spot.joinTime).getMinutes()}}:{{new Date(spot.joinTime).getSeconds()}}</p>
          <p>Wait Time:{{ ((currentTime-new Date(spot.joinTime).getTime())/60000+1).toFixed(0)}}mins</p>
          <span class="white-text red">{{spot.addOptionsAccs}}</span>
          <br/>
          <span class="white-text red">{{spot.addOptionsSeating}}</span>
        </div>

        <div class="card-action btn-group">
          <button v-on:click="sendReadyUser(`${spot.joinTime}_${spot.uid}`)" class="btn green"><i class="fas fa-check"></i></button>
                    <button v-on:click="sendNotification(`${spot.joinTime}_${spot.uid}`)" class="btn orange "><i class="fas fa-bell"></i></button>
          <button v-on:click="cancelUser(`${spot.joinTime}_${spot.uid}`, `${spot.uid}`)" class="btn grey"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>
      <!-- Large Group -->
    <div class="col s12 m4">
         <p>Large group</p>
      <div class="card green lighten-2" v-for="spot in waitLineLarge" :key="spot.joinTime">
        <div class="card-content white-text">
          <span class="card-title">{{spot.nickName}} - {{spot.grSize}}</span>
          <p>Join time:{{new Date(spot.joinTime).getHours()}}:{{new Date(spot.joinTime).getMinutes()}}:{{new Date(spot.joinTime).getSeconds()}}</p>
          <p>Wait Time:{{ ((currentTime-new Date(spot.joinTime).getTime()+1)/60000).toFixed(0)}}mins</p>
          <span class="white-text red">{{spot.addOptionsAccs}}</span>
          <br/>
          <span class="white-text red">{{spot.addOptionsSeating}}</span>
        </div>

        <div class="card-action btn-group">
          <button v-on:click="sendReadyUser(`${spot.joinTime}_${spot.uid}`)" class="btn green"><i class="fas fa-check"></i></button>
                    <button v-on:click="sendNotification(`${spot.joinTime}_${spot.uid}`)" class="btn orange"><i class="fas fa-bell"></i></button>
          <button v-on:click="cancelUser(`${spot.joinTime}_${spot.uid}`, `${spot.uid}`)" class="btn grey"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </div>


  </div>
  
  </div>
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
    .btn-group{
      display: flex;
      justify-content: space-around;
    }
</style>

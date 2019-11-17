<template>
  <div>
    <div>
    <label for="name">お名前</label>
    <input id="name" type="text" v-model.lazy="eventData.name"
    >
    <p>  {{eventData.name}}</p>
</div>


    <div>
    <label for="number">参加人数</label>
    <input id="number" type="number" v-model.number="eventData.number"
    >
    <p>  {{eventData.number}}</p>
</div>

    <div>
    <label for="detail">詳細</label>
    <textarea id="detail" col="30" rows="10" v-model.trim="eventData.detail"></textarea>
    <label for="ciger">喫煙</label>
    <input id="ciger" type="checkbox" v-model="eventData.ciger"
    >
    <p>  {{eventData.ciger}}</p>
</div>

    <div>
    <p>オプション</p>
    <label for="a">a</label>
    <input id="a" type="checkbox" value="オプションa" v-model="eventData.option"
    >
    <label for="b">b</label>
    <input id="b" type="checkbox" value="オプションb" v-model="eventData.option"
    >
    <label for="c">c</label>
    <input id="c" type="checkbox" value="オプションc" v-model="eventData.option"
    >
    <label for="d">d</label>
    <input id="d" type="checkbox" value="オプションd" v-model="eventData.option"
    >
    <p>  {{eventData.option}}</p>
</div>


    <div>
    <label for="pay">有料</label>
    <input id="pay" type="radio" value="有料" v-model="eventData.price"
    >
    <label for="free">無料</label>
    <input id="free" type="radio" value="無料" v-model="eventData.price"
    >
</div>

    <div>
    <p>色</p>
    <select v-model="eventData.color">
      <option v-for="color in colors" :key="color">{{color}}</option>
    </select>
    <p>{{eventData.color}}</p>
</div>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  data(){
      return{
        colors:["black","red","pink","blue","green"],
          eventData:{
              name:"恵子",
              number:0,
              detail:"",
              ciger:false,
              option:[],
              price:'無料',
              color:'選択してください'
          }
      }
  }
}
</script>

<style>
</style>

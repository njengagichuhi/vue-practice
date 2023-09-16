const app = Vue.createApp({
  data() {
    return {
      showBook: true,
      title: "the final destination",
      auther: "brian sunderson",
      age: 40,
      x:0,
      y:0,
      comment:'i am happy'
    };
  },
  methods: {
    changetitle(title) {
      //this.title='jomanws'
      this.title = title;
    },
    TogleShowbook() {
      this.showBook = !this.showBook;
    },
  handleEvent(e,data){
    console.log(e,e.type)
    if(data){
      console.log(data)
    }
  },
  handleMousemove(e){
    this.x = e.offsetY
    this.y = e.offsetX



  }
  },
});
app.mount("#app");

<template>
  <div class="container">
    <!-- title -->
    <h1 class="title">
      {{this.getportfolioInfo[0].title}}
    </h1>
    <!-- /title -->
    <!-- info -->
    <div class="info">
      <h2>Info</h2>
      <dl>
        <dt>링크 :</dt>
        <dd>
          <a :href="this.getportfolioInfo[0].link" target="_blank">
            바로가기
          </a>
        </dd>
      </dl>
      <dl>
        <dt>개발 기간 :</dt>
        <dd>{{this.getportfolioInfo[0].day}}</dd>
      </dl>
      <dl>
        <dt>개발 언어 :</dt>
        <dd>{{this.getportfolioInfo[0].language}}</dd>
      </dl>
      <dl>
        <dt>설명 :</dt>
        <dd>{{this.getportfolioInfo[0].description}}</dd>
      </dl>
    </div>
    <!-- /info -->
    <!-- view -->
    <div class="view">
      <h2>View</h2>
      <div class="image-box">
        <img 
          :src="this.getportfolioInfo[0].image.default" 
          :alt="this.getportfolioInfo[0].title"
          :title="this.getportfolioInfo[0].title">
      </div>
    </div>
    <!-- /view -->
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  computed: {
    route_title(){
      return this.$route.params.title
    },
    lists(){
      return this.$store.state.portfolio.lists
    },
    getportfolioInfo(){
      return this.lists.filter(this.isFilter)
    }
  },
  mounted() {
    // console.log(this.route_title);
    // console.log(this.lists);
    // console.log(this.getportfolioInfo)
    // console.log(this.getportfolioInfo[0].title)
    // console.log(this.getportfolioInfo[0].link)
    // console.log(this.getportfolioInfo[0].day)
    // console.log(this.getportfolioInfo[0].language)
    // console.log(this.getportfolioInfo[0].description)
    // console.log(this.getportfolioInfo[0].image.default)
  },
  methods: {
    isFilter(element){
      if(element.title === this.route_title)  {
        return true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';
.container {
  padding: 100px 0;
}
.title {
  font-weight: 700;
  font-family: $font--NotoSans;
  font-size: 1.75em;
  padding-bottom: 100px;
}
.info {
  padding-bottom: 50px;
  h2 {
    color:#191919;
    font-family: $font--Russo;
    padding-bottom: 20px;
  }
  dl {
    display: flex;
    font-family: $font--NotoSans;
    line-height: 1.63;
    dt {
      color:#999;
      width: 80px;
      margin-right: 10px;
    }
    dd {
      color:#333;
      a {
        color:#6b60e5;
      }
    }
  }
}

.view {
  h2 {
    color:#191919;
    font-family: $font--Russo;
    padding-bottom: 20px;
  }
  .image-box {
    width: 100%;
    border: 1px solid #ccc;
    img {
      width: 100%;
    }
  }
}
</style>
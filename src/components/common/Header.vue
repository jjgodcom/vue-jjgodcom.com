<template>
  <header>
    <!-- logo -->
    <div class="logo">
      <RouterLink to="/">
        <div class="logo-image"
          :class="{active : isHover}"
          @mouseover="hover"
          @mouseleave="hover">
        </div>
      </RouterLink>
      <div class="logo-text">Hi~ I am Suho,park :) 💦</div>
    </div>
    <!-- //logo -->
    <div class="container">
      <!-- menu -->
      <ul class="menu">
        <li
          v-for="nav in navigations"
          :key="nav.name">
          <RouterLink 
            :to="nav.href">
            {{nav.name}}
          </RouterLink>
        </li>
      </ul>
      <!-- //menu -->
      <!-- icon -->
      <ul class="icon">
        <li>
          <a href="https://github.com/jjgodcom" target="_blank">
            <svg width="24px" height="24px" viewBox="0 0 438.549 438.549">
              <path fill="#757474" d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
              c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
              c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
              c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
              c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
              c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
              c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
              c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
              c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
              c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
              c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
              c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
              c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
              c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
              c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
              c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
              c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
              c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
              c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
              C438.536,184.851,428.728,148.168,409.132,114.573z">
              </path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://open.kakao.com/o/sY85ECMe" target="_blank">
            <svg 
            width="30" 
            height="30">
              <path
              d="m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z" 
              fill="#757474">
              </path>
            </svg>
          </a>
        </li>
        <li @click="this.isClick = !this.isClick">
          <a href="javascript:void(0)">
            <svg data-v-321af00c="" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28 28" xml:space="preserve">
              <circle :class="{ active: isClick}" data-v-321af00c="" cx="14" cy="14" r="14" class="circle" style="fill: rgb(117, 116, 116);"></circle>
              <line data-v-321af00c="" x1="8" y1="8" x2="20" y2="8" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-linecap: round; stroke-miterlimit: 10;"></line>
              <line data-v-321af00c="" x1="8" y1="14" x2="20" y2="14" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-linecap: round; stroke-miterlimit: 10;"></line>
              <line data-v-321af00c="" x1="8" y1="20" x2="20" y2="20" style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2; stroke-linecap: round; stroke-miterlimit: 10;"></line>
            </svg>
          </a>
          <!-- mobile menu -->
          <div 
            class="mobile-menu" 
            :class="{ active: isClick}">
            <div
              v-for="nav in navigations"
              :key="nav.name">
              <RouterLink 
                :to="nav.href">
                {{nav.name}}
              </RouterLink>
            </div>
          </div>
          <!-- /mobile menu -->
        </li>
      </ul>
      <!-- //icon -->
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      isHover: false,
      isClick:false,
      navigations:[
        {
          name:'About',
          href:'/about'
        },
        {
          name:'Work',
          href:'/work'
        },
        // {
        //   name:'NotFound',
        //   href:'/123'
        // },
        // {
        //   name:'Test',
        //   href:'/test'
        // }
      ]
    }
  },
  watch:{
    isHover(value){
      // console.log(value);
    },
    isClick(value){
      console.log(value);
    }
  },
  methods:{
    hover(){
      this.isHover = !this.isHover
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/scss/var.scss';

header {
  display: flex;
  align-items: center;
  height: 106px;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 2;
  .logo {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translateY(-50%);
    &-image {
      width: 50px;
      height: 50px;
      background-image: url('../../assets/common/logo.png');
      background-size: cover;
      background-repeat: no-repeat;
      transition: 0.3s;
      &.active {
        background-image: url('../../assets/common/logoHover.png');
      }
    }
    &-text {
      width: 220px;
      position: absolute;
      bottom: -100px;
      left: 25px;
      transform: rotate(90deg);
      transform-origin: left center;
      font-family: $font--Russo;
      font-size: 17px;
      color:#191919;
    }
  }
  .container {
    // width: 100%;
    display: flex;
    
    .menu {
      display: flex;
      align-items: center;
      font-family: $font--Russo;
      font-size: 16px;
      
      li {
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
        }
        a {
          text-decoration: none;
          color:#333;
          &:hover,
          &.router-link-active{
            @include textGradient;
          }
        }
      }
    }
    .icon {
      display: flex;
      align-items: center;
      margin-left: auto;
      li {
        margin-right: 10px;
        a {
            position: relative;
            &::before,
            &::after {
              pointer-events: none;
              position: absolute;
              left:50%;
              transform: translateX(-50%);
              opacity: 0;
            }
            &::before {
              content: "";
              bottom: -10px;
              border: 5px solid transparent;
            }
            &::after {
              content:'';
              bottom: -40px;
              padding: 0.5rem 0.75rem;
              color: #333;
              font-size: 14px;
              border-radius: 3px;
              color:#fff;
            }
          }
        &:nth-child(2) {
          margin-right: 0;
        }
        &:last-child {
          display: none;
          position: relative;
          .circle {
            &.active {
              fill: #303242 !important;
              transition: 0.3s;
            }
          }
          .mobile-menu {
            position: absolute;
            top: 30px;
            right: 0;
            transform: scale(0);
            transform-origin: right top;
            transition: all 0.4s cubic-bezier(0.54, -0.10, 0.57, 0.57);
            background-color: #303242;
            color: #fff;
            padding: 15px 0;
            text-align: left;
            border-radius: 100px;
            opacity: 0;
            user-select: none;

            &.active {
              transform: scale(1);
              border-radius: 20px;
              opacity: 1;
              user-select: auto;
            }
            
            div {
              padding: 10px 30px;
              cursor: pointer;
              a {
                color:#fff;
                text-decoration: none;
              }
            }
          }
        }
        // common
        &:first-child:hover,
        &:nth-child(2):hover {
          a {
            position: relative;
            &::before,
            &::after {
              opacity: 1;
            }
          }
        }
        // custom
        &:first-child:hover {
          path {
            fill:#e94e32;
            transition: 0.3s;
          }
          a {
            &::before {
              border-bottom-color: #e94e32;
            }
            &::after {
              content:'GitHub';
              background-color: #e94e32;
            }
          }
        }
        &:nth-child(2):hover {
          path {
            fill:#ffc723;
            transition: 0.3s;
          }
          a {
            &::before {
              border-bottom-color: #ffc723;
            }
            &::after {
              content:'KakaoTalk';
              background-color: #ffc723;
            }
          }
        }
        &:nth-child(3):hover {
          .circle {
            fill: #303242 !important;
            transition: 0.3s;
          }
        }
      }
      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

}

@include media890 {
  header {
    height: 80px;
    .logo-text {
      display: none;
    }
    .container {
      .menu {
        display: none;
      }
      .icon {
        li {
          &:nth-child(2) {
            margin-right: 10px;
          }
          &:last-child {
            display: block;
            margin-right: 0;
          }
        }
      }
    }
  }
  
  
}
</style>
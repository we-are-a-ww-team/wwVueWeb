<template>
  <div class="productMain">
    <!-- 轮播图 -->
    <shufflingFigure />
    <div>
      <div class="container">
        <h3><span>OUR PRODUCTS</span></h3>

        <div v-for="(data,index) in productArr"
             :key="index"
             class="service-grids">
          <div v-for="(item,zed) in data"
               :key="zed">
            <div class="imgDiv">
              <div></div>
              <img :src="item.src">
            </div>
            <div class="detail">{{item.detail}}</div>
            <div class="littleBtn"><span>Details</span></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import shufflingFigure from './shufflingFigure'

export default {
  components: {
    shufflingFigure
  },
  data () {
    return {
      productArr: [
        [
          {
            src: require('../assets/img/home_product/1.jpg'),
            detail: 'Massage Gun K-AJ-EM003',
          },
          {
            src: require('../assets/img/home_product/2.jpg'),
            detail: 'Massage Gun K-AJ-EM005',
          },
          {
            src: require('../assets/img/home_product/3.jpg'),
            detail: 'Massage Gun K-AJ-EM006',
          },
        ],
        [
          {
            src: require('../assets/img/home_product/4.jpg'),
            detail: 'IPL Hair Removal K-QC-05',
          },
          {
            src: require('../assets/img/home_product/5.jpg'),
            detail: 'IPL Hair Removal K-QC-01',
          },
          {
            src: require('../assets/img/home_product/6.jpg'),
            detail: 'IPL Hair Removal K-LB-110',
          },
        ],
        [
          {
            src: require('../assets/img/home_product/7.jpg'),
            detail: 'Electric Toothbrush K-NJ-8007',
          },
          {
            src: require('../assets/img/home_product/8.jpg'),
            detail: 'Electric Toothbrush K-NJ-D2',
          },
          {
            src: require('../assets/img/home_product/9.jpg'),
            detail: 'Electric Toothbrush K-XL-YE802',
          },
        ],
        [
          {
            src: require('../assets/img/home_product/10.jpg'),
            detail: 'Blackhead Remover K-XM-01',
          },
          {
            src: require('../assets/img/home_product/11.jpg'),
            detail: 'E-Facial Cleansing Brush K-LM-021',
          },
          {
            src: require('../assets/img/home_product/12.jpg'),
            detail: 'E-Facial Cleansing Brush K-LM-020',
          },
        ],
      ]
    }
  }
}
</script>
<style scoped>
.container > h3 {
  margin-top: 30px;
  font-size: 2.5em;
  color: #5b6169;
  text-align: center;
}
.container > h3 > span {
  display: inline-block;
  padding: 0;
  background: #fff;
  color: #333;
  line-height: 2;
  border-bottom: 1px solid #e5e5e5;
}
.service-grids {
  display: flex;
  font-size: 24px;
  padding-bottom: 20px;
}
.service-grids img {
  width: 40%;
}
.service-grids > div {
  flex: 1;
}
.container {
  width: 100%;
}
/* .imgDiv > div {
  margin: 0 auto;
  height: 80%;
  width: 80%;
  background-image: url("../assets/img/home_product/3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  -moz-background-size: 100% 100%;
} */
.littleBtn > span {
  display: inline-block;
  margin-top: 14px;
  font-size: 1em;
  text-decoration: none;
  background: #575757;

  padding: 0.2em 1em;
  color: #fff;
}
.littleBtn > span:hover {
  cursor: pointer;
  background: #008d71;
}
.detail {
  margin-top: 14px;
}
.productMain {
  padding: 0 40px;
}
</style>
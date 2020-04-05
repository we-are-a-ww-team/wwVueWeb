<template>
  <div>
    <a-carousel arrows>
      <div slot="prevArrow"
           class="custom-slick-arrow"
           style="left: 10px;zIndex: 1">
        <a-icon type="left-circle" />
      </div>
      <div slot="nextArrow"
           class="custom-slick-arrow"
           style="right: 10px">
        <a-icon type="right-circle" />
      </div>
      <div>
        <img src="../assets/img/banner/1.jpg" />
      </div>
      <div>
        <img src="../assets/img/banner/2.jpg" />
      </div>
      <div>
        <img src="../assets/img/banner/3.jpg" />
      </div>
      <div>
        <img src="../assets/img/banner/4.jpg" />
      </div>
      <div>
        <img src="../assets/img/banner/5.jpg" />
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: auto;
  /* line-height: 400px; */
  background: #364d79;
  overflow: hidden;
}
.ant-carousel >>> .slick-slide > div {
  margin-bottom: -7px;
}
img {
  width: 100%;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
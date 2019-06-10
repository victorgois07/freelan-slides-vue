<template>
  <div class="home d-flex align-items-center" v-if="$route.params.id == 1">
    <Slide1 />
  </div>
  <div class="home d-flex align-items-center" v-else-if="$route.params.id == 2">
    <Slide2 />
  </div>
  <div class="home d-flex align-items-end" v-else-if="$route.params.id == 3">
    <Slide3 />
  </div>
  <div class="home d-flex align-items-end" v-else-if="$route.params.id == 4">
    <Slide4 />
  </div>
  <div class="home d-flex align-items-center" v-else-if="$route.params.id == 5">
    <Slide5 />
  </div>
  <div class="home d-flex align-items-center" v-else-if="$route.params.id == 6">
    <Slide6 />
  </div>
  <div class="home d-flex align-items-center" v-else-if="$route.params.id == 7">
    <Slide7 />
  </div>
  <div class="home d-flex align-items-center" v-else-if="$route.params.id == 8">
    <Slide8 />
  </div>
  <div class="home d-flex align-items-end" v-else-if="$route.params.id == 9">
    <Slide9 />
  </div>
  <div class="home d-flex align-items-end" v-else-if="$route.params.id == 10">
    <Slide10 />
  </div>
  <div class="home" v-else>
    <Slide1 />
  </div>
</template>

<script>
// @ is an alias to /src
import Slide1 from '../components/slide_1'
import Slide2 from '../components/slide_2'
import Slide3 from '../components/slide_3'
import Slide4 from '../components/slide_4'
import Slide5 from '../components/slide_5'
import Slide6 from '../components/slide_6'
import Slide7 from '../components/slide_7'
import Slide8 from '../components/slide_8'
import Slide9 from '../components/slide_9'
import Slide10 from '../components/slide_10'

export default {
  name: 'Home',
  components: {
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
    Slide7,
    Slide8,
    Slide9,
    Slide10
  }
}
</script>

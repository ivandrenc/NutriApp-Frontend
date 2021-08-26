<template>
  <div>
    <div  id="homeNav">
      <navbar-home/>
    </div>
    <b-container id="homeBody">
      <b-row>
        <b-col offset-md="3" sm="7" offset-sm="2">
          <h1>The Facts About Nutrition</h1>
          <h5><em>By Kathleen M. Zelman, MPH, RD, LD</em></h5>
          <p>Here's how to get the vitamins and minerals you need. </p>
          <p>Good nutrition is much more than something to fill your stomach --
             what you eat can affect your health, energy, and well-being in so many ways.</p>
          <p>The most important feature of a good diet is variety. We all know variety is the spice of life, but did you realize that unless you eat a wide variety of foods, you may be missing out on important vitamins, minerals, and other nutrients? Eating the right mix of vitamins and minerals will help you feel and look your best at any age.</p>
          <h3>Color Rules</h3>
          <p>To make sure your eating plan contains all the nutrients you need,
             choose a rainbow of colorful foods. The pigments that give foods their color are also the nutritious substances that can reduce your risk of cancer and chronic diseases like heart disease.</p>
              
          <p>Of course, foods with the most "pigment power" are mostly fruits and vegetables -- yet another reason to fill your plate with these fiber-filled, low-calorie, fat-free, super foods! Eaten together, fruits and vegetables pack an even bigger punch in reducing free radicals -- unstable molecules in the body that damage cells and are thought to contribute to the development of many diseases.</p>
          <h3>Vitamins in the News</h3>
          <p>The hottest vitamins these days are the antioxidants (E, C, and A, along with the mineral selenium) and the "sunshine" vitamin, also known as vitamin D.</p>
          <p>Antioxidants help gobble up those nasty free radicals. A diet rich in antioxidants has been linked to a host of health-promoting, disease-fighting activities in the body.</p>
          <p>Antioxidant-rich foods include:</p>
          <ul>
            <li>Vitamin A and beta-carotene: Pumpkin, squash, carrots, spinach, sweet potatoes, cantaloupes, dark leafy greens, and mangoes</li>
            <li>Vitamin C: Citrus fruits, strawberries, bell peppers, cauliflower, broccoli, tomatoes, sweet potatoes, asparagus</li>
            <li>Vitamin E: Vegetable oil, almonds, whole grains, wheat germ, sweet potatoes, yams</li>

          </ul>
          <h3>Better Food</h3>
          <p>To make sure your eating plan contains all the nutrients you need,
             choose a rainbow of colorful foods. The pigments that give foods their color are also the nutritious substances that can reduce your risk of cancer and chronic diseases like heart disease.</p>
              
          <p>Of course, foods with the most "pigment power" are mostly fruits and vegetables -- yet another reason to fill your plate with these fiber-filled, low-calorie, fat-free, super foods! Eaten together, fruits and vegetables pack an even bigger punch in reducing free radicals -- unstable molecules in the body that damage cells and are thought to contribute to the development of many diseases.</p>
          <h3>Vitamins in the News</h3>
          <p>The hottest vitamins these days are the antioxidants (E, C, and A, along with the mineral selenium) and the "sunshine" vitamin, also known as vitamin D.</p>
          <p>Antioxidants help gobble up those nasty free radicals. A diet rich in antioxidants has been linked to a host of health-promoting, disease-fighting activities in the body.</p>
          <p>Antioxidant-rich foods include:</p>
          <ul>
            <li>Vitamin A and beta-carotene: Pumpkin, squash, carrots, spinach, sweet potatoes, cantaloupes, dark leafy greens, and mangoes</li>
            <li>Vitamin C: Citrus fruits, strawberries, bell peppers, cauliflower, broccoli, tomatoes, sweet potatoes, asparagus</li>
            <li>Vitamin E: Vegetable oil, almonds, whole grains, wheat germ, sweet potatoes, yams</li>

          </ul>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import navbarHome from "../components/navbarHome.vue"
export default {
  name: "Home",
  data() {
    return {}
  },
  components: {
    navbarHome,
  },
}
</script>
<style scoped>
#homeNav{
  height:4em;
}
#homeBody {
  position: relative;
}
</style>
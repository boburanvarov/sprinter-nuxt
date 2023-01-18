<template>
  <div class="container">
    <div class="wrapper">
      <div class="left">
        <h1 class="section_title">Каталог</h1>
        <h6 class="filter_title">Фильтр</h6>
        <div class="filter_block">
          <div class="filter_top" @click="filter_price = !filter_price">
            <h5>Цена</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_price ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <div class="atribut" v-if="filter_price">
            <input
              type="range"
              v-model="price_model"
              class="range"
              value="10"
            />
            <div class="range_value">
              <span> 0</span>
              <span>100</span>
            </div>
            <div class="range_price">
              <div class="min">
                <span>От</span>
                <h2 class="data">0</h2>
              </div>
              <div class="max">
                <span>До</span>
                <h2 class="data">{{ price_model }}</h2>
              </div>
            </div>
          </div>
        </div>

        <div class="filter_block">
          <div class="filter_top" @click="filter_brend = !filter_brend">
            <h5>Бренд</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_brend ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <transition name="fade">
            <div class="atribut" v-show="filter_brend">
              <label>
                <input type="checkbox" name="" id="" value="FITLAND 07" v-model="inputData" />
                FITLAND 07
              </label>
              <label>
                <input type="checkbox" name="" id="" value="FITLAND 08" v-model="inputData"/>
                FITLAND 08
              </label>
              <label>
                <input type="checkbox" name="" id="" value="FITLAND 09" v-model="inputData"/>
                FITLAND 09
              </label>
            </div>
          </transition>
        </div>
        <!--  -->
        <div class="filter_block">
          <div class="filter_top" @click="filter_football = !filter_football">
            <h5>Футбольный инвентарь</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_football ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <div class="atribut" v-if="filter_football">
            <label>
              <input type="checkbox" name="" id="" value="Форма" v-model="inputData"/>
              Форма
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Мячи" v-model="inputData"/>
              Мячи
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Бутсы" v-model="inputData"/>
              Бутсы
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Препядствия" v-model="inputData"/>
              Препядствия
            </label>
          </div>
        </div>
        <!--  -->
        <div class="filter_block">
          <div class="filter_top" @click="filter_Dumbbells = !filter_Dumbbells">
            <h5>Гантели</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_Dumbbells ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <div class="atribut" v-if="filter_Dumbbells">
            <label>
              <input type="checkbox" name="" id="" value="15 кг" v-model="inputData"/>
              15 кг
            </label>
            <label>
              <input type="checkbox" name="" id="" value="25 кг" v-model="inputData"/>
              25 кг
            </label>
            <label>
              <input type="checkbox" name="" id="" value="50 кг" v-model="inputData"/>
              50 кг
            </label>
            <label>
              <input type="checkbox" name="" id="" value="60 кг" v-model="inputData"/>
              60 кг
            </label>
          </div>
        </div>
        <!--  -->
        <div class="filter_block">
          <div class="filter_top" @click="filter_brend1 = !filter_brend1">
            <h5>Бренд</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_brend1 ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <div class="atribut" v-if="filter_brend1">
            <label>
              <input type="checkbox" name="" id="" value="Форма" v-model="inputData"/>
              Форма
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Мячи" v-model="inputData"/>
              Мячи
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Бутсы" v-model="inputData"/>
              Бутсы
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Препядствия" v-model="inputData"/>
              Препядствия
            </label>
          </div>
        </div>
        <!--  -->
        <div class="filter_block">
          <div class="filter_top" @click="filter_brend2 = !filter_brend2">
            <h5>Бренд</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_brend2 ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <div class="atribut" v-if="filter_brend2">
            <label>
              <input type="checkbox" name="" id="" value="Форма" v-model="inputData"/>
              Форма
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Мячи" v-model="inputData"/>
              Мячи
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Бутсы" v-model="inputData"/>
              Бутсы
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Препядствия" v-model="inputData"/>
              Препядствия
            </label>
          </div>
        </div>
        <!--  -->
        <div class="filter_block">
          <div class="filter_top" @click="filter_brend3 = !filter_brend3">
            <h5>Бренд</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_brend3 ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <div class="atribut" v-if="filter_brend3">
            <label>
              <input type="checkbox" name="" id="" value="Форма" v-model="inputData"/>
              Форма
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Мячи" v-model="inputData"/>
              Мячи
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Бутсы" v-model="inputData"/>
              Бутсы
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Препядствия" v-model="inputData"/>
              Препядствия
            </label>
          </div>
        </div>
        <!--  -->
        <div class="filter_block">
          <div class="filter_top" @click="filter_brend4 = !filter_brend4">
            <h5>Бренд</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_brend4 ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <div class="atribut" v-if="filter_brend4">
            <label>
              <input type="checkbox" name="" id="" value="Форма" v-model="inputData"/>
              Форма
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Мячи" v-model="inputData"/>
              Мячи
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Бутсы" v-model="inputData"/>
              Бутсы
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Препядствия" v-model="inputData"/>
              Препядствия
            </label>
          </div>
        </div>
        <!--  -->
        <div class="filter_block">
          <div class="filter_top" @click="filter_brend5 = !filter_brend5">
            <h5>Бренд</h5>
            <i
              class="icon-chevron"
              :style="{
                transform: filter_brend5 ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            ></i>
          </div>
          <div class="atribut" v-if="filter_brend5">
            <label>
              <input type="checkbox" name="" id="" value="Форма" v-model="inputData"/>
              Форма
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Мячи" v-model="inputData"/>
              Мячи
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Бутсы" v-model="inputData"/>
              Бутсы
            </label>
            <label>
              <input type="checkbox" name="" id="" value="Препядствия" v-model="inputData"/>
              Препядствия
            </label>
          </div>
        </div>
        <!--  -->
      </div>
      <div class="right">
        <div class="filter_resault">
          <div class="result">
            <div class="item"  v-for="(item, idx) in inputData" :key="idx">
              <span>{{item}}</span>
              <i class="icon-dinkrement" @click="deleteItem(idx)"></i>
            </div>
          </div>
          <div class="filter_button">
            <span>Сортировать </span> <i class="icon-filter"></i>
          </div>
        </div>
        <div class="contend">
          <LayoutsProductCard
            v-for="product in cutProductArray"
            :key="product.id"
            :prod_img="product.image"
            :prod_name="product.name"
            :status_new="product.status"
            :category="product.category"
            :prod_status="product.prod_status"
            :prod_price_new="product.price"
            :prod_price_old="product.oldPrice"
            :reviews="product.reviews"

            :slug="product.id"
          />
        </div>
        <div class="paginations">
        <button class="btn_pagination" v-for="(item, idx) in ceil" :key="idx" @click="activePagination(item)">
          {{item}}
        </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../../components/layouts/product-card.vue";
import product_array from "../../frags/productMin.js";
export default {
  data() {
    // console.log(this.inputData);
    return {
      products: product_array,
      price_model: 10,
      filter_price: true,
      filter_brend: true,
      filter_football: true,
      filter_Dumbbells: true,
      filter_brend1: false,
      filter_brend2: false,
      filter_brend3: false,
      filter_brend4: false,
      filter_brend5: false,
      inputData: [],
      pagination: {
        limit: 9,
        page: 1,
      },
    };
  },
  components: { ProductCard },
  computed: {
    offset() {
     this.pagination.page =  this.$route.query.page || 1 ;
      return (this.pagination.page - 1) * this.pagination.limit;
    },
    cutProductArray() {
      return this.products.slice(
        this.offset,
        this.offset + this.pagination.limit
      );
    },
    ceil() {
      return Math.ceil(this.products.length / this.pagination.limit);
    },
  },
  methods: {
    activePagination(item){
      this.$router.push({
        path: `/catalog`,
        query: {
          page: item
        }
      })
      console.log(item);
       this.pagination.page = item;
    },
    deleteItem(idx) {
      this.inputData.splice(idx, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/catalog.scss";
</style>
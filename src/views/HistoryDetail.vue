<template>
  <ClassicLayout>
    <div>
      <div class="breadcrumb-wrap">
        <router-link class="waves-effect waves-orange pointer" to="/history">История</router-link>
        <a class="breadcrumb">
          Расход
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card red">
            <div class="card-content white-text">
              <p>Описание:</p>
              <p>Сумма:</p>
              <p>Категория:</p>
              <small>12.12.12</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClassicLayout>
</template>

<script>
import ClassicLayout from "@/layouts/ClassicLayout.vue";

export default {
  name: "HistoryDetail",
  components: {ClassicLayout}
}
</script>

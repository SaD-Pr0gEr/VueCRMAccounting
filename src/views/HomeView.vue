<template>
  <ClassicLayout>
    <div>
      <div class="page-title">
        <h3>Счет</h3>
        <button class="btn waves-effect waves-light btn-small">
          <i class="material-icons">refresh</i>
        </button>
      </div>
      <div class="row">
        <div class="col s12 m6 l4">
          <div class="card bill-card" :class="{'dark-red-bg': $store.state.darkTheme, 'light-blue': !$store.state.darkTheme}">
            <div class="card-content white-text">
              <span class="card-title">Счет в валюте</span>

              <p class="currency-line">
                <span>12.0 Р</span>
              </p>
            </div>
          </div>
        </div>

        <div class="col s12 m6 l8">
          <div class="card bill-card" :class="{
            'dark-green-bg black-text': $store.state.darkTheme,
            'orange white-text': !$store.state.darkTheme}">
            <div class="card-content">
              <div class="card-header">
                <span class="card-title">Курс валют</span>
              </div>
              <table>
                <thead>
                <tr>
                  <th>Валюта</th>
                  <th>Курс</th>
                  <th>Дата</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                  <td>руб</td>
                  <td>12121</td>
                  <td>12.12.12</td>
                </tr>
                </tbody>
              </table>
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
  name: "HomeView",
  components: {ClassicLayout},
  mounted() {
    switch (this.$route.query.action) {
      case "loginSuccess":
        this.$toaster('Добро пожаловать!');
        break
    }
  }
}
</script>

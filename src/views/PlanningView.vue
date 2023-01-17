<template>
  <ClassicLayout>
    <div>
      <div class="page-title">
        <h3>Планирование</h3>
        <h4>12 212</h4>
      </div>
      <section>
        <div>
          <p>
            <strong>Девушка:</strong>
            12 122 из 14 0000
          </p>
          <div class="progress">
            <div
                class="determinate green"
                style="width:40%"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </ClassicLayout>
</template>

<script>
import ClassicLayout from "@/layouts/ClassicLayout.vue";

export default {
  name: "PlanningView",
  components: {ClassicLayout}
}
</script>

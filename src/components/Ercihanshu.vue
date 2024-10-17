<template>
  <div>
    <canvas ref="myCanvas" width="500" height="500"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawQuadraticFunction();
  },
  methods: {
    drawQuadraticFunction() {
      const canvas = this.$refs.myCanvas;
      const ctx = canvas.getContext('2d');

      // 二次函数 y = ax² + bx + c 的系数
      const a = 1;
      const b = 20;
      const c = 30;

      // 绘制坐标轴
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
      ctx.strokeStyle = '_blank';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
      ctx.strokeStyle = '_blank';
      ctx.stroke();

      // 绘制二次函数图像
      ctx.beginPath();
      for (let x = -canvas.width / 2; x < canvas.width / 2; x++) {
        const y = a * x * x + b * x + c;
        const canvasX = x + canvas.width / 2;
        const canvasY = canvas.height / 2 - y;
        ctx.lineTo(canvasX, canvasY);
      }
      ctx.strokeStyle = 'red';
      ctx.stroke();
    }
  }
};
</script>

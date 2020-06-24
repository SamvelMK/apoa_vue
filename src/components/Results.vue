<template>
    <div>
        <h1 class="display-4">Շնորհակալություն մասնակցության համար</h1>
          <hr class="my-4">
          <section v-if="burnout">
            <h4> Հարգելի մասնակից` <br> <br>
              Ձեր կողմից լրացված հարցարանների հիման վրա ստացած տվյալները անհանգստացնող են՝ հուզական այրման արտահայտվածության տեսանկյունից։
               Խնդրում ենք ուշադրություն դարձնել Ձեր հոգեբանական բարեկեցության և ինքնախնամքի հարցերին։ <br> <br> Հարցեր ունենալու դեպքում կարող եք կապ 
               հաստատել այս հետազոտության համակարգող, կլինիկական հոգեբան՝ Եվա Ասրիբաբայանի հետ (հեռ.` 093058794 էլ. փոստ` yeva.asribabayan@gmail.com)։ </h4>

          </section>
          <section v-else>
            <h4> Հարգելի մասնակից` <br>

              Համաձայն Ձեր կողմից լրացված հարցարանների հիման վրա ստացած տվյալների Դուք չունեք հուզական այրման արտահայտված մակարդակ: 
              Շարունակեք հոգ տանել Ձեր մասին՝ հետագայում հուզական այրման առաջացումը կանխելու նպատակով:  
              
               </h4>
          </section>
    </div>
</template>

<script>
export default {
    computed: {
        maslach: {
            get() {
                return this.$store.getters.maslach;
            }
        },
        burnout() {
            let eeItems = [0, 1, 2, 5, 7, 12, 13, 15, 19]
            let dpItems = [5, 10, 11, 15, 22]
            var EE = this.maslach.filter(e => eeItems.includes(parseInt(e))).map(Number)
            var DP = this.maslach.filter(e => dpItems.includes(parseInt(e))).map(Number)

            var eeSum = EE.reduce((a, b) => a + b, 0)
            var dpSum = DP.reduce((a, b) => a + b, 0)

            if (eeSum >= 27 || dpSum >=10){
                return true;
            } else {
                return false;
            }
        }
    },
}
</script>


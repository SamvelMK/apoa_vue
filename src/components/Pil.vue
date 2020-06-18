<template>
    <div>
        <div class="container">
            <div class="container">
                <h4>{{ instructions }}</h4>
            </div>
            <div class="card"> 
                <table>
                    <tbody>
                        <tr>
                        <td style="text-align: left;">{{questions[step][0]}}</td>
                        <td id="questions">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=1 v-model="pil[step]">
                                <label class="form-check-label" :for="step"> 3 </label>
                            </div>
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=2 v-model="pil[step]">
                                <label class="form-check-label" :for="step"> 2 </label> 
                            </div>
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=3 v-model="pil[step]">
                                <label class="form-check-label" :for="step"> 1 </label>
                            </div>
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=4 v-model="pil[step]">
                                <label class="form-check-label" :for="step"> 0 </label>    
                            </div>
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=5 v-model="pil[step]">
                                <label class="form-check-label" :for="step"> 1 </label>
                            </div>
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=6 v-model="pil[step]">
                                <label class="form-check-label" :for="step"> 2 </label>
                            </div>
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=7 v-model="pil[step]">
                                <label class="form-check-label" :for="step"> 3 </label>
                            </div>
                        </td>
                        <td style="text-align: left;">{{questions[step][1]}}</td>
                        </tr>
                    </tbody>
                    </table>
                    <div class="button">
                        <button id="previous" class="btn btn-primary mb-2"  @click="prior"> Նախորդը </button>
                        <button id="next" v-if="step < 19" class="btn btn-primary mb-2" @click="next"> Հաջորդը </button>
                        <button id="next" v-else class="btn btn-primary mb-2" @click="submitPil"> Անցնել հաջորդ հարցարանին: </button>

                    </div>
            </div>
        </div>
        <div id="warning" v-if="showWarning" class="alert alert-danger" role="alert">
                    Համոզված ե՞ք որ չեք ցանկանում պատասխանել տվյալ հարցին:
                <div class="button">
                    <button id="previous" class="btn btn-primary mb-2"  @click="skipQuestion"> Այո </button>
                    <button id="next" class="btn btn-primary mb-2" @click="showWarning=!showWarning"> Ոչ </button>
                </div>
        </div>
       Answers {{ pil }}
    </div>
</template>


<script>
// import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            instructions: `Ձեզ կառաջարկվեն հակադիր պնդումների զույգեր։ 
                            Ձեր առաջադրանքն է ընտրել 2 պնդումներից Ձեր կարծիքին առավել համապատասխանը,
                            և նշել 1, 2, 3 թվերից մեկը՝ կախված նրանից, թե որքան եք վստահ Ձեր ընտրության մեջ
                            (կամ 0, եթե 2 պնդումն էլ Ձեզ համար հավասարապես ճիշտ են)։`,
            
            questions: {0: [`Սովորաբար ես շատ եմ ձանձրանում։`,
                            `Սովորաբար ես էներգիայով լի եմ։`],
                        1: [ `Կյանքը ինձ միշտ թվում է հուզառատ և հետաքրքիր։`,
                            `Կյանքը ինձ թվում է բացարձակապես հանգիստ է և միապաղաղ։`],
                        2: [ `Այս կյանքում ես չունեմ որոշակի նպատակներ և միտումներ։`,
                            `Այս կյանքում ես ունեմ հստակ նպատակներ և միտումներ։`],
                        3: [ `Իմ կյանքը ինձ թվում է ծայրահեղ անիմաստ է և աննպատակ։`,
                            `Իմ կյանքը ինձ թվում է բավականին իմաստավորված է և նպատակաուղղված։`],
                        4: [ `Ամեն օրը ինձ թվում է նոր և մյուսներից տարբերվող։`,
                            `Ամեն օրը ինձ թվում է բացարձակապես նման մնացած բոլոր օրերին։`],
                        5: [ `Թոշակի անցնելուց հետո, ես կզբաղվեմ այնպիսի հետաքրքիր գործերով, որոնցով միշտ երազել եմ զբաղվել։`,
                            `Թոշակի անցնելուց հետո, ես կփորձեմ չծանրաբեռնել ինձ որևէ հոգսերով։`],
                        6: [ `Իմ կյանքը դասավորվել է հենց այնպես, ինչպես երազել եմ։`,
                            `Իմ կյանքը դասավորվել է բոլորովին ոչ այնպես, ինչպես երազել եմ։`],
                        7: [ `Ես հաջողությունների չեմ հասել իմ կյանքի ծրագրերի իրականացման մեջ։`,
                            `Ես իրագործել եմ կյանքում իմ պլանավորվածի մեծ մասը։`],
                        8: [ `Իմ կյանքը դատարկ է և անհետաքրքիր։`,
                            `Իմ կյանքը լցված է հետաքրքիր գործերով։`],
                        9: [ `Եթե անհրաժեշտ լիներ այսօր ամփոփել իմ կյանքը, ապա ես կասեի, որ այն բավականաչափ իմաստավորված է։`,
                            `Եթե անհրաժեշտ լիներ այսօր ամփոփել իմ կյանքը, ապա ես կասեի, որ այն իմաստ չի ունեցել։`],
                        10: [ `Եթե ես ընտրության հնարավորություն ունենայի, ապա կկառուցեի իմ կյանքը ամբողջովին այլ կերպ։`,
                            `Եթե ես ընտրության հնարավորություն ունենայի, ես իմ կյանքը նորից կապրեի այնպես, ինչպես հիմա։`],
                        11: [ `Երբ ես նայում եմ ինձ շրջապատող աշխարհին, այն հաճախ է ինձ մոտ առաջացնում է շփոթվածություն և անհանգստություն։`,
                            `Երբ ես նայում եմ ինձ շրջապատող աշխարհին, այն ինձ մոտ բացարձակապես չի առաջացնում շփոթվածություն կամ անհանգստություն։`],
                        12: [ `Ես շատ պատասխանատու մարդ եմ։`,
                            `Ես բացարձակապես պատասխանատու մարդ չեմ։`],
                        13: [ `Ես կարծում եմ, որ մարդը հնարավորություն ունի իրականացնելու իր կենսական ընտրությունը ըստ իր ցանկության։`,
                            `Ես կարծում եմ, որ մարդը զրկված է ընտրության հնարավորությունից՝ բնական կարողությունների և պարտականությունների ազդեցության պատճառով։`],
                        14: [ `Ես միանշանակ կարող եմ ինձ նպատակասլաց մարդ կոչել։`,
                            `Ես չեմ կարող ինձ նպատակասլաց մարդ կոչել։`],
                        15: [ `Ես դեռ չեմ գտել կյանքում իմ կոչումն ու հստակ նպատակները։`,
                            `Ես գտել եմ կյանքում իմ կոչումն ու նպատակները։`],
                        16: [ `Իմ աշխարհայացքը դեռ չի ձևավորվել։`,
                            `Ես ունեմ որոշակի ձևավորված աշխարհայացք։`],
                        17: [ `Ես համարում եմ, որ ինձ հաջողվել է գտնել կյանքում իմ կոչումն ու հետաքրքիր նպատակները։`,
                            `Ես հազիվ թե ընդունակ եմ գտնել իմ կոչումն ու հետաքրքիր նպատակները կյանքում։`],
                        18: [ `Իմ կյանքը իմ ձեռքերում է, ես ինքս եմ այն կառավարում։`,
                            `Իմ կյանքը իմ ենթակայության տակ չէ և այն կառավարվում է արտաքին իրադարձություններով։`],
                        19: [ `Իմ առօրյա գործերը ինձ հաճույք և բավարարվածություն են պատճառում։`,
                            `Իմ առօրյա գործերը ինձ միայն տհաճություններ և անհանգստություններ են պատճառում։ `]},
            step: 0,
            showWarning: false,
        }
    },
    methods: {
        next() {
            if (!this.pil[this.step]) {
                this.showWarning = true;
            } else {
                this.step ++;
            }  
        },
        prior() {
            if (this.step > 0) {
                this.step--;
            }
        },
        skipQuestion(){
            this.pil[this.step] = null;
            this.step++;
            this.showWarning = false;
        },
        submitPil(){
            return this.$http.post('', this.$store.state.pil)
        }
    },
    computed: {
        pil: {
            get() {
                return this.$store.getters.pil;
            },
            set(value){
                this.$store.dispatch('updatePil', value)
            }
        },
    },
}
</script>

<style scoped>

.card{
    margin-top:3rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

p{
    font-size: 1.5rem;
}

td{
    width: 12rem;
    padding: 1rem;
}

#questions{
    padding-left: 3rem;
}

input{
    display: inline-block;
    position: relative;
    margin: 0.1rem;
    width: 2rem;
    height: 1.5rem;
    cursor:pointer;
}

.checkboxgroup {
  display: inline-block;
  text-align: center;
  padding-left: 0.1rem;
}
.checkboxgroup label {
  display: block;
}

#previous{
    margin-left: 1rem;
    margin-right: 73%;
}

#warning{
    /* margin: -10rem; */
    margin-top: -10rem;
    margin-left: 15rem;
    height: 10rem;
    width: 30rem;
}

</style>
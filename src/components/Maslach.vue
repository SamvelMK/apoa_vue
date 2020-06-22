<template>
    <div>
        <div v-if="startTest" class="card" id="start-test" >
                <h1 type="subtitle"> Հարցարան 1 </h1>
                <p> {{instructions}} </p>
                 <div class="button">
                        <button id="startTest" class="btn btn-primary mb-2"  @click="startTest = !startTest"> Սկսել հարցարանը: </button>
                 </div>
            </div>
        <div v-else class="container" :class="{background:showWarning}">
            <div class="container">
                <h4>{{ instructions }}</h4>
            </div>
            <div class="card"> 
                <table>
                    <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Երբեք</th>
                      <th scope="col">Շատ հազվադեպ</th>
                      <th scope="col">Հազվադեպ</th>
                      <th scope="col">Երբեմն</th>
                      <th scope="col">Հաճախ</th>
                      <th scope="col">Շատ հաճախ</th>
                      <th scope="col">Ամեն օր</th>
                    </tr>
                  </thead>
                    <tbody>
                        <tr>
                            <td style="text-align: left;">{{questions[step]}}</td>         
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=1 v-model="maslach[step]">
                            </div>
                        </td>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=2 v-model="maslach[step]">
                            </div>
                        </td>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=3 v-model="maslach[step]">
                            </div>
                        </td>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=4 v-model="maslach[step]">
                            </div>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=5 v-model="maslach[step]">
                            </div>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=6 v-model="maslach[step]">
                            </div>
                        </td>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=7 v-model="maslach[step]">
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <div class="button">
                        <button id="previous" class="btn btn-primary mb-2"  @click="prior"> Նախորդը </button>
                        <button id="next" v-if="step < 19" class="btn btn-primary mb-2" @click="next"> Հաջորդը </button>
                        <router-link v-else to="/pil"> 
                            <button id="next-questionaire" class="btn btn-primary mb-2"> Անցնել հաջորդ հարցարանին: </button>
                        </router-link>  

                    </div>
            </div>
        </div>
        <div id="warning" v-if="showWarning" class="alert alert-danger" role="alert">
            <div id='warning-message' class="container">
                <h5 style="padding: 3%">
                &emsp; &emsp; Ձեր յուրաքանչյուր պատասխան շատ կարևոր է մեզ համար և թույլ կտա կատարել լիարժեք վերլուծություն: <br> <br>
                &emsp; &emsp; Հիշեցնում ենք, որ Ձեր տրված բոլոր պատասխանները անանուն են և վերլուծվելու են միմիայն ընդհանրացված տեսքով:<br> <br>
                &emsp; &emsp; Վստա՞հ եք, որ ցանկանում եք բաց թողնել այս հարցը:
                </h5>
                <a class="btn btn-primary btn-lg" role="button" @click="skipQuestion" style="color: white; margin-right: 80%;">
                <span class="glyphicon glyphicon-chevron-left"></span> Այո՛ </a>
                <a class="btn btn-primary btn-lg" role="button"  @click="showWarning=!showWarning" style="color: white;">
                <span class="glyphicon glyphicon-chevron-right"></span> Ո՛չ </a>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data() {
        return {
            instructions: `Խնդրում ենք պատասխանել, թե որքան հաճախ եք ունենում հարցարանում նշված զգացումները։
                            Հարցերի շուրջ երկար մի՛ մտածեք, պատասխանեք առաջին տպավորությամբ առաջնորդվելով։`,
            
            questions: [
                    "Հուզական առումով ես ինձ սպառված եմ զգում։",
                    "Աշխատանքային օրվա ավարտին ես ինձ քամված կիտրոնի պես եմ զգում։",
                    "Ես ինձ հոգնած եմ զգում, երբ առավոտյան վեր եմ կենում և պետք է գնամ աշխատանքի։",
                    "Ես լավ եմ հասկանում, թե ինչ են զգում իմ պացիենտները, և դա օգտագործում եմ ավելի արդյունավետ բուժում իրականացնելու համար։",
                    "Ես իմ պացիենտների (հիվանդների) հետ միայն պաշտոնական ձևով եմ շփվում՝ առանց ավելորդ հույզերի, և փորձում եմ նրանց հետ շփման ժամանակը հասցնել նվազագույնի։",
                    "Ես ինձ էներգիայով լի և հուզական վերելքի վիճակում եմ զգում։",
                    "Հիվանդների և նրանց հարազատների հետ կոնֆլիկտային իրավիճակներում ես կարողանում եմ ճիշտ լուծումներ գտնել։",
                    "Ես ինձ ճնշված և ապաթիկ եմ զգում։",
                    "Ես կարող եմ դրական ազդեցություն թողնել հիվանդների (պացիենտների) ինքնազգացողության և տրամադրության վրա։",
                    "Վերջերս ես ավելի չոր (անզգա) եմ դարձել պացիենտների նկատմամբ։",
                    "Որպես կանոն, իմ շրջապատի մարդիկ ինձանից չափազանց շատ են պահանջում։ Նրանք ավելի շուտ հոգնեցնում են ինձ, քան ուրախացնում։",
                    "Ես շատ պլաններ ունեմ ապագայի հետ կապված, ես հավատում եմ դրանց իրականացմանը։",
                    "Կյանքում ես ավելի ու ավելի շատ հիասթափություններ եմ զգում։",
                    "Ես անտարբերություն և հետաքրքրության կորուստ եմ զգում շատ բաների հանդեպ, որոնք ինձ նախկինում ուրախացնում էին։",
                    "Պատահում է, ես իրոք անտարբեր եմ լինում նրա հանդեպ՝ ինչ կատարվում է իմ որոշ հիվանդների հետ։",
                    "Ես ուզում եմ առանձնանալ և հանգստանալ ամեն ինչից և բոլորից։",
                    "Իմ գործընկերների և հիվանդների հետ հարաբերություններում ես հեշտությամբ կարողանում եմ ստեղծել բարյացակամության և լավատեսության մթնոլորտ։",
                    "Ես հեշտությամբ եմ շփվում իմ հիվանդների և նրանց հարազատների հետ ՝ անկախ իրենց սոցիալական դիրքից և բնավորությունից։",
                    "Ես շատ բաներ եմ հասցնում անել օրվա ընթացքում։",
                    "Ես ինձ զգում եմ հնարավորությունների սահմանագծին։",
                    "Ես դեռ շատ բաների կարող եմ հասնել իմ կյանքում։", 
                    "Հիվանդները, որպես կանոն, անշնորհակալ մարդիկ են։"
            ],
            step: 0,
            showWarning: false,
            startTest: true,
        }
    },
    methods: {
        next() {
            if (!this.maslach[this.step]) {
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
            this.step++;
            this.showWarning = false;
        },
    },
    computed: {
        maslach: {
            get() {
                return this.$store.getters.maslach;
            },
            set(value){
                this.$store.dispatch('updateMaslach', value)
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

#answers{
    width: 5rem;
    /* padding-left: 1rem; */
}

td{
    padding: 1rem;
    text-align: center; 
}

th{
    padding: 0.8rem;
    text-align: center;
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
    margin-right: 63%;
}

#next{
    margin-left: 15%;
}

#next-questionnaire{
    margin-left: 62%;
}

#startTest{
    margin-left: 80%;
}

.background{
    opacity:    0.5; 
    background: white; 
    width:      100%;
    height:     100%; 
    position:   relative;
}

#warning{
    margin-top: -20rem;
    background-color:white; 
    height:70%;
    opacity: 0.8;
    position: absolute;
    border-color: white;
}

#warning-message{
    background-color: pink;
    color:black;
    margin: 15%;
    width: 75%;
}

h5{
    color:black;
}

h1{
    text-align: center;
    margin-bottom: 2rem;
}

#start-test{
    padding: 1.5rem;
    text-align:justify;
}

</style>
<template>
    <div>
        <div v-if="startTest" class="card" id="start-test" >
                <h1 type="subtitle"> Հարցարան 3 </h1>
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
                      <th scope="col"> Լիովին համաձայն եմ </th>
                      <th scope="col"> Համաձայն եմ </th>
                      <th scope="col"> Համաձայն չեմ </th>
                      <th scope="col"> Բացարձակապես համաձայն չեմ </th>
                    </tr>
                  </thead>
                    <tbody>
                        <tr>
                            <td style="text-align: left;">{{questions[step]}}</td>         
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=1 v-model="eri[step]">
                            </div>
                        </td>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=2 v-model="eri[step]">
                            </div>
                        </td>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=3 v-model="eri[step]">
                            </div>
                        </td>
                        <td id="answers">
                            <div class="checkboxgroup">
                                <input class="form-check-input" type="radio"
                                :name="step" :id="step" value=4 v-model="eri[step]">
                            </div>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                    <div class="button">
                        <button id="previous" class="btn btn-primary mb-2"  @click="prior"> Նախորդը </button>
                        <button id="next" v-if="step < 15" class="btn btn-primary mb-2" @click="next"> Հաջորդը </button>
                        <router-link v-else to="/results"> 
                            <button id="next-questionaire" class="btn btn-primary mb-2" @click="submitData"> Տեսնել արդյունքները: </button>
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
            instructions: `Ստորև նշված կետերը վերաբերում են Ձեր ներկայիս աշխատանքին։ Յուրաքանչյուր պնդման համար խնդրում ենք նշել 
                            արդյոք լիովին համաձայն եք, համաձայն եք, համաձայն չեք կամ բացարձակապես համաձայն չեք։`,
            
            questions: [
                    'Աշխատանքային ծանրաբեռնվածության պատճառով ես անընդհատ ժամանակի սղություն ունեմ։',
                    'Աշխատանքս կատարելիս շատ են պատահում ընդհատումներ և խանգարումներ։',
                    'Վերջին մի քանի տարվա ընթացքում աշխատանքս դարձել է ավելի ու ավելի խստապահանջ։',
                    'Իմ վերադասից կամ այլ համարժեք անձից ես ստանում եմ այնն հարգանքը որին արժանի եմ',
                    'Իմ աշխատանքային առաջընթացի հեռանկարները քիչ են։',
                    'Իմ աշխատանքային իրավիճակում տեղի ունեցել է կամ սպասվում է անցանկալի փոփոխություն։',
                    'Իմ աշխատանքային անվտանգությունը խղճուկ է։',
                    'Իմ աշխատավայրում ես ստանում եմ իմ բոլոր ջանքերին և ձեռքբերումներին համապատասխան հարգանք և համբավ։',
                    'Իմ աշխատանքային առաջընթացի հեռանկարները համարժեք են իմ ջանքերին և ձեռքբերումներին:',
                    'Իմ աշխատավարձը / եկամուտը համարժեք է իմ բոլոր ջանքերին և ձեռքբերումներին։',
                    'Ես հեշտությամբ եմ ճնշվում աշխատավայրում ժամանակի սղության պատճառով։',
                    'Առավատյան արթնանալուն պես՝ սկսում եմ մտածել աշխատանքային խնդիրների մասին։',
                    'Երբ գալիս եմ տուն, հեշտությամբ թուլանում եմ և «անջատվում» աշխատանքից։',
                    'Ինձ մտերիմ մարդիկ ասում են, որ ես չափից շատ բաներ եմ զոհաբերում աշխատանքիս համար։',
                    'Դժվարությամբ եմ կտրվում աշխատանքից, այն իմ մտքում է անգամ անկողնում պառկած։',
                    'Գիշերը չեմ կարողանա քնել, եթե այսօրվա անելիքներիցս ինչ-որ բան հետաձգեմ։'
            ],
            step: 0,
            showWarning: false,
            startTest: true,
        }
    },
    methods: {
        next() {
            if (!this.eri[this.step]) {
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
        submitData(){
            this.$http.post('https://test-apoa.firebaseio.com/data.json', this.$store.state.data)
        }
    },
    computed: {
        eri: {
            get() {
                return this.$store.getters.eri;
            },
            set(value){
                this.$store.dispatch('updateEri', value)
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

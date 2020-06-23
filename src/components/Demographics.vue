<template>
    <div>
        <div v-if="startTest" class="card" id="start-test" >
                <h1 type="subtitle"> Սոցիալ դեմոգրաֆիկ տվյալներ </h1>
                <h5> &emsp; &emsp; Ձեզ կառաջարկվեն Ձեր և ձեր աշխատանքի վերաբերյալ հարցեր: Ցանկանում ենք հիշեցնել, որ Ձեր տրված բոլոր պատասխանները անանուն են և վերլուծվելու են միմիայն ընդհանրացված տեսքով:<br> <br>
                </h5>
                <div class="button">
                    <button id="startTest" class="btn btn-primary mb-2"  @click="startTest = !startTest; seTimeIn()"> Սկսել հարցարանը </button>
                </div>
        </div>
        <div v-else class="container" id="background" >
            <div class="card" :class="{background:showWarning}">
                <section v-if="steps==0">
                    <div class="container">
                            <div class="form-group row">
                                <div class="col-xs-2">
                                <label for="age"> {{ sections[steps].age }} </label>
                                <input v-model="demographics.age" type="number" class="form-control" id="age">
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <p> {{ sections[steps].sex }} <p>
                            <div class="form-check">
                                <input v-model="demographics.sex" class="form-check-input" type="radio" name="sex" id="female"
                                value=1>
                                <label class="form-check-label" for="female"> Իգ </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.sex" class="form-check-input" type="radio" name="sex" id="male" value=2>
                                <label class="form-check-label" for="male"> Ար </label>
                            </div>
                        </div>
                        <div class="container" >
                            <p> {{ sections[steps].maritalStatus }} <p>
                            <div class="form-check">
                                <input v-model="demographics.maritalStatus" class="form-check-input" type="radio" name="maritalstatus" id="single" value=1>
                                <label class="form-check-label" for="single"> Ամուրի </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.maritalStatus" class="form-check-input" type="radio" name="maritalstatus" id="married" value=2>
                                <label class="form-check-label" for="married"> Ամուսնացած </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.maritalStatus" class="form-check-input" type="radio"
                                name="maritalstatus" id="married-with-kids" value=3>
                                <label class="form-check-label" for="married-with-kids"> Ամուսնացած եմ և ունեմ երեխաներ </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.maritalStatus" class="form-check-input" type="radio"
                                name="maritalstatus" id="single-parent" value=4>
                                <label class="form-check-label" for="single-parent"> Միայնակ ծնող </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.maritalStatus" class="form-check-input" type="radio"
                                name="maritalstatus" id="widowed" value=5>
                                <label class="form-check-label" for="widowed"> Այրի </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.maritalStatus" class="form-check-input" type="radio"
                                name="maritalstatus" id="other" value=6>
                                <label class="form-check-label" for="other"> Այլ </label>
                            </div>
                        </div>
                </section> 
                    
                <section v-if="steps==1">
                    <div class="container">
                            <div class="form-group row">
                                <div class="col-xs-2">
                                    <label for="regions"> {{ sections[steps].region }} </label>
                                    <select v-model="demographics.region" class="form-control" id="regions">
                                        <option value=0 selected disabled hidden> Ընտրեք մարզը </option>
                                        <option value=1> Երևան </option>
                                        <option value=2> Արագածոտն </option>
                                        <option value=3> Արարատ  </option>
                                        <option value=4> Արմավիր </option>
                                        <option value=5> Գեղարքունիք </option>
                                        <option value=6> Լոռի </option>
                                        <option value=7> Կոտայք </option>
                                        <option value=8> Շիրակ </option>
                                        <option value=9> Սյունիք </option>
                                        <option value=10> Վայոց ձոր </option>
                                        <option value=11> Տավուշ </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-if="demographics.region != 1" class="container">
                            <div class="form-group row">
                                <div class="col-xs-2">
                                    <label for="workArea"> {{ sections[steps].workArea }} </label>
                                    <select v-model="demographics.workArea" class="form-control" id="workArea">
                                        <option value=0 selected disabled hidden> Ընտրեք համայնքը </option>
                                        <option value=1> Մայրաքաղաք </option>
                                        <option value=2> Մարզկենտրոն  </option>
                                        <option value=3> Մարզային քաղաք  </option>
                                        <option value=4> Գյուղական համյանք/գյուղ </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                        <label for="specialty"> {{ sections[steps].specialty }} </label>
                                        <select v-model="demographics.specialty" class="form-control" id="specialty" >
                                            <option value=0 selected disabled hidden> Ընտրեք մասնագիտությունը </option>
                                            <option value=1> Ուռուցքաբան </option>
                                            <option value=2> Արյունաբան  </option>
                                            <option value=3> Օրդինատոր (խնդրում ենք նշել ուսուցման տարին) </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- If oncologist -->
                            <div v-if="demographics.specialty == 1" class="container" id="specialty-oncologist">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                    <label for="specialty-oncologist"> {{ sections[steps].specialtyOncologist}} </label>
                                    <select v-model="demographics.oncologistNarrow" class="form-control" id="specialty-oncologist" >
                                            <option value=1> Ուռուցքաբան-վիրաբույժ </option>
                                            <option value=2> Ճառաքայթային ուռուցքաբան </option>
                                            <option value=3> Քիմիաթերապևտ </option>
                                            <option value=4> Մանկական ուռուցքաբան </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <!-- If hematologist -->
                            <div v-if="demographics.specialty == 2" class="container" id="specialty-hematologist">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                    <label for="specialty-hematologist"> {{ sections[steps].specialtyHematologist}} </label>
                                    <select v-model="demographics.narrowHematologist" class="form-control" id="specialty-hematologist">
                                            <option value=1> Արյունաբան </option>
                                            <option value=2> Մանկական արյունաբան </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div v-if="(demographics.specialty == 1) | (demographics.specialty ==2)" class="container">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                        <label for="year-practice"> {{ sections[steps].yearPractice}} </label>
                                        <input v-model="demographics.yearPractice" type="number" class="form-control" id="year-practice">
                                    </div>
                                </div>
                            </div>
                            <!-- If resident -->
                            <div v-if="demographics.specialty == 3" class="container" id="resident">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                    <label for="year-education"> {{ sections[steps].yearEducation}} </label>
                                    <input v-model="demographics.yearEducation" type="number" class="form-control" id="year-education">
                                    </div>
                                </div>
                            </div>
                            <div class="container" id="hours-worked">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                    <label for="hours-worked"> {{ sections[steps].hoursWorked}} </label>
                                    <input v-model="demographics.hoursWorked" type="number" class="form-control" id="hours-worked">
                                    </div>
                                </div>
                            </div>
                            <div class="container" id="work-terminal">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                    <label for="work-terminal"> {{ sections[steps].hoursWorkedTerminal}} </label>
                                    <input v-model="demographics.workTerminal" type="number" class="form-control" id="work-terminal">
                                    </div>
                                </div>
                            </div>
                            <div class="container" id="night-shifts">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                    <label for="night-shifts"> {{ sections[steps].hoursNightShift}} </label>
                                    <input v-model="demographics.hoursNightShift" type="number" class="form-control" id="night-shifts">
                                    </div>
                                </div>
                            </div>
                            <div class="container" id="overtime">
                                <div class="form-group row">
                                    <div class="col-xs-2">
                                    <label for="overtime"> {{ sections[steps].overTime}} </label>
                                    <input v-model="demographics.overtime" type="number" class="form-control" id="overtime">
                                    </div>
                                </div>
                            </div>
                </section>
                <section id="leisure" v-if="steps==2">
                        <div class="container" id="vacations">
                            <div class="form-group row">
                                <div class="col-xs-2">
                                <label for="vacations"> {{ sections[steps].vacations}} </label>
                                <input v-model="demographics.vacations" type="number" class="form-control" id="vacations">
                                </div>
                            </div>
                        </div>
                        <div class="container" id="exercise">
                            <div class="form-group row">
                                <div class="col-xs-2">
                                <label for="exercise"> {{ sections[steps].exercise}} </label>
                                <input v-model="demographics.exercise" type="number" class="form-control" id="exercise">
                                </div>
                            </div>
                        </div>
                </section>
                <section id="prof-training" v-if="steps==3">
                        <div class="container" id="cont-edu">
                            <div class="form-group row">
                                <div class="col-xs-2">
                                <label for="cont-edu"> {{ sections[steps].contEducation}} </label>
                                <input v-model="demographics.contEducation" type="number" class="form-control" id="cont-edu">
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <p> {{ sections[steps].comTraining}} <p>
                            <div class="form-check">
                                <input v-model="demographics.comTraining" class="form-check-input" type="radio" name="com-training" id="com-training"
                                value=1>
                                <label class="form-check-label" for="yes"> Այո </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.comTraining" class="form-check-input" type="radio" name="com-training" id="com-training" value=2>
                                <label class="form-check-label" for="no"> Ոչ </label>
                            </div>
                        </div>
                        <!-- if com-training -->
                        <div v-if="demographics.comTraining == 1" class="container" id="cont-edu">
                            <div class="form-group row">
                                <div class="col-xs-2">
                                <label for="com-train-hour"> {{ sections[steps].comTrainingHours}} </label>
                                <input v-model="demographics.comTrainingHours" type="number" class="form-control" id="com-train-hour">
                                </div>
                            </div>
                        </div>
                </section>
                <section id="psy-services" v-if="steps==4">
                    <div class="container">
                            <p> {{ sections[steps].psyServices}} <p>
                            <div class="form-check">
                                <input v-model="demographics.psyServices" class="form-check-input" type="radio" name="psy-services" id="psy-services"
                                value=1>
                                <label class="form-check-label" for="yes"> Այո </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.psyServices" class="form-check-input" type="radio" name="psy-services" id="psy-services" value=2>
                                <label class="form-check-label" for="no"> Ոչ </label>
                            </div>
                        </div>
                </section>
                <section id="covid" v-if="steps==5">
                        <div class="container">
                            <p> {{ sections[steps].covidWorkChange}} <p>
                            <div class="form-check">
                                <input v-model="demographics.covidWorkChange" class="form-check-input" type="radio" name="covidWorkChange" id="Not-at-all" value=1>
                                <label class="form-check-label" for="Not-at-all"> Առհասարակ չեն փոփոխվել </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.covidWorkChange" class="form-check-input" type="radio" name="covidWorkChange" id="little" value=2>
                                <label class="form-check-label" for="A little"> Մի փոքր փոփոխվել են </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.covidWorkChange" class="form-check-input" type="radio"
                                name="covidWorkChange" id="quite-bit" value=3>
                                <label class="form-check-label" for="quite-bit"> Որոշ չափով փոփոխվել են </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.covidWorkChange" class="form-check-input" type="radio"
                                name="covidWorkChange" id="alot" value=4>
                                <label class="form-check-label" for="alot"> Նշանակալի չափով են փոփոխվել </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.covidWorkChange" class="form-check-input" type="radio"
                                name="covidWorkChange" id="great-deal" value=5>
                                <label class="form-check-label" for="great-deal"> Ծայրահեղ շատ են փոփոխվել: </label>
                            </div>
                            <div v-if="demographics.covidWorkChange > 1 " class="form-group">
                                <label for="other"> Խնդրում ենք, մանրամասնել </label>
                            <textarea v-model="demographics.covidWorkChangeMore" class="form-control" id="other" rows="3"></textarea>
                        </div>
                        </div>                        
                        <div class="container">
                            <p> {{ sections[steps].covidWorkChange}} <p>
                            <div class="form-check">
                                <input v-model="demographics.covidStress" class="form-check-input" type="radio" name="covidStress" id="Not-at-all" value=1>
                                <label class="form-check-label" for="Not-at-all"> Առհասարակ չի ազդել </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.covidStress" class="form-check-input" type="radio" name="covidStress" id="little" value=2>
                                <label class="form-check-label" for="A little"> Մի փոքր է ազդել </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.covidStress" class="form-check-input" type="radio"
                                name="covidStress" id="quite-bit" value=3>
                                <label class="form-check-label" for="quite-bit"> Որոշ չափով է ազդել </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.covidStress" class="form-check-input" type="radio"
                                name="covidStress" id="alot" value=4>
                                <label class="form-check-label" for="alot"> Նշանակալի ձևով է ազդել </label>
                            </div>
                            <div class="form-check">
                                <input v-model="demographics.covidStress" class="form-check-input" type="radio"
                                name="covidStress" id="great-deal" value=5>
                                <label class="form-check-label" for="great-deal"> Ծայրահեղ ուժգին է ազդել </label>
                            </div>
                            <div v-if="demographics.covidStress > 1 " class="form-group">
                                <label for="other"> Խնդրում ենք, մանրամասնել </label>
                            <textarea v-model="demographics.covidStressMore" class="form-control" id="other" rows="3"></textarea>
                        </div>
                        </div>                        
                </section>    
                    
                <div class="button">
                    <button id="previous" class="btn btn-primary mb-2" @click.prevent="prior"> Նախորդը </button>
                    <button id="next" v-if="steps < 5" class="btn btn-primary mb-2" @click.prevent="next"> Հաջորդը </button>
                    <router-link v-else to="/maslach" v-model="demographics"> 
                        <button id="next-questionnaire" @click="seTimeOut()" class="btn btn-primary mb-2"> Անցնել հաջորդ հարցարանին </button>
                    </router-link>  
                </div>
            </div>
        </div>
        <div id="warning" v-if="showWarning" class="alert alert-danger" role="alert">
            <div id='warning-message' class="container">
                <h5>
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
            startTest: true,
            startTime: null,
            endTime: null,
            steps: 0,
            showWarning: false,
            sections:[
                {
                age:'Խնդրում ենք նշել Ձեր տարիքը՝',
                sex: 'Խնդրում ենք նշել Ձեր սեռը՝',
                maritalStatus: 'Խնդրում ենք նշել Ձեր ընտանեկան կարգավիճակը՝',
                },
                {
                region:'Խնդրում ենք նշել՝ որ մարզում եք աշխատում:',
                workArea: 'Աշխատում եք քաղաքային թե՞ գյուղական համայնքում',
                specialty: 'Խնդրում ենք նշել Ձեր մասնագիտությունը՝',
                specialtyOncologist: 'Խնդրում ենք նշել Ձեր նեղ մասնագիտացումը՝',
                specialtyHematologist: 'Խնդրում ենք նշել Ձեր նեղ մասնագիտացումը՝',
                yearPractice: 'Քանի՞ տարի եք զբաղվում բժշկական պրակտիկայով:',
                yearEducation: 'խնդրում ենք նշել ուսուցման տարին՝',
                hoursWorked: 'Միջինում շաբաթական քանի՞ ժամ եք աշխատում:',
                hoursWorkedTerminal: 'Միջինում շաբաթական քանի ժամ եք աշխատում կյանքի ավարտի փուլում կամ դրան մոտ կանգնած պացիենտների հետ:',
                hoursNightShift: 'Միջինում քանի՞ գիշերային հերթապահություն եք ունենում ամսվա ընթացքում',
                overTime: 'Միջինում շաբաթական քանի ժամ եք աշխատում Ձեր աշխատանքային ժամանակից դուրս՝ առանց լրացուցիչ ֆինանսկան փոխհատուցման (ներառյալ հեռախոսային կոնսուլտացիաները, չպլնավորված տնայցերը և այլն)', 
                },
                {
                vacations: 'Միջինում քանի արձակուրդային օր եք ունենում տարվա ընթացքում:', 
                exercise: 'Միջինում շաբաթական քանի ժամ եք մարզվում', 
                },
                {
                contEducation: 'Միջինում տարեկան քանի ժամ մասնագիտական վերապատրաստում եք անցնում:',
                comTraining: 'Դուք երբև մասնակցել եք հաղորդկացման հմտությունների զարգացմանը ուղղված դասընթացների։',
                comTrainingHours: 'նշել ժամաքանակը'
                },
                {
                psyServices:'Ձեր բուժհաստատությունում գործում է արդյոք հոգեսոցիալական ծառայություն:'
                },
                {
                covidWorkChange: 'Արդյոք Ձեր աշխատանքային պարտականությունները փոփոխվել են COVID19 համաճարակի ազդեցությամբ:',
                covidStress: 'Ինչպես եք կարծում, որքանով է COVID19-ը համաճարակը ազդել Ձեր կողմից ապրվող սթրեսի մակարդակի վրա:'  
                }
            ],
        }
    },
    methods: {
        next() {
            if ((this.steps != 1) && (this.steps != 3)) {
                var a = Object.keys(this.sections[this.steps])
                var m = false
                for (let index = 0; index < a.length; index++) {
                    if (!this.demographics[a[index]]) {
                        m = true;
                    }
                } 
                if (m) {
                    this.showWarning = true;
                } else {
                    this.steps ++;
                }   
            } else {
                this.steps++;
            }
            
        },
        prior() {
            if (this.steps > 0) {
                this.steps--;
            }
        },
        skipQuestion(){
            this.steps++;
            this.showWarning = false;
        },
        seTimeIn(){
           this.$store.dispatch('updateStartTime', Date.now()) 
        }, 
        seTimeOut(){
            this.$store.dispatch('updateEndTime', Date.now()) 
        } 
    },
    computed: {
        demographics: {
            get(){
                return this.$store.getters.demographics
            },
        },
    },
}
</script>

<style scoped>
.card{
    margin-top:3rem;
    margin-bottom:3rem;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
.container{
    margin-left: 3%;
}

.form-check{
    padding-left:2.5rem;
}

.container{
    padding-left: 0.5rem;
}

#next{
    margin-left: 75%;
}

#next-questionnaire{
    margin-left: 62%;
}

h1{
    text-align:center;
}

h5, h1{
    padding: 3%;
}

p{
    margin-left: -1rem;
}

label[for='overtime']{
    width: 70%;
}

input[type=number]{
  width: 50%;
  margin-left: 1.5rem;
}

select{
  width: 50%;
  margin-left: 1.5rem;
}

input[type=radio]{
    margin-left: -2rem;
}

section{
    margin: 2rem;
}

button{
    margin-left: 2rem;
}

.background{
    opacity:    0.5; 
    background: white; 
    width:      100%;
    height:     100%; 
    position:   relative;
}

#warning{
    background-color: lightpink;
    color: black;
    position: relative;
    margin-top: -30%;
}

#startTest{
    margin-left: 80%;
}

</style>
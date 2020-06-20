<template>
    <div>
        <div class="container">
            <div class="card"> 
                <h1 class="display-4"> Սոցիալ դեմոգրաֆիկ տվյալներ: </h1>
                    <div class="container">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="age"> Խնդրում ենք նշել Ձեր տարիքը՝ </label>
                            <input v-model="age" type="number" class="form-control" id="age">
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <p>Խնդրում ենք նշել Ձեր սեռը՝</p>
                        <div class="form-check">
                            <input v-model="sex" class="form-check-input" type="radio" name="sex" id="female"
                            value=1>
                            <label class="form-check-label" for="female"> Իգ </label>
                        </div>
                        <div class="form-check">
                            <input v-model="sex" class="form-check-input" type="radio" name="sex" id="male" value=2>
                            <label class="form-check-label" for="male"> Ար </label>
                        </div>
                    </div>

                    <div class="container" >
                        <p> Խնդրում ենք նշել Ձեր ընտանեկան կարգավիճակը՝ </p>
                        <div class="form-check">
                            <input v-model="maritalStatus" class="form-check-input" type="radio" name="maritalstatus" id="single" value=1>
                            <label class="form-check-label" for="single"> Ամուրի </label>
                        </div>
                        <div class="form-check">
                            <input v-model="maritalStatus" class="form-check-input" type="radio" name="maritalstatus" id="married" value=2>
                            <label class="form-check-label" for="married"> Ամուսնացած </label>
                        </div>
                        <div class="form-check">
                            <input v-model="maritalStatus" class="form-check-input" type="radio"
                            name="maritalstatus" id="married-with-kids" value=3>
                            <label class="form-check-label" for="married-with-kids"> Ամուսնացած եմ և ունեմ երեխաներ </label>
                        </div>
                        <div class="form-check">
                            <input v-model="maritalStatus" class="form-check-input" type="radio"
                            name="maritalstatus" id="single-parent" value=4>
                            <label class="form-check-label" for="single-parent"> Միայնակ ծնող </label>
                        </div>
                        <div class="form-check">
                            <input v-model="maritalStatus" class="form-check-input" type="radio"
                            name="maritalstatus" id="widowed" value=5>
                            <label class="form-check-label" for="widowed"> Այրի </label>
                        </div>
                        <div class="form-check">
                            <input v-model="maritalStatus" class="form-check-input" type="radio"
                            name="maritalstatus" id="other" value=6>
                            <label class="form-check-label" for="other"> Այլ </label>
                        </div>
                    </div>

                    <div class="container">
                        <div class="form-group row">
                            <div class="col-xs-2">
                                <label for="specialty">Խնդրում ենք նշել Ձեր մասնագիտությունը՝</label>
                                <select v-model="specialty" class="form-control" id="specialty" >
                                    <option value=1> Ուռուցքաբան </option>
                                    <option value=2> Արյունաբան  </option>
                                    <option value=3> Օրդինատոր (խնդրում ենք նշել ուսուցման տարին) </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="form-group row">
                            <div class="col-xs-2">
                                <label for="regions"> Խնդրում ենք նշել՝ որ մարզում եք աշխատում: </label>
                                <select v-model="region" class="form-control" id="regions">
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
                    <div v-if="region != 1" class="container">
                        <div class="form-group row">
                            <div class="col-xs-2">
                                <label for="workArea"> Աշխատում եք քաղաքային թե՞ գյուղական համայնքում </label>
                                <select v-model="workArea" class="form-control" id="workArea">
                                    <option value=1> Մայրաքաղաք </option>
                                    <option value=2> Մարզկենտրոն  </option>
                                    <option value=3> Մարզային քաղաք  </option>
                                    <option value=4> Գյուղական համյանք/գյուղ </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- If oncologist -->
                    <div v-if="specialty == 1" class="container" id="specialty-oncologist">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="specialty-oncologist"> Խնդրում ենք նշել Ձեր նեղ մասնագիտացումը՝ </label>
                            <select v-model="oncologistNarrow" class="form-control" id="specialty-oncologist" >
                                    <option value=1> Ուռուցքաբան-վիրաբույժ </option>
                                    <option value=2> Ճառաքայթային ուռուցքաբան   </option>
                                    <option value=3> Քիմիաթերապևտ </option>
                                    <option value=4> Մանկական ուռուցքաբան  </option>
                                </select>
                            </div>
                        </div>
                         <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="year-practice"> Քանի՞ տարի եք զբաղվում բժշկական պրակտիկայով: </label>
                            <input v-model="yearPractice" type="number" class="form-control" id="year-practice">
                            </div>
                        </div>
                    </div>
                    <!-- If hematologist -->
                    <div v-if="specialty == 2" class="container" id="specialty-hematologist">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="specialty-hematologist"> Խնդրում ենք նշել Ձեր նեղ մասնագիտացումը՝ </label>
                            <select v-model="narrowHematologist" class="form-control" id="specialty-hematologist">
                                    <option value=1> Արյունաբան </option>
                                    <option value=2> Մանկական արյունաբան </option>
                                </select>
                            </div>
                        </div>
                         <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="year-practice"> Քանի՞ տարի եք զբաղվում բժշկական պրակտիկայով: </label>
                            <input v-model="yearPractice" type="number" class="form-control" id="year-practice">
                            </div>
                        </div>
                    </div>
                    <!-- If resident -->
                    <div v-if="specialty == 3" class="container" id="residents">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="year-education"> խնդրում ենք նշել ուսուցման տարին՝ </label>
                            <input v-model="yearEducation" type="number" class="form-control" id="year-education">
                            </div>
                        </div>
                    </div>
                    <div class="container" id="hours-worked">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="hours-worked"> Միջինում շաբաթական քանի՞ ժամ եք աշխատում: </label>
                            <input v-model="hoursWorked" type="number" class="form-control" id="hours-worked">
                            </div>
                        </div>
                    </div>
                    <div class="container" id="night-shifts">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="night-shifts"> Միջինում քանի՞ գիշերային հերթապահություն եք ունենում ամսվա ընթացքում </label>
                            <input v-model="nightShift" type="number" class="form-control" id="night-shifts">
                            </div>
                        </div>
                    </div>
                    <div class="container" id="overtime">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="overtime"> Միջինում շաբաթական քանի ժամ եք աշխատում Ձեր աշխատանքային ժամանակից դուրս՝ <br>
                                առանց լրացուցիչ ֆինանսկան փոխհատուցման <br> (ներառյալ հեռախոսային կոնսուլտացիաները, չպլնավորված տնայցերը և այլն) </label>
                            <input v-model="overtime" type="number" class="form-control" id="overtime">
                            </div>
                        </div>
                    </div>
                    <div class="container" id="vacations">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="vacations"> Քանի արձակուրդային օր եք ունենում տարվա ընթացքում </label>
                            <input v-model="vacation" type="number" class="form-control" id="vacations">
                            </div>
                        </div>
                    </div>
                    <div class="container" id="exercise">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="exercise"> Միջինում շաբաթական քանի ժամ եք մարզվում </label>
                            <input v-model="exercise" type="number" class="form-control" id="exercise">
                            </div>
                        </div>
                    </div>
                    <div class="container" id="work-terminal">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="work-terminal"> Միջինում շաբաթական քանի ժամ եք աշխատում կյանքի ավարտի 
                                փուլում կամ դրան մոտ կանգնած պացիենտների հետ </label>
                            <input v-model="workTerminal" type="number" class="form-control" id="work-terminal">
                            </div>
                        </div>
                    </div>
                    <div class="container" id="cont-edu">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="cont-edu"> Միջինում տարեկան քանի ժամ մասնագիտական վերապատրաստում եք անցնում </label>
                            <input v-model="contEducation" type="number" class="form-control" id="cont-edu">
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <p> Ձեր բուժհաստատությունում գործում է արդյոք հոգեսոցիալական ծառայություն: </p>
                        <div class="form-check">
                            <input v-model="psyServices" class="form-check-input" type="radio" name="psy-service" id="psy-service"
                            value=1>
                            <label class="form-check-label" for="yes"> Այո </label>
                        </div>
                        <div class="form-check">
                            <input v-model="psyServices" class="form-check-input" type="radio" name="psy-service" id="psy-service" value=2>
                            <label class="form-check-label" for="no"> Ոչ </label>
                        </div>
                    </div>
                    <div class="container">
                        <p> Դուք երբև մասնակցել եք հաղորդկացման հմտությունների զարգացմանը ուղղված դասընթացների։ </p>
                        <div class="form-check">
                            <input v-model="comTraining" class="form-check-input" type="radio" name="com-training" id="com-training"
                            value=1>
                            <label class="form-check-label" for="yes"> Այո </label>
                        </div>
                        <div class="form-check">
                            <input v-model="comTraining" class="form-check-input" type="radio" name="com-training" id="com-training" value=2>
                            <label class="form-check-label" for="no"> Ոչ </label>
                        </div>
                    </div>
                    <!-- if com-training -->
                    <div v-if="comTraining == 1" class="container" id="cont-edu">
                        <div class="form-group row">
                            <div class="col-xs-2">
                            <label for="com-train-hour"> նշել ժամաքանակը </label>
                            <input v-model="comTrainingHours" type="number" class="form-control" id="com-train-hour">
                            </div>
                        </div>
                    </div>
                <!-- <div class="button">
                    <button id="previous" class="btn btn-primary mb-2"  @click="prior"> Նախորդը </button>
                    <button id="next" v-if="step < 19" class="btn btn-primary mb-2" @click="next"> Հաջորդը </button>
                    <router-link v-else to="/maslach"> 
                        <button id="next" class="btn btn-primary mb-2"> Անցնել հաջորդ հարցարանին: </button>
                    </router-link>  

                </div> -->
                <router-link to="/pil"> 
                    <button id="next" class="btn btn-primary mb-2"> Անցնել հաջորդ հարցարանին: </button>
                </router-link>
            </div>
            
        </div>
         
        <!-- <div id="warning" v-if="showWarning" class="alert alert-danger" role="alert">
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
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            age:null,
            sex: null,
            maritalStatus: null,
            specialty: null,
            region: null,
            workArea: null,
            oncologistNarrow: null,
            narrowHematologist: null,
            yearPractice: null,
            yearEducation: null,
            hoursWorked: null,
            nightShift: null,
            overtime: null,
            vacation: null,
            exercise: null,
            workTerminal: null,
            contEducation: null,
            psyServices: null,
            comTraining: null,
            comTrainingHours: null,
        }
    },
}
</script>

<style scoped>

.container{
    margin-left: 3%;
}

.form-check{
    padding-left:2.5rem;
}

#next{
    margin-left: 73%;
}

</style>
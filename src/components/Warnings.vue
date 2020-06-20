<template>
    <div id="warning" v-if="showWarning" class="alert alert-danger" role="alert">
            <div id='warning-message' class="container">
                <h5 style="padding: 3%">
                &emsp; &emsp; Ձեր մասնակցությւունը մեզ համար շատ կարևոր է: <br> <br> &emsp; &emsp; Ցանկանում ենք մեկ անգամ
                ևս ձեզ հիշեցնել,
                որ Ձեր անկեղծ պատասխանները կօգնեն այս հետազոտության իրականացնմանը, որը թույլ կտա ավելի լավ հասկանալ
                Հայասատանում ուռուցքաբանների շրջանում հուզական այրումը պայմանավորող գործոնները և մշակել կանխարգելման
                հնարավոր եղանակաները: <br> <br>
                &emsp; &emsp; Վստահ եք որ ցանկանում եք դադարեցնել:
                </h5>
                <a class="btn btn-primary btn-lg" role="button" @click="skipQuestion" style="color: white; margin-right: 80%;">
                <span class="glyphicon glyphicon-chevron-left"></span> Այո՛ </a>
                <a class="btn btn-primary btn-lg" role="button"  @click="showWarning=!showWarning" style="color: white;">
                <span class="glyphicon glyphicon-chevron-right"></span> Ո՛չ </a>
            </div>
        </div>
</template>
<template>
<div class="review-resume" >
    <header>
       
            <h2>{{resume.name}}  {{resume.surname}}</h2>
            <p>{{resume.work}}</p>
            <div class="line" ></div>
         <!-- <div class="container" > -->
            <div class="header-info" >
                <div class="header-info--item" ><img src="@\assets\img\Location.svg" alt="">{{resume.address}}</div>
                <div class="header-info--item" ><img src="@\assets\img\Message.svg" >{{resume.email}}</div>
                <div class="header-info--item" ><img src="@\assets\img\Call.svg" >{{resume.telephone}}</div>

            </div>
        <!-- </div> -->

    </header>
    <div class="other-info" >
        <div class="other-info--left" >
            <div class="other-info--item" >
                <h2>О себе</h2>
                <p>{{resume.about}}</p>
            </div>
            <div class="other-info--item" >
                <h2>Опыт</h2>
                <p>{{resume.works[0].name}}</p>
                <p>{{resume.works[0].role}}</p>
                <p>{{resume.works[0].start}} - {{resume.works[0].end}}  </p>
            </div>
        </div>
        <div class="other-info--right  " >
            <div class="other-info--item" >
                <h2>Навыки</h2>
                <h3>Hard</h3>
                <p>{{resume.skils[0].name}}</p>

            </div>
            
        </div>
    </div>
</div>
<button class="createPdf" @click="createPDF" >создать pdf</button>

</template>

<script>
// import html2pdf from "html2pdf.js"
export default {
    props: {
        resume: {
            type: Object,
        }
    },
    data(){
        return {
            element: ""
        }
    },
    methods: {
    //   createPDF() {

    //   }
    },
    mounted( ) {
        this.element = document.querySelector(".review-resume")
                
        document.querySelector(".createPdf").addEventListener( "click" , () =>  html2pdf(this.element));
    }

}
</script>

<style lang="scss" scoped>
.container {
    padding: 0 5%;
}
.review-resume {
    background: #FFF;
    h2, p {
        color: #242424;
    }
    header {
        padding: 15px 0 15px 0;
       width: 100%;
        // height: 193px;
        background: #242424;
        text-align: center;
        h2 {
            color: #FFF;
            margin: 15px 0;
        }
    }
    .line {
        width: 100%;
        height: 2px;
        background: rgba(255, 255, 255, 0.07);
    }
    .header-info {
        display: flex;
        justify-content: space-around;
        margin: 5% 0;

        .header-info--item {
            color: rgba(255, 255, 255, 0.70);
            
            font-family: Roboto;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 0.1px;
            img {
                margin: 0 2px 0 0;
                height: 13px;
                width: 13px;
            }
        }
    }
}

.other-info {
    display: flex;
    justify-content: center;
        .other-info--item {
        p {
            margin: 1% 0;
        }
    }
    .other-info--left {
        max-width: 70%;
    }
    .other-info--right {
    }
}
</style>
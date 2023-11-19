<template>
<div class="content" >
    <main>
        <h1>Айтидосье</h1>
        <p class="text-lg" >Cекретное оружие для поиска работы в IT сфере</p>
        <img src="@\assets\img\main.png" alt="">
        <p class="text-normal" >«Айтидосье» - уникальный сервис, который поможет тебе профессионально представить свои навыки и достижения в IT сфере.</p>
    </main>

</div>
    
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
@import "@/assets/_variables.scss";


.content {
    width: 100%;
    height: 100%;
    
    
}
main {
    text-align: center;
    h1 {
        margin: $pd4 0 $pd1 0;
        word-break:break-all  ;

    }
    .rext-lg {
        margin: $pd1 0;
    }
    img {
        width: 100%;
        max-width: 664px;
    }
}
</style>
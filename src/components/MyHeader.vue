<template>
    <header>
        <img src="@\assets\img\logo.svg" alt="">
        <nav>
            <router-link class="text-normal" to="/">Резюме</router-link>
            <router-link class="text-normal" to="/about">Шаблоны</router-link>
            <router-link class="text-normal" to="/about">Контакты</router-link>
        </nav>
        <div class="btn" >
            <router-link class="btn-text" to="/MakeResume">Создать резюме</router-link>
        </div>
        
    </header>
</template>

<script>
export default {
  name: 'HelloWorld',

}
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
        width: 24%;
        display: flex;
        justify-content: space-between;
        a {
            color: $additional;
            text-decoration: none;
            margin: 0 2%;
            font-size: 20px;
        }
    }
    .btn {
        border-radius: 10px;
        padding: 10px 20px;
        justify-content: center;
        align-items: center;
        border: 1px solid #FFF;

        background: #0F0F0F;
        .btn-text {
        color: $additional;
        text-decoration: none;
        font-size: 20px;
        }
        
    }
}
</style>

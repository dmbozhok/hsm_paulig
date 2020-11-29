<template>
<div class="start-screen">
    <div class="logo"><img src="img/logo.png" alt="Paulig"></div>
    <div class="subtitle"><img src="img/subtitle.png" alt=""></div>
    <div class="text">
        Вы знаете о кофе все или только учитесь разбираться в тонкостях этого изумительного напитка?<br>
        Пора расставить точки над i. Пройдите тест, разработанный совместно с командой бариста компании Paulig, и узнайте, кто вы в мире кофе. 
    </div>
    <button 
        class="btn"
        @click.prevent="start"
    ><span>Начать тест</span></button>
    <div class="left-part"><img src="img/left.png" alt=""></div>
    <div class="right-part"><img src="img/right.png" alt=""></div>
</div>
</template>


<script>
export default {
    name: "StartScreen",
    data() {
        return {

        }
    },
    methods: {
        start: function start() {
            this.$emit('start');
        }
    }
}
</script>

<style scoped>
    .start-screen {
        position: relative;
        min-height: 100vh;
    }
    .left-part, .right-part {
        display: none;
    }
    .logo {
        margin-bottom: 90px;
    }
    .text {
        margin: 60px auto 45px;
        font-weight: 300;
        font-size: 28px;
        line-height: 120.8%;
        color: #D8B674;
        max-width: 750px;
    }
</style>
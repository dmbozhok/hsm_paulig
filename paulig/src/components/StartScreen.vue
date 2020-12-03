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
    img {
        max-width: 100%;
        height: auto;
    }
    .start-screen {
        position: relative;
        min-height: 97vh;
    }
    .left-part, .right-part {
        display: none;
    }
    .logo {
        margin-bottom: 3vh;
    }
    .text {
        margin: 4vh auto 3vh;
        font-weight: 300;
        font-size: 0.875rem;
        line-height: 120.8%;
        color: #D8B674;
        max-width: 750px;
    }
    @media screen and (min-width: 1200px) {
        .subtitle {
            max-width: 65vw;
            margin: 0 auto;
        }
    }
    @media screen and (min-width: 1280px) {
        .left-part {
            display: block;
            position: absolute;
            right: 50%;
            transform: translateX(-265px);
            z-index: -1;
            top: 376px;
        }
        .right-part {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(478px);
            z-index: -1;
            top: 97px;
        }
    }
</style>
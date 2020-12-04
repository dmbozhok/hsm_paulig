<template>
    <div class="final-screen">
        <div class="result-caption-block">
            <div class="line"></div>
            <div class="result-caption">Результаты</div>
            <div class="line"></div>
        </div>
        <div class="result-title">{{result.title}}</div>
        <div class="result-text" v-html="result.html"></div>
        <div class="coffee-result" v-if="result.img" :class="result.class"><img :src="result.img" :alt="result.title"></div>
        <div class="coffee-one">
            <a @click="sendGALocal('click_paulig')" href="http://pubads.g.doubleclick.net/gampad/clk?id=5552859541&iu=/81006599/hmiru-wday/counter" target="_blank">
                <img src="img/coffee.png" alt="">
            </a>
        </div>
        <button class="btn" @click.prevent="restart">Пройти еще раз</button>
        <div class="share-buttons">
            <div class="share-text">поделись<br>с друзьями</div>
            <a :href="'https://vk.com/share.php?url=' + href"
                onclick="javascript:sendGALocal('share_vk');window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                target="_blank">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M24.511 5.44689L5.44689 24.511L24.511 43.5751L43.5751 24.511L24.511 5.44689ZM1.36172 23.1493L24.511 0L49.022 24.511L24.511 49.022L0 24.511L1.36172 23.1493Z" fill="#820722"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1668 31.6437H24.562C24.562 31.6437 24.9806 31.574 25.1899 31.3647C25.3991 31.1554 25.3991 30.7368 25.3991 30.7368C25.3991 30.7368 25.3991 28.923 26.2363 28.6439C27.0734 28.3649 28.1896 30.4578 29.3058 31.2251C30.143 31.853 30.7708 31.7135 30.7708 31.7135L33.8404 31.6437C33.8404 31.6437 35.4449 31.574 34.6775 30.2485C34.6077 30.1787 34.2589 29.3416 32.3754 27.5975C30.422 25.7837 30.7011 26.1325 33.0032 22.9932C34.3985 21.1096 34.9566 19.9934 34.817 19.4353C34.6775 18.947 33.6311 19.0865 33.6311 19.0865H30.143C30.143 19.0865 29.8639 19.0168 29.7244 19.1563C29.5151 19.2958 29.4453 19.5051 29.4453 19.5051C29.4453 19.5051 28.8873 20.9701 28.1896 22.2258C26.6549 24.807 26.027 24.9466 25.8177 24.807C25.2596 24.4582 25.3991 23.2723 25.3991 22.5049C25.3991 19.9934 25.8177 18.947 24.6318 18.668C24.283 18.5982 24.0039 18.5284 23.0272 18.5284C21.7715 18.5284 20.7251 18.5284 20.167 18.8075C19.7484 19.0168 19.4694 19.4353 19.6787 19.4353C19.8879 19.4353 20.446 19.5749 20.7251 19.9237C21.0041 20.5515 21.0041 21.598 21.0041 21.598C21.0041 21.598 21.2134 24.5977 20.5158 24.9466C20.0275 25.2256 19.3996 24.6675 18.0044 22.2956C17.3067 21.1096 16.7486 19.7144 16.7486 19.7144C16.7486 19.7144 16.6789 19.4354 16.4696 19.2958C16.2603 19.1563 15.9115 19.0865 15.9115 19.0865H12.6327C12.6327 19.0865 12.1443 19.0865 11.9351 19.2958C11.7955 19.5051 11.9351 19.8539 11.9351 19.8539C11.9351 19.8539 14.5163 25.8535 17.4463 28.923C20.167 31.853 23.1668 31.6437 23.1668 31.6437Z" fill="#820722"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="49.022" height="49.022" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </a>
            <a :href="'https://connect.ok.ru/offer?url=' + href"
                onclick="javascript:sendGALocal('share_ok');window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                target="_blank">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M25.1895 5.44689L6.12536 24.511L25.1895 43.5751L44.2536 24.511L25.1895 5.44689ZM2.04019 23.1493L25.1895 0L49.7005 24.511L25.1895 49.022L0.678467 24.511L2.04019 23.1493Z" fill="#820722"/>
                    <path d="M25.1899 12.2555C21.947 12.2555 19.3089 14.984 19.3089 18.3383C19.3089 21.6924 21.947 24.4197 25.1899 24.4197C28.4328 24.4197 31.0696 21.6924 31.0696 18.3383C31.0696 14.984 28.4328 12.2555 25.1899 12.2555ZM25.1899 15.8195C26.5321 15.8195 27.6235 16.95 27.6235 18.3383C27.6235 19.7261 26.5321 20.8557 25.1899 20.8557C23.8475 20.8557 22.7549 19.7261 22.7549 18.3383C22.7549 16.95 23.8475 15.8195 25.1899 15.8195ZM20.3413 24.6266C19.7594 24.6173 19.1873 24.9139 18.8554 25.4611C18.3481 26.2946 18.5911 27.3945 19.3951 27.9188C20.4585 28.6089 21.6124 29.0986 22.8091 29.3808L19.5225 32.782C18.8497 33.4783 18.8503 34.606 19.5232 35.3023C19.8605 35.6498 20.3004 35.8238 20.7414 35.8238C21.182 35.8238 21.6234 35.6496 21.9597 35.3016L25.1885 31.9601L28.4203 35.3016C29.0925 35.9977 30.1826 35.9977 30.856 35.3016C31.5291 34.6057 31.5291 33.4768 30.856 32.782L27.568 29.3816C28.765 29.0993 29.9193 28.6094 30.982 27.9188C31.7875 27.3946 32.0309 26.2934 31.5238 25.4611C31.0162 24.6274 29.9533 24.3762 29.1472 24.9014C26.7396 26.4679 23.6374 26.4669 21.2306 24.9014C20.9535 24.7209 20.6461 24.6316 20.3413 24.6267V24.6266Z" fill="#820722"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="49.022" height="49.022" fill="white" transform="translate(0.678467)"/>
                    </clipPath>
                    </defs>
                </svg>
            </a>
            <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + href"
                onclick="javascript:sendGALocal('share_fb');window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                target="_blank">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M24.8106 5.44689L5.74645 24.511L24.8106 43.5751L43.8747 24.511L24.8106 5.44689ZM1.66128 23.1493L24.8106 0L49.3216 24.511L24.8106 49.022L0.299561 24.511L1.66128 23.1493Z" fill="#820722"/>
                    <g clip-path="url(#clip1)">
                    <path d="M21.2476 35.9034V24.8881H18.2512V20.9221H21.2476V17.5346C21.2476 14.8726 23.0175 12.4281 27.0959 12.4281C28.7472 12.4281 29.9682 12.582 29.9682 12.582L29.872 16.2856C29.872 16.2856 28.6267 16.2738 27.2678 16.2738C25.7971 16.2738 25.5615 16.9326 25.5615 18.0261V20.9221H29.9889L29.7962 24.8881H25.5615V35.9034H21.2476Z" fill="#820722"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="49.022" height="49.022" fill="white" transform="translate(0.299561)"/>
                    </clipPath>
                    <clipPath id="clip1">
                    <rect width="11.7377" height="23.4753" fill="white" transform="translate(18.2512 12.4281)"/>
                    </clipPath>
                    </defs>
                </svg>
            </a>
            <a :href="'https://twitter.com/share?url=' + href + '&via=TWITTER_HANDLE'"
                onclick="javascript:sendGALocal('share_tw');window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                target="_blank">
                <img src="img/twitter.svg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
	export default {
		name: "FinalScreen",
		props: ['result'],
		data() {
			return {
			}
		},
		computed: {
            href() {
                return location.href;
            }
		},
		methods: {
			restart() {
				this.$emit('restart');
            },
            sendGALocal(event) {
                window.sendGA(event);
            }
		}		
	}	
</script>

<style scoped>
    .final-screen {
        min-height: 100vh;
        position: relative;
    }
    .final-screen > div {
        position: relative;
        z-index: 5;
    }
    .result-caption-block {
        display: flex;
        align-items: center;
        margin: 0px auto 5vh;
        padding-top: 5vh;
    }
    .result-caption-block .line {
        flex: 0 1 475px;
        height: 1px;
        box-sizing: border-box;
        border-top: 1px dashed #820722;
    }
    .result-caption {
        flex: 0 0 auto;
        margin: 0 auto;
        font-family: Intro, Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 1.125rem;
        line-height: 1;
        text-align: center;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #820722;
    }
    .result-title {
        font-family: Intro, Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 2rem;
        line-height: 1;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .result-text {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1.166667;
        text-align: center;
        max-width: 760px;
        margin: 2.5rem auto 2.75rem;
        color: #D8B674;
    }
    .share-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 5rem auto 3rem;
    }
    .share-text {
        font-family: Intro, Roboto, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 0.5625rem;
        line-height: 1;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #820722;
        margin-right: 18px;
    }
    .share-buttons a:not(:last-child) {
        margin-right: 6px;
    }
    .final-screen .coffee-result {
        display: block;
        position: absolute;
        right: 50%;
        transform: translateX(-27vw);
        top: 310px;
        width: 100px;
        z-index: 1;
    }
    .final-screen .coffee-result.result-1 {
        top: 390px;
        transform: translateX(-24vw);
    }
    .final-screen .coffee-result.result-3 {
        top: 400px;
        transform: translateX(-25vw);
    }
    .final-screen .coffee-one {
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(27vw);
        top: 350px;
        width: 100px;
        z-index: 1;
    }
    @media screen and (min-width: 768px) {
        .final-screen .coffee-result {
            display: block;
            position: absolute;
            right: 50%;
            transform: translateX(-27vw);
            top: 204px;
            width: auto;
        }
        .final-screen .coffee-result.result-3 {
            top: 450px;
        }
        .final-screen .coffee-result.result-1 {
            top: 500px;
            transform: translateX(-20vw);
        }
        .final-screen .coffee-one {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(25vw);
            top: 310px;
            width: auto;
        }
        .result-text {
            width: 50vw;
        }
        .share-buttons {
            margin: 100px auto;
        }
    }
</style>
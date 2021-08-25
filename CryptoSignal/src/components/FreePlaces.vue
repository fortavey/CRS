<template>
    <div class="free-block" id="anc" :style="getBgStyle">
        <div class="wrapper">
            <div class="atten"><img src="../assets/atten.png" alt="atten"></div>
            <div class="limited-text">Ограниченное предложение</div>
            <div class="line"></div>
            <div class="free-places">
                <div class="free-places-inner">
                    <div class="free-places-text free-places-text-left">СВОБОДНЫХ МЕСТ</div>
                    <span class="free-places-number">{{ 100 - getUsers.users.count }}</span>
                    <div class="free-places-text  free-places-text-right">ОСТАЛОСЬ</div>
                </div>
            </div>
            <div class="block-vs-lock">
                <div class="block-vs-lock-inner">
                    <div class="get-free" @click="$emit('open-popup')">ПОЛУЧИТЬ</div>
                    <div class="get-free-text">Получите подписку бесплатно</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'FreePlaces',
  data: () => ({
  }),
  computed: {
    ...mapGetters('colors', ['getColors']),
    ...mapGetters('users', ['getUsers']),
    getBgStyle() {
      return { background: `${this.getColors.colors.bgDarkColor}` };
    },
  },
};
</script>

<style lang="scss" scoped>
    .free-block {
        padding-bottom: 20px;
        @media screen and (max-width: 800px) {
            padding: 0 10px 20px;
        }
    }
    .atten {
        text-align: center;
        img {
            @media screen and (max-width: 800px) {
                max-width: 200px;
            }
        }
    }
    .limited-text {
        font-size: 45px;
        text-align: center;
        font-weight: 300;
        @media screen and (max-width: 800px) {
            font-size: 30px;
        }
        @media screen and (max-width: 450px) {
            font-size: 23px;
        }
    }
    .line {
        width: 1px;
        height: 50px;
        background-color: #36577a;
        margin: auto;
        @media screen and (max-width: 800px) {
            height: 30px;
        }
    }
    .free-places {
        background: linear-gradient(270deg, #FF7C14 -3.63%, #FF3B56 100%);
        width: 150px;
        height: 150px;
        border-radius: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px auto;
        position: relative;
        z-index: 2;
        &-inner {
            width: 130px;
            height: 130px;
            border-radius: 75px;
            background-color: #071F43;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        &-number {
            font-weight: 500;
            font-size: 96px;
        }
        &-text {
            position: absolute;
            top: calc(50% - 20px);
            font-size: 25px;
            &-left {
                right: calc(100% + 30px);
                white-space: nowrap;
            }
            &-right {
                left: calc(100% + 30px);
            }
        }
        @media screen and (max-width: 800px) {
            width: 110px;
            height: 110px;
            border-radius: 55px;
            &-inner {
                width: 100px;
                height: 100px;
                border-radius: 50px;
            }
            &-number {
                font-size: 60px;
            }
            &-text {
                font-size: 18px;
            }
        }
        @media screen and (max-width: 600px) {
            width: 90px;
            height: 90px;
            border-radius: 45px;
            &-inner {
                width: 80px;
                height: 80px;
                border-radius: 40px;
            }
            &-number {
                font-size: 50px;
            }
            &-text {
                font-size: 16px;
                &-left {
                    white-space: normal;
                }
            }
        }
        @media screen and (max-width: 450px) {
            &-text {
                &-left {
                    right: calc(100% + 10px);
                }
                &-right {
                    left: calc(100% + 10px);
                }
            }
        }
    }
    .block-vs-lock {
        background: linear-gradient(270deg, #FF7C14 -3.63%, #FF3B56 100%);
        max-width: 758px;
        height: 216px;
        margin: auto;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin-top: -50px;
        @media screen and (max-width: 600px) {
            margin-top: -30px;
            height: 156px;
        }
        &::before {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: calc(50% - 85px);
            width: 170px;
            height: 20px;
            background-color: #071F43;
            @media screen and (max-width: 600px) {
                width: 156px;
                left: calc(50% - 78px);
            }
        }
        &::after {
            content: '';
            display: block;
            position: absolute;
            top: calc(50% - 50px);
            left: calc(100% - 50px);
            width: 100px;
            height: 80px;
            background-color: #071F43;
            background-image: url('../assets/lock.svg');
            background-repeat: no-repeat;
            background-position: center center;
            @media screen and (max-width: 800px) {
                display: none;
            }
        }
        &-inner {
            background-color: #071F43;
            height: 210px;
            width: calc(100% - 6px);
            border-radius: 100px;
            @media screen and (max-width: 600px) {
                height: 150px;
            }
            .get-free {
                width: 275px;
                height: 50px;
                margin: auto;
                background: linear-gradient(180deg, #FF7C14 0%, #FF3B56 100%);
                border-radius: 25px;
                margin-top: 70px;
                font-weight: bold;
                font-size: 24px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                &-text {
                    font-size: 25px;
                    padding-top: 20px;
                    text-align: center;
                }
                @media screen and (max-width: 600px) {
                    width: 200px;
                    height: 40px;
                    font-size: 20px;
                    margin-top: 40px;
                    &-text {
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>

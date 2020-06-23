<template lang="pug">
    .header
        .container
            .burger(:class="{active: isActive}" @click="isActive = !isActive" v-on-clickaway="hide")
                span
                span
                span
            a.header-logo(href='#')
                img(src='@/assets/img/logo.png')
            .header-navigation(:class="{active: isActive}")
                .header-navigation__item Home
                .header-navigation__item.active Explore
                .header-navigation__item My Campaigns
                .header-navigation__item
                    img(src='@/assets/img/user.png')
</template>

<script>
  import { mixin as clickaway } from 'vue-clickaway'
  export default {
    name: "header-box",
    mixins: [ clickaway ],
    data: () => ({
      isActive: false
    }),
    methods: {
      hide () {
        this.isActive = false;
      }
    }
  }
</script>

<style lang="sass" scoped>
    .header
        position: relative
        padding: 50px 0
        border-bottom: 1px solid #ECECEC
        @media screen and (max-width: 579px)
            padding: 6px 0
        &-logo
            display: block
            max-width: 80px
            height: 80px
            & img
                width: 100%
            @media screen and (max-width: 579px)
                max-width: 48px
                height: 48px
                margin: 0 auto
        &-navigation
            display: flex
            align-items: center
            @media screen and (max-width: 579px)
                flex-direction: column
                position: absolute
                width: 100%
                top: 0
                left: 0
                padding-top: 20px
                border-bottom: 1px solid #ECECEC
                background: #fff
                transition: all 400ms ease
                transform: translateY(-100%)
                &.active
                    transform: translateY(0)
            &__item
                font-size: 14px
                font-weight: 600
                cursor: pointer
                padding: 3px 20px
                margin: 0 10px
                transition: all 400ms ease
                border-radius: 20px
                &:last-of-type
                    margin-right: 0
                    @media screen and (max-width: 579px)
                        margin-left: 0
                &.active
                    color: #ffffff
                    background: #FF4778
                & img
                    width: 40px
                    border-radius: 50%
                @media screen and (max-width: 579px)
                    margin-bottom: 15px
    .burger
        display: none
        position: absolute
        z-index: 99
        left: 20px
        top: 50%
        width: 30px
        transform: translateY(-50%)
        & span
            display: block
            width: 100%
            height: 4px
            background: #6F36BC
            border-radius: 10px
            transition: all 400ms ease
            &:nth-child(2)
                margin: 6px 0
        &.active
            & span:first-of-type
                transform: rotate(45deg) translateX(10px) translateY(10px)
            & span:nth-child(2)
                opacity: 0
            & span:last-of-type
                transform: rotate(-45deg) translateX(4px) translateY(-5px)

        @media screen and (max-width: 579px)
            display: block
    .container
        display: flex
        align-items: center
        justify-content: space-between
</style>
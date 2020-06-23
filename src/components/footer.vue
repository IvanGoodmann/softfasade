<template lang="pug">
    .footer
        .container
            .footer-navigation
                .footer-navigation__item.currectDate
                    | ©{{makeCalculate()}}
                a.footer-navigation__item(href="#")
                    | Home
                a.footer-navigation__item(href="#")
                    | Explore
                a.footer-navigation__item(href="#")
                    | Privacy Policy
                a.footer-navigation__item(href="#")
                    | Term & Conditions
            .footer-social
                a.footer-social__item(href="https://www.facebook.com/")
                    font-awesome-icon(:icon="['fab', 'facebook']")
                a.footer-social__item(href="https://twitter.com/")
                    font-awesome-icon(:icon="['fab', 'twitter']")
</template>

<script>
  export default {
    name: "footer-box",
    methods: {
      makeCalculate() {
        return this.$moment().format('YYYY');
      }
    }
  }
</script>

<style lang="sass" scoped>
    .footer
        padding: 36px 0
        background: #F4F4F4
        @media screen and (max-width: 579px)
            padding: 12px 0
        &-navigation
            display: flex
            align-items: center
            &__item
                font-size: 14px
                line-height: 1.5
                color: #4c4c4c
                text-decoration: none
                margin: 0 20px
                transition: all 400ms ease
                @media screen and (max-width: 579px)
                    display: none
                &.currectDate
                    margin: 0 174px 0 0
                    @media screen and (max-width: 1170px)
                        margin: 0 20px 0 0
                    @media screen and (max-width: 579px)
                        display: block
            &:hover
                color: #BEA4E1
        &-social
            display: flex
            align-items: center
            &__item
                font-size: 28px
                color: #4c4c4c
                margin-right: 21px
                transition: all 400ms ease
                &:hover
                    color: #BEA4E1
            &:last-of-type
                margin-right: 0

        .container
            display: flex
            align-items: center
            justify-content: space-between

</style>
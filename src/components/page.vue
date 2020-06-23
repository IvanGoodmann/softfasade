<template lang="pug">
    .content
        .container
            .content-title
                | Improving Education in 2020 🗳️
            .d-flex.flex-wrap
                .content-main
                    .content-main__image.hidden-mobile
                        img(src='@/assets/img/main.png')
                    .content-main__tabs
                        .tab-nav
                            .tab-nav__item(:class="active == 1 ? 'active' : ''" @click="active=1")
                                | About
                            .tab-nav__item(:class="active == 2 ? 'active' : ''" @click="active=2")
                                | Updates
                            .tab-nav__item(:class="active == 3 ? 'active' : ''" @click="active=3")
                                | Supporters
                        .tab-content
                            .tab-content__item(v-if="active==1" :key="1")
                                .tab-content__title
                                    | Background
                                .tab-content__text
                                    | In 2016 state representative elections, 42% of all candidates faced no major
                                    | party opponents. Filing to even run for local office is difficult.
                                    | For example, in New York State there are over 100 pages in the election
                                    | law guide and an additional 65 page 2018 update guide that pertain to the
                                    | rules for filing to run for local office. Campaign fundraising compliance
                                    | is also challenging.
                                .tab-content__title
                                    | Platform
                                .tab-content__subtitle
                                    | The issues
                                .tab-content__tags
                                    .tab-content__tags-item
                                        | Civil liberties
                                    .tab-content__tags-item
                                        | Campaign finance
                                    .tab-content__tags-item
                                        | Criminal justic reform
                                    .tab-content__tags-item
                                        | Crime
                                    .tab-content__tags-item
                                        | Drugs
                                    .tab-content__tags-item
                                        | Economy
                                .tab-content__subtitle
                                    | organizations i support
                                .tab-content__tags
                                    .tab-content__tags-item
                                        | ACLU
                                    .tab-content__tags-item
                                        | Action Institute for the Study of Religion and Liberty
                                    .tab-content__tags-item
                                        | American Foundation for Suicide Prevention
                            .tab-content__item(v-if="active==2" :key="2")
                                .tab-content__title
                                    | Background 2
                                .tab-content__text
                                    | In 2016 state representative elections, 42% of all candidates faced no major
                                    | party opponents. Filing to even run for local office is difficult.
                                    | For example, in New York State there are over 100 pages in the election
                                    | law guide and an additional 65 page 2018 update guide that pertain to the
                                    | rules for filing to run for local office. Campaign fundraising compliance
                                    | is also challenging.
                                .tab-content__title
                                    | Platform 2
                                .tab-content__subtitle
                                    | The issues 2
                                .tab-content__tags
                                    .tab-content__tags-item
                                        | Civil liberties 2
                                    .tab-content__tags-item
                                        | Campaign finance 2
                                    .tab-content__tags-item
                                        | Criminal justic reform 2
                                    .tab-content__tags-item
                                        | Crime 2
                                    .tab-content__tags-item
                                        | Drugs 2
                                    .tab-content__tags-item
                                        | Economy 2
                                .tab-content__subtitle
                                    | organizations i support 2
                                .tab-content__tags
                                    .tab-content__tags-item
                                        | ACLU
                                    .tab-content__tags-item
                                        | Action Institute for the Study of Religion and Liberty
                                    .tab-content__tags-item
                                        | American Foundation for Suicide Prevention
                            .tab-content__item(v-if="active==3" :key="3")
                                .tab-content__title
                                    | Background 3
                                .tab-content__text
                                    | In 2016 state representative elections, 42% of all candidates faced no major
                                    | party opponents. Filing to even run for local office is difficult.
                                    | For example, in New York State there are over 100 pages in the election
                                    | law guide and an additional 65 page 2018 update guide that pertain to the
                                    | rules for filing to run for local office. Campaign fundraising compliance
                                    | is also challenging.
                                .tab-content__title
                                    | Platform 3
                                .tab-content__subtitle
                                    | The issues 3
                                .tab-content__tags
                                    .tab-content__tags-item
                                        | Civil liberties 3
                                    .tab-content__tags-item
                                        | Campaign finance 3
                                    .tab-content__tags-item
                                        | Criminal justic reform 3
                                    .tab-content__tags-item
                                        | Crime
                                    .tab-content__tags-item
                                        | Drugs
                                    .tab-content__tags-item
                                        | Economy 3
                                .tab-content__subtitle
                                    | organizations i support 3
                                .tab-content__tags
                                    .tab-content__tags-item
                                        | ACLU
                                    .tab-content__tags-item
                                        | Action Institute for the Study of Religion and Liberty
                                    .tab-content__tags-item
                                        | American Foundation for Suicide Prevention
                .content-aside
                    .content-main__image.visible-mobile
                        img(src='@/assets/img/main.png')
                    .content-aside__header
                        .content-aside__header-name
                            .user-name
                                | Tyrone Fairfield
                            .user-location
                                | 2020 Board of Education, Southwest City Schools District, OH
                        .content-aside__header-election
                            .election-title
                                | Election Day:
                            .election-date
                                | Nov 2nd, 2020
                            .election-date__left
                                | 26 days to go
                    .donation
                        .donation-amount
                            | $25,324.56
                        .donation-quantity
                            | from 25 donations
                        .donation-progress
                            .donation-progress__range(:style="{ width: progress + '%' }")
                        .donation-goal
                            .donation-goal__item
                                | Goal: $40,000
                            .donation-goal__item
                                | 10 days to go
                    .button-box
                        .donation-button(@click="makeProgress")
                            | Donate
                    .button-box.align-items-center.justify-content-between
                        a.candidate-button(href='#')
                            | + Follow
                        a.candidate-button(href='#')
                            | Volunteer
                    .upcoming
                        .upcoming-title
                            span
                                | Upcoming Events
                            a.upcoming-all(href='#')
                                | View all
                        .upcoming-event
                            .upcoming-event__date
                                .upcoming-event__date-month
                                    | mon
                                .upcoming-event__date-number
                                    | 24
                            .upcoming-event__address
                                .upcoming-event__address-title
                                    | Main Street Meet and Greet
                                .upcoming-event__address-location
                                    img(src='@/assets/img/clock.png')
                                    span 10:00 AM - 11:00 AM
                                .upcoming-event__address-location
                                    img(src='@/assets/img/location.png')
                                    span 125 Main St., Cherrytown, OH

</template>

<script>
  export default {
    name: "page-box",
    data: () => ({
      active: 1,
      progress: 75,
    }),
    methods: {
      makeProgress() {
        if(this.progress < 100) {
          this.progress += 5;
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
    .content
        padding: 64px 0 91px
        background: #FAFAFA
        @media screen and (max-width: 579px)
            padding: 24px 0 36px
        &-title
            font-size: 36px
            line-height: 1.4
            font-weight: 700
            margin-bottom: 34px
            @media screen and (max-width: 579px)
                font-size: 28px
                margin-bottom: 18px
        &-main
            flex: 0 0 100%
            max-width: 727px
            @media screen and (max-width: 1170px)
                max-width: 60%
            @media screen and (max-width: 992px)
                max-width: 480px
                margin: 0 auto
            @media screen and (max-width: 579px)
                max-width: 100%
            &__image
                margin-bottom: 48px
                & img
                    width: 100%
                @media screen and (max-width: 579px)
                    margin: 0 -20px 26px
        .tab-nav
            display: flex
            align-items: center
            margin-bottom: 48px
            &__item
                width: 33%
                font-size: 12px
                font-weight: 500
                text-align: center
                text-transform: uppercase
                cursor: pointer
                padding: 16px 16px 13px
                border-bottom: 6px solid transparent
                transition: all 400ms ease
                &.active
                    border-bottom: 6px solid #BEA4E1
        .tab-content
            margin-bottom: 45px
            &__item
                transition: all 400ms ease
            &__title
                font-size: 18px
                font-weight: 700
                line-height: 1.3
                margin-bottom: 24px
            &__subtitle
                font-size: 12px
                font-weight: 500
                line-height: 1.5
                text-transform: uppercase
                margin-bottom: 9px
            &__text
                font-size: 14px
                line-height: 1.8
                font-weight: 300
                color: #4c4c4c
                margin-bottom: 45px
            &__tags
                display: flex
                flex-wrap: wrap
                width: 50%
                margin-bottom: 40px
                @media screen and (max-width: 1170px)
                    width: 100%
                &-item
                    font-size: 12px
                    font-weight: 500
                    line-height: 1.5
                    text-align: center
                    color: #6f36bc
                    cursor: pointer
                    padding: 3px 12px
                    margin: 0 7px 8px 0
                    background: #F2EAFE
                    border-radius: 50px
                    transition: all 400ms ease
                    &:hover
                        background: #e4dcf0
        &-aside
            flex: 0 0 100%
            max-width: 336px
            margin-left: 36px
            @media screen and (max-width: 1170px)
                max-width: 36%
                @media screen and (max-width: 992px)
                    order: -1
                    max-width: 480px
                    margin: 0 auto
                @media screen and (max-width: 579px)
                    max-width: 100%
            &__header
                display: flex
                justify-content: space-between
                margin-bottom: 40px
                @media screen and (max-width: 579px)
                    margin-bottom: 25px
                &-name
                    flex: 0 0 55%
                    width: 55%
                &-election
                    flex: 0 0 45%
                    width: 45%
                    text-align: right
        .user-name
            font-size: 18px
            font-weight: 700
            line-height: 1.3
            @media screen and (max-width: 579px)
                font-size: 14px
        .user-location
            font-size: 14px
            line-height: 1.4
            color: #4c4c4c
            @media screen and (max-width: 579px)
                font-size: 12px
        .election-title
            font-size: 12px
            font-weight: 500
            line-height: 1.3
            text-transform: uppercase
            letter-spacing: 0.5px
            margin-bottom: 4px
            @media screen and (max-width: 579px)
                font-size: 10px
        .election-date
            font-size: 14px
            font-weight: 700
            &__left
                font-size: 12px
                line-height: 1.3
        .donation
            margin-bottom: 32px
            &-amount
                font-size: 28px
                font-weight: 700
                line-height: 1.3
            &-quantity
                font-size: 12px
                line-height: 1.3
                margin-bottom: 11px
            &-progress
                height: 7px
                border-radius: 10px
                margin-bottom: 10px
                background: #F0F0F0
                &__range
                    height: 7px
                    border-radius: 10px
                    background: #2ACBA5
                    transition: all 400ms ease
            &-goal
                display: flex
                align-items: center
                justify-content: space-between
                &__item
                    font-size: 12px
                    color: #4c4c4c
                    &:last-of-type
                        font-weight: 500
        .button-box
            display: flex
            flex-wrap: wrap
        .donation-button
            width: 100%
            font-size: 14px
            line-height: 1.5
            text-align: center
            text-transform: uppercase
            color: #ffffff
            cursor: pointer
            border: 1px solid transparent
            padding: 8px 16px
            margin-bottom: 24px
            background: #FF4778
            border-radius: 30px
            transition: all 400ms ease
            &:hover
                color: #FF4778
                border-color: #FF4778
                background: #fff
        .candidate-button
            width: 100%
            max-width: 160px
            font-size: 12px
            font-weight: 500
            line-height: 1.5
            text-align: center
            text-transform: uppercase
            text-decoration: none
            color: #6f36bc
            cursor: pointer
            border: 1px solid #6f36bc
            padding: 8px 12px
            background: #fff
            border-radius: 30px
            transition: all 400ms ease
            &:hover
                color: #fff
                border-color: transparent
                background: #6f36bc
            @media screen and (max-width: 579px)
                max-width: 48%
        .upcoming
            margin-top: 62px
            @media screen and (max-width: 579px)
                margin-top: 32px
            &-title
                display: flex
                align-items: center
                justify-content: space-between
                margin-bottom: 12px
                & span
                    font-size: 18px
                    font-weight: 600
                    line-height: 1.3
                    @media screen and (max-width: 579px)
                        font-size: 16px
                & a
                    font-size: 14px
                    line-height: 1.3
                    text-align: right
                    color: #d83863
                    text-decoration: none
            &-event
                display: flex
                align-items: center
                padding: 18px 20px 20px
                background: #F3F5FE
                border-radius: 18px
                &__date
                    flex: 0 0 40px
                    width: 40px
                    text-align: center
                    margin-right: 20px
                    &-month
                        font-size: 10px
                        line-height: 1.3
                        font-weight: 500
                        text-transform: uppercase
                        letter-spacing: 0.5px
                    &-number
                        font-size: 28px
                        line-height: 1
                        font-weight: 700
                        color: #6f36bc
                &__address
                    flex: 1 1 auto
                    &-title
                        font-size: 14px
                        font-weight: 500
                        margin-bottom: 10px
                        @media screen and (max-width: 579px)
                            font-size: 12px
                    &-location
                        display: flex
                        align-items: center
                        margin-bottom: 9px
                        & img
                            width: 16px
                            margin-right: 5px
                        & span
                            font-size: 12px
                            line-height: 1.3
                            color: #4c4c4c

</style>
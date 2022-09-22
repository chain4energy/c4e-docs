<template lang="html">
  <div class="contactBlock">
    <a class="contactBlock__items" v-for="items in contactList" :key="items"  :href="items.url" target="_blank">
      <component class="contactBlock__icon" :is="items.icon"/>
      <h2>{{items.header}}</h2>
      <p>{{items.text}}</p>
    </a>
  </div>
</template>

<script lang="js">
import TelegramIcon from "./TelegramIcon";
import TweeterLogo from "./TweeterLogo";
export default {
  name: "CustomContactsBlock",
  components: {TelegramIcon, TweeterLogo},
  data: function () {
    return {
      contactList: [
        {
          header: 'Telegram for users',
          text: 'Ask question from community in telegram',
          icon: TelegramIcon,
          url: 'https://t.me/Chain4Energy_Official',
        },
        {
          header: 'Telegram for validators',
          text: 'Ask question from community of validators in telegram',
          icon: TelegramIcon,
          url: '',
        },
        {
          header: 'Tweeter',
          text: 'Follow our news in tweeter',
          icon: TweeterLogo,
          url: 'https://twitter.com/chain4energy',
        },
      ]
    }

  },
}
</script>

<style  lang="stylus" scoped>
.contactBlock{
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));

  &__items{
    background:  hsla(236, 38%, 14%, 1);
    background: linear-gradient(0deg, hsla(236, 38%, 14%, 1) 0%, hsla(233, 24%, 22%, 1) 100%);
    background: -moz-linear-gradient(0deg, hsla(236, 38%, 14%, 1) 0%, hsla(233, 24%, 22%, 1) 100%);
    background: -webkit-linear-gradient(0deg, hsla(236, 38%, 14%, 1) 0%, hsla(233, 24%, 22%, 1) 100%);
    display: flex;
    align-items: center;
    flex-direction column;
    color: white;
    box-shadow 0px 2px 4px rgba(22, 25, 49, 0.05), 0px 0px 1px rgba(22, 25, 49, 0.2), 0px 0.5px 0px rgba(22, 25, 49, 0.05)
    text-align center
    border-radius 0.5rem
    padding 2rem
    cursor: pointer;
    opacity: 95%
    &:hover:not(:active) {
      box-shadow: 0px 12px 24px rgba(22, 25, 49, 0.07), 0px 4px 8px rgba(22, 25, 49, 0.05), 0px 1px 0px rgba(22, 25, 49, 0.05);
      transform: translateY(-2px);
      transition-duration: 0.1s;
    }
    &:active {
      opacity: 0.7;
      transition-duration: 0s;
    }
    h2{
      font-size: 0.75rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 0.25rem;
    }
    p{
      font-size: 0.875rem;
      letter-spacing: 0.03em;
      line-height: 1.25rem;
      margin-bottom: 1.5rem;
    }
  }
  &__icon{
    max-width: 80px;
    max-height: 80px;
  }
}



</style>

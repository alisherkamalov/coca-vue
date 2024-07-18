<template>
    <div class="header2">
      <div class="container">
        <div class="contentheader1">
          <div class="shadoworange"></div>
          <div class="textsheader2">
            <h1 class="text1header2">
              Digitally forward creative
            </h1>
          </div>
          <div class="textsheader2">
            <div class="headercontent1">
              <div class="greyline"></div>
              <h1 class="text2header2">
                When it comes to interactive marketing, we've got you covered. Be where the world is going
              </h1>
              <h1 class="text2header2-mob">
                Our biggest challenge is making sure we're always designing and building products that will help you run your business better.
              </h1>
            </div>
            <div class="inputemail">
              <input type="email" placeholder="Enter your email" class="field">
              <button class="emailbutton">
                <h1 class="emailbutton-h3">Try for free</h1>
              </button>
            </div>
          </div>
        </div>
        <div class="contentheader2">
          <div class="blue-shadow"></div>
          <div class="sales-light">
            <h1 class="sales-text1">
              Sales Report
            </h1>
            <div class="content-sales">
              <div class="sales-header">
                <div v-for="(product, index) in products" :key="index">
                  <div class="cube" :style="{ backgroundColor: product.color }"></div>
                  <h1 class="text-product">{{ product.name }}</h1>
                </div>
              </div>
              <div class="container-nl-root">
                <div class="container-nl">
                  
                </div>
                <div class="content-center-sales">
                    <Line class="line-config"></Line>
                </div>
              </div>
            </div>
          </div>
          <div class="root-earth">
            <Earth class="earth-config"</Earth>
          </div>
          <div class="customer-growth">
            <div class="title-growth">
                <h1 class="title-text">Customer Growth</h1>
            </div>
            <div class="col-left">
                <div class="left-info" v-for="(num, index) in nums" :key="index">
                    <h1 class="text-li">
                        {{ num.number }}
                    </h1>
                </div>
            </div>
            
            <div v-for="(date, index) in dates" :key="index" class="row-growth">
                
              <div class="bar-root">
                <div class="bar" :style="{backgroundColor: date.color, height: date.height}"></div>
                <h1 class="date">{{ date.month }}</h1>
              </div>
            </div>
          </div>
          <div class="black-statictic">
            <div class="black-sales">
                <div class="black-sales-text1" v-for="(sale, index) in sales" :key="index" >
                    <h1 class="black-sales-text1-css" :style="{color: sale.color, fontSize: sale.size, fontWeight: sale.weight}">{{sale.text}}</h1>
                </div>
                <div class="black-raising-root">
                    <div class="black-raising-text2" v-for="(raising, index) in raisings" :key="index" >
                        <h1 class="black-raising-text2-css" :style="{color: raising.color, fontSize: raising.size, fontWeight: raising.weight}">{{raising.text}}</h1>
                    </div>
                </div>
                
            </div>
            <div class="black-marketing">
                <div class="black-marketing-text1" v-for="(marketing, index) in marketings" :key="index" >
                    <h1 class="black-marketing-text1-css" :style="{color: marketing.color, fontSize: marketing.size, fontWeight: marketing.weight}">{{marketing.text}}</h1>
                </div>
                <div class="black-recession-root">
                    <div class="black-recession-text2" v-for="(recession, index) in recessions" :key="index" >
                        <h1 class="black-recession-text2-css" :style="{color:recession.color, fontSize: recession.size, fontWeight: recession.weight}">{{recession.text}}</h1>
                    </div>
                </div>
                
            </div>
            <div class="black-marketing">

            </div>
          </div>
        </div>
      </div>
    </div>
</template>
  
<script>
import Line from '../components/ChartComponent.vue'
import Earth from './ObjectEarth.vue'
export default {
  name: "TheHeader",
  components: { Line, Earth },
  data() {
    return {
      products: [
        {   
          color: "blue",
          name: "My Producs",
        },
        {
          color: "red",
          name: "Competitor"
        }
      ],
      dates: [
        {   
            height: '78px',
            month: 'Jan',
            color: '#2280FF'
        },
        {   
            height: '68px',
            month: 'Feb',
            color: '#20BFF7'
        },
        {   
            height: '63px',
            month: 'Mar',
            color: '#EB6E46'
        },
      ],
      nums: [
        {
            number: '10k'
        },
        {
            number: '5k'
        },
        {
            number: '0'
        },
      ],
      sales: [
        {   
            weight: '600',
            size: '14px',
            color: 'grey',
            text: 'Sales'
        },
        {   
            weight: '700',
            size: '20px',
            color: 'white',
            text: '$31,092'
        },
      ],
      raisings: [
        {
            weight: '600',
            size: '14px',
            color: '#60D39C',
            text: '+4.2%'
        },
        {
            weight: '400',
            size: '14px',
            color: '#5C616E',
            text: 'from last year'
        },
      ],
      marketings: [
        {   
            weight: '600',
            size: '14px',
            color: 'grey',
            text: 'Marketing'
        },
        {   
            weight: '700',
            size: '20px',
            color: 'white',
            text: '$29,128'
        },
      ],
      recessions: [
        {
            weight: '600',
            size: '14px',
            color: '#E35454',
            text: '-1.2%'
        },
        {
            weight: '400',
            size: '14px',
            color: '#5C616E',
            text: 'from last year'
        },
      ]
    }
  }
}
</script>



<style scoped>
@media (min-width: 1080px) {
    .root-earth {
        width: 350px;
        height: 200px;
        margin-right: 125px;
        display: flex;
    }
    .earth-config {
        width: 100px;
        height: 100px;
        margin-top: 0px;
        margin-right: 0px;

    }
    .black-sales-text1-css {
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-bottom: 5px;
    }
    .black-sales-text1 {
        display: block;
        width: 141px;
        height: auto;
    }
    .black-raising-text2-css {
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-bottom: 5px;
    }
    
    .black-raising-text2 {
        display: flex;
        flex-direction: row;
        height: auto;
        margin-right: 4px;
    }
    .black-raising-root {
        display: flex;
        flex-direction: row;
        width: 145px;
        height: auto;
    }
    .black-marketing-text1-css {
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-bottom: 5px;
    }
    .black-marketing-text1 {
        display: block;
        width: 141px;
        height: auto;
    }
    .black-recession-text2-css {
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-bottom: 5px;
    }
    
    .black-recession-text2 {
        display: flex;
        flex-direction: row;
        height: auto;
        margin-right: 4px;
    }
    .black-recession-root {
        display: flex;
        flex-direction: row;
        width: 145px;
        height: auto;
    }
    .black-sales {
        display: block;
        width: 141px;
        height: auto;
        margin-right: 25px;
    }
    .black-marketing {
        display: block;
        width: 141px;
        height: auto;
    }
    .black-statictic {
        width: 300px;
        height: 60px;
        display: flex;
        flex-direction: row;
        background-color: black;
        border-radius: 10px;
        position: absolute;
        top: 485px;
        padding: 20px;
        padding-top: -12px;
    }
    .text-li {
        color: black;
        font-size: 12px;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        justify-content: end;
    }
    .title-growth {
        position: absolute;
        font-family: 'Inter', sans-serif;
        color: black;
        font-weight: 400;
        margin-right: 25px;
        margin-bottom: 25px;
    }
    .col-left {
        display: flex;
        flex-direction: column; 
        position: relative;
        left: -5px;
        margin-top: 22px; 
    }

    .left-info {
        margin-bottom: 15px;
        justify-content: end;
    }
    .title-text {
        font-size: 11px;
    }
    div.customer-growth {
        width: 103px;
        height: 110px;
        padding: 16px 18px 16px 18px;
        margin-left: 222px;
        margin-top: 35px;
        border-radius: 8px;
        opacity: 0px;
        justify-content: center;
        display: flex;
        box-shadow: 15px 15px 150px 1px #b3b3b3b2;
        background-color: rgb(255, 255, 255);
        position: absolute;
    }
    .row-growth {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        width: 130px;
        justify-content: end;
        margin-right: 5px;
        position: relative;
        padding-top: 115px;
      }
    .bar-root {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 12px;
        padding-left: 5px;
      }
    div.bar {
        width: 12px;
        border-radius: 25px;
      }
    .date {
        margin-top: 5px;
        font-size: 10px;
        font-family: 'Inter', sans-serif;
        color: grey;
        font-weight: 400;
      }
    .line-config {
        scale: 1;
    }
    div.container-nl {
        display: block;
        flex-direction: row;
    }
    div.container-nl-root {
        display: flex;
        flex-direction: row;
        margin-bottom: 25px;
    }
    div.number-left-root {
        display: flex;
        flex-direction: row;
        justify-content: end;
    }
    div.content-center-sales {
        width: 100%;
        height: 170px;
        padding: 0px;
      }
    h1.number-left {
        color: grey;
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        margin-bottom: 10px;
        font-size: 14px;
        align-items: end;
        justify-content: end;
    }
    .blue-shadow {
        position: relative;
        width: 1px;
        height: 1px;
        border-radius: 100%;
        margin-top: 50px;
        box-shadow: 250px 350px 475px 250px #E2F8F0B2;
        opacity: 1;
    }
    .text-product {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 11px;
        top: -2px;
        position: relative;
        margin-right: 25px;
    }
    .blue-shadow {
        position: relative;
        width: 1px;
        height: 1px;
        border-radius: 100%;
        margin-top: 50px;
        box-shadow: 250px 350px 475px 350px #E2F8F0B2;
        opacity: 1;
    }
    .text-competitor {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        size: 14px;
        top: -1px;
        position: relative;
        margin-right: 25px;
    }
    .sales-text1 {
        font-size: 20px;
        font-family: "Inter", sans-serif;
        font-weight: 700;
        margin-bottom: 5px;
    }
    .cube {
        width: 12.2px;
        height: 10px;
        border-radius: 2px;
        margin-right: 5px;
    }
    .sales-header {
        display: flex;
        width: 100%;
        height: 25px;
    }
    .sales-header > div {
        display: flex;
    }
    .content-sales {
        width: 300px;
        height: 200px;
        display: block;
        padding-top: 10px;
        margin-right: 25px;
    }
    .sales-light {
        width: 319px;
        height: 246px;
        padding: 20px 0px 0px 0px;
        top: 200px;
        border-radius: 8px;
        opacity: 0px;
        padding-left: 20px;
        display: block;
        box-shadow: 15px 15px 100px 0.1px rgb(204, 204, 204);
        background-color: white;
        position: absolute;
    }
    .customer-growth {
        width: 133px;
        height: 120px;
        padding-left: 10px;
        top: 110px;
        border-radius: 8px;
        opacity: 0px;
        box-shadow: 15px 15px 100px 0.1px rgb(204, 204, 204);
        background-color: white;
        position: absolute;
    }
    .headercontent1 {
        justify-content: left;
        display: flex;
        width: 400px;
    }
    .shadoworange {
        width: 1px;
        height: 1px;
        border-radius: 100%;
        margin-top: 50px;
        box-shadow: 150px 150px 175px 150px #FA7515;
        opacity: 0.2;
        position: relative;
    }
    .header2 {
        display: flex;
        justify-content: center;
        align-items: top;
        height: 600px;
    }
    .container {
        max-width: 1080px;
        width: 100%;
        display: flex;
    }
    .contentheader1 {
        justify-content: left;
        display: block;
    }
    .contentheader2 {
        justify-content: right;
        width:360px;
        height: 520px;
        display: block;
    }
    .text1header2 {
        font-family: "Inter", sans-serif;
        font-size: 60px;
        font-weight: 700;
        margin-top: 15px;
        margin-left: 20px;
        max-width: 600px;
        min-width: 500px;
    }
    .text2header2 {
        font-family: "Inter", sans-serif;
        font-size: 22px;
        font-weight: 600;
        margin-top: 50px;
        margin-left: 20px;
        min-width: 390px;
        display: flex;
    }
    .text2header2-mob {
        display: none;
    }
    .greyline {
        border: 0px;
        border-bottom: 2px solid grey;
        min-width: 60px;
        margin-left: 25px;
        margin-top: 55px;
        height: 10px;
    }
    .textsheader2 {
        display: block;
    }
    .field {
        background-color: transparent;
        border: 0px transparent;
        outline: 0px transparent;
        height: 47px;
        border-bottom: 1px solid grey;
    }
    .inputemail {
        max-width: 471px;
        margin-left: 50px;
        margin-top: 50px;
        scale: 1.1;
        display: flex;
    }
    .emailbutton {
        height: 46px;
        scale: 1.1;
        margin-left: 25px;
        border-radius: 100px;
        width: 175px;
        background-color: black;
        border: 0px transparent;
        cursor: pointer;
        transition: 500ms ease;
    }
    .emailbutton:active {
        scale: 1;
    }
    .emailbutton-h3 {
        font-size: 16px;
        color: white;
        line-height: 24px;
        font-weight: 700;
    }
}

@media (max-width: 1079px) {
    .black-sales-text1-css {
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-bottom: 5px;
    }
    .black-sales-text1 {
        display: block;
        width: 141px;
        height: auto;
    }
    .black-raising-text2-css {
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-bottom: 5px;
    }
    
    .black-raising-text2 {
        display: flex;
        flex-direction: row;
        height: auto;
        margin-right: 4px;
    }
    .black-raising-root {
        display: flex;
        flex-direction: row;
        width: 145px;
        height: auto;
    }
    .black-marketing-text1-css {
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-bottom: 5px;
    }
    .black-marketing-text1 {
        display: block;
        width: 141px;
        height: auto;
    }
    .black-recession-text2-css {
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        margin-bottom: 5px;
    }
    
    .black-recession-text2 {
        display: flex;
        flex-direction: row;
        height: auto;
        margin-right: 4px;
    }
    .black-recession-root {
        display: flex;
        flex-direction: row;
        width: 145px;
        height: auto;
    }
    .black-sales {
        display: block;
        width: 141px;
        height: auto;
        margin-right: 0px;
        scale: 0.8;
    }
    .black-marketing {
        display: block;
        width: 141px;
        height: auto;
        scale: 0.8;
    }
    .black-statictic {
        width: 295px;
        height: 50px;
        background-color: black;
        border-radius: 10px;
        position: relative;
        display: flex;
        top: -80px;
        padding-left: 5px;
        padding-top: 10px;
        padding-bottom: 20px;
    }
    .text-li {
        color: black;
        font-size: 12px;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
        justify-content: end;
    }
    .title-growth {
        position: absolute;
        font-family: 'Inter', sans-serif;
        color: black;
        font-weight: 400;
        margin-right: 25px;
        margin-bottom: 25px;
    }
    .col-left {
        display: flex;
        flex-direction: column; 
        position: relative;
        left: -5px;
        margin-top: 22px; 
    }

    .left-info {
        margin-bottom: 15px;
        justify-content: end;
    }
    .title-text {
        font-size: 11px;
    }
    .row-growth {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 10px;
        width: 130px;
        justify-content: end;
        margin-right: 5px;
        position: relative;
        padding-top: 115px;
      }
    .bar-root {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 12px;
        padding-left: 5px;
      }
    div.bar {
        width: 12px;
        border-radius: 25px;
      }
    .date {
        margin-top: 5px;
        font-size: 10px;
        font-family: 'Inter', sans-serif;
        color: grey;
        font-weight: 400;
      }
    .title-growth {
        position: absolute;
        font-family: 'Inter', sans-serif;
        color: black;
        font-weight: 400;
        margin-right: 25px;
    }
    .title-text {
        font-size: 11px;
    }
    .line-config {
        scale: 0.9;
    }
    .text-product {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 11px;
        top: -2px;
        position: relative;
        margin-right: 10px;
    }
    .blue-shadow {
        position: relative;
        width: 1px;
        height: 1px;
        border-radius: 100%;
        margin-top: 50px;
        box-shadow: 250px 350px 475px 350px #E2F8F0B2;
        opacity: 1;
    }
    .text-competitor {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        size: 14px;
        top: -1px;
        position: relative;
        margin-right: 25px;
    }
    .sales-text1 {
        font-size: 20px;
        font-family: "Inter", sans-serif;
        font-weight: 700;
        margin-bottom: 5px;
        margin-left: 25px;
    }
    .cube {
        width: 12.2px;
        height: 10px;
        border-radius: 2px;
        margin-right: 5px;
        margin-left: 15px;
    }
    .sales-header {
        display: flex;
        width: 100%;
        height: 25px;
    }
    .sales-header > div {
        display: flex;
    }
    .content-sales {
        width: 300px;
        height: 200px;
        display: block;
        padding-top: 20px;
    }
    .blue-shadow {
        position: relative;
        width: 1px;
        height: 1px;
        border-radius: 100%;
        margin-top: 50px;
        box-shadow: 250px 350px 375px 350px #E2F8F0B2;
        opacity: 1;
    }
    .sales-light {
        width: 300px;
        height: 246px;
        padding: 20px 0px 0px 0px;
        margin-left: 0px;
        margin-top: 25px;
        border-radius: 8px;
        opacity: 0px;
        box-shadow: 15px 15px 150px 1px #b3b3b3b2;
        background-color: rgb(255, 255, 255);
        position: absolute;
    }
    div.customer-growth {
        width: 103px;
        height: 110px;
        padding: 16px 18px 16px 18px;
        margin-left: 210px;
        margin-top: -405px;
        border-radius: 8px;
        opacity: 0px;
        justify-content: center;
        display: flex;
        box-shadow: 15px 15px 150px 1px #b3b3b3b2;
        background-color: rgb(255, 255, 255);
        position: absolute;
    }
    .shadoworange {
        width: 1px;
        height: 1px;
        border-radius: 100%;
        margin-top: 50px;
        box-shadow: 0px 30px 120px 110px #FA7515;
        opacity: 0.2;
        position: relative;
    }
    .header2 {
        display: flex;
        width: 100%;
        justify-content: center;
    }
    .container {
        max-width: 100%;
        width: 100%;
        margin-top: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .headercontent1 {
        justify-content: left;
        display: flex;
        flex-direction: row;
    }
    .contentheader1 {
        justify-content: left;
        display: block;
        flex-direction: row;
    }
    .contentheader2 {
        display: block;
        justify-content: left;
        flex-direction: column;
        width: 350px;

        height: 460px;
    }
    .text1header2 {
        font-family: "Inter", sans-serif;
        font-size: 32px;
        font-weight: 700;
        margin-top: 0px;
        margin-left: 20px;
        width: 90%;
        text-align: left;
    }
    .textsheader2 {
        display: flex;
        flex-direction: column;
        align-items: left;
        width: 100%;
    }
    .text2header2-mob {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-top: 20px;
        margin-left: 15px;
        width: 300px;
        text-align: left;
        display: block;
    }
    .text2header2 {
        display: none;
    }
    .greyline {
        border: 0px;
        border-bottom: 2px solid grey;
        width: 30px;
        margin-left: 20px;
        margin-bottom: 69px;
    }
    .field {
        background-color: transparent;
        border: 0px transparent;
        outline: 0px transparent;
        height: 37px;
        width: 80%;
        margin-bottom: 15px;
        border-bottom: 1px solid grey;
    }
    .inputemail {
        width: 80%;
        margin-top: 40px;
        display: flex;
        margin-left: 20px;
        justify-content: center;
    }
    .emailbutton {
        height: 36px;
        border-radius: 100px;
        width: 128px;
        margin-left: 10px;
        background-color: black;
        border: 0px transparent;
        cursor: pointer;
        display: flex;
        scale: 1.1;
        justify-content: center;
        align-items: center;
        transition: 500ms ease;
    }
    .emailbutton:active {
        scale: 1;
    }
    .emailbutton-h3 {
        font-size: 12px;
        color: white;
        font-weight: 700;
        margin: 0;
    }
}
</style>

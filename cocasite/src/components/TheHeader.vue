<template>
    <div class="header2">
        <div class="container">
            <div class="contentheader1">
                <div class="shadoworange">
                </div>
                <div class="textsheader2">
                    <h1 class="text1header2">
                        Digitally forward creative
                    </h1>
                    
                </div>
                
            </div>
            
            <div class="textsheader2">
                <div class="greyline">

                </div>
                <div>
                    <h1 class="text2header2">
                        When it comes to interactive marketing, we've got you covered. Be where the world is going
                    </h1>
                    <h1 class="text2header2-mob">
                        Our biggest challenge is making sure we're always designing and building products that will help you run your business better.
                    </h1>
                </div>
            
                
                
            </div>
            <div class="inputemail">
                <input type="" placeholder="Enter your email" class="field">
                <button class="emailbutton">
                    <h3 class="emailbutton-h3">
                        Try for free
                    </h3>
                </button>
            </div>
            <div class="contentheader2">
                правая часть
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
};
</script>
<style>
@media (min-width: 921px) {
    .shadoworange {
        width: 1px;
        height: 1px;
        border-radius: 100%;
        margin-top: 50px;
        box-shadow: 100px 50px 175px 150px #FA7515;
        opacity: 0.2;
        position: relative;
    }
    .header2 {
        display: flex;
        justify-content: center;
        align-items: top;
    }
    .container {
        max-width: 1080px;
        width: 100%;
    }
    
    .contentheader1 {
        justify-content:left;
        display: flex;
    }
    
    .contentheader2 {
        justify-content: right;
        display: flex;
    }
    
    .text1header2 {
        font-family: "Inter", sans-serif;
        font-size: 70px;
        font-weight: 700;
        margin-top: 15px;
        margin-left: 20px;
        max-width: 800px;
        width: auto;
    }
    .text2header2 {
        font-family: "Inter", sans-serif;
        font-size: 22px;
        font-weight: 600;
        margin-top: 50px;
        margin-left: 20px;
        max-width: 390px;
        width: auto;
        display: block;
    }
    .text2header2-mob {
        display: none;
    }
    .greyline {
        border: 0px;
        border-bottom: 2px solid grey;
        width: 60px;
        margin-left: 25px;
        margin-top: 55px;
        height: 10px;
    }
    .textsheader2 {
        display: flex;
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
    }
    .emailbutton {
        height: 46px;
        scale: 1.1;
        margin-left: 25px;
        border-radius: 100px;
        width: 175px;
        background-color: black;
        border: 0px transparent;
        
    }
    .emailbutton-h3 {
        font-size: 16px;
        color: white;
        line-height: 24px;
        font-weight: 700;
    }
    
    
    
}
@media (max-width: 920px) {
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
        justify-content: center;
        align-items: top;
    }
    .container {
        max-width: 1080px;
        width: 100%;
    }
    
    .contentheader1 {
        justify-content:left;
        display: flex;
    }
    
    .contentheader2 {
        justify-content: left;
        display: flex;
    }
    
    .text1header2 {
        font-family: "Inter", sans-serif;
        font-size: 32px;
        font-weight: 700;
        margin-top: 50px;
        margin-left: 25px;
        max-width: 300px;
        width: auto;
    }
    .text2header2-mob {
        font-family: "Inter", sans-serif;
        font-size: 16px;
        font-weight: 600;
        margin-top: 50px;
        margin-left: 10px;
        max-width: 300px;
        width: auto;
        display: block;
    }
    .text2header2 {
        display: none;
    }
    .greyline {
        border: 0px;
        border-bottom: 2px solid grey;
        width: 30px;
        margin-left: 30px;
        margin-top: 50px;
        height: 10px;
    }
    .textsheader2 {
        display: flex;
    }
    .field {
        background-color: transparent;
        border: 0px transparent;
        outline: 0px transparent;
        height: 37px;
        width: 219px;
        margin-bottom: 15px;
        border-bottom: 1px solid grey;

    }
    .inputemail {
        max-width: 471px;
        margin-left: 20px;
        margin-top: 50px;
        scale: 1;
    }
    .emailbutton {
        height: 36px;
        scale: 1;
        margin-left: 15px;
        border-radius: 100px;
        width: 108px;
        background-color: black;
        border: 0px transparent;
        padding: 8px, 16px, 8px, 16px;
        
    }
    .emailbutton-h3 {
        font-size: 12px;
        color: white;
        line-height: 20px;
        font-weight: 700;
    }
}

</style>
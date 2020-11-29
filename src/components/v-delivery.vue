<template>
  <div class="v-delivery">
    <div class="main">
      <v-header/>
      <div class="image-delivery"></div>
      <div class="info">


          <div class="delivery" >
            <div class="title-c">
              <span>Delivery</span>
            </div>
            <div class="text-delivery">
              <p>Delivery is carried out within 2-3 days from the date of order.
                After confirming the order, the manager will call you and clarify the order details.
                Couriers deliver from 9 am to 5 pm from Monday to Friday.
                Couriers do not deliver on holidays, we recommend that you take into account the following
                information:</p>
              <ul>
                <li>All orders require a signature upon receipt,</li>
                <li>We are unable to reroute orders after items have been shipped, so please make sure someone can sign
                  your order at the shipping address provided.
                </li>
                <li> The courier does not deliver to PO Boxes and does not use standard delivery.</li>

              </ul>
            </div>
          </div>
          <div class="return" >
            <div class="title-c">
              <span>Return</span>
            </div>
            <div class="text-return">
              <p>You can return an item up to fifteen (15) days from the date you receive the products by a return
                authorization form (Return Authorization Number or RAN) found online in the Customer Service area, or by
                sending an explicit declaration of your decision (in this case, you will be responsible for proving that
                you exercised your right in a correct and timely manner).

                We will confirm receipt of your request by email, along with your return number.
                The products to be returned must be picked up by the courier within fifteen (15) working days of the date
                when you informed the Vendor of your decision to return them. The products can be returned by sending the
                parcel with the courier indicated by the Vendor, or through another courier, only after you have received
                the return number.
                The right to return products shall be deemed correctly exercised once the following conditions have been
                fully met:</p>
              <ul>
                <li>The return authorization form must be correctly filled in and sent to the Vendor within fifteen (15)
                  days from the date of receiving the product.
                </li>
                <li>The products should not have been used, worn, washed or damaged.</li>
                <li>The products must be returned in their original packaging, complete with any accessories sent together
                  with the item (e.g. dust bags).
                </li>
                <li>Returned products must be sent from the country that you submitted the order from.</li>
                <li>The returned items must be picked up by the courier within fifteen (15) days from the date when you
                  submitted the return authorization form.
                </li>

              </ul>
            </div>
          </div>
          <div class="contact" >
            <div class="title-c">
              <span>Contact</span>
            </div>
            <div class="text-contact">
              <div class="name-legal">
                <p>
                The name of the legal entity is SportTime LLC.
              </p>
              </div>

              <div class="legal-address">
                <p>Legal address - Republic of Belarus, 220034, Minsk, st. F. Skarina, house 8, office 203.</p>
              </div>
              <div class="support"><p>24/7 support +375-29-111-11-11</p></div>
            </div>
          </div>

      </div>
    </div>
    <v-footer/>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import vHeader from './v-header'
import vFooter from './v-footer'

export default {
  name: "v-delivery",
  components:{
    vFooter,vHeader
  },
  data() {
    return {


    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style>
@import '../assets/style/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;500&display=swap');

.image-delivery {
  background: url("../images/delivery.jpg");
  height: 250px;
}

.info {
  display: flex;
  flex-direction: column;
}
.info .title-c{
  margin: auto 39px;
}
span {
  font: 500 30px 'Comfortaa', cursive;
  text-transform: uppercase;

}

.delivery, .return, .contact{
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 8px 0 #e0e0e0;
  margin: 30px 65px;
  padding: 15px;

}
.return .title-c{
  margin-right: 66px;
}
.contact{
  margin-bottom: 20px;
}


.text-contact, .text-delivery, .text-return{
  display: block;
  padding-top: 10px;
  text-align: left;
  font: 300 17px 'Comfortaa', cursive;
  line-height: 30px;
  padding-right: 30px;
}
ul{
  padding-left: 45px;
}
ul li {
  font: 300 17px 'Comfortaa', cursive;
  text-align: left;
  line-height: 35px;

}
</style>
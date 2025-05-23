import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ReuseGift from '../ReusableComponents/ReuseGift'
const Created = () => {
    const giftSwitch = useSelector((state)=>state.counter.giftSwitch)

  return (
    <div>
      {giftSwitch === 'featured'?<div><ReuseGift head={'Anytime'} items={[
      {title:'India Exclusive',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/TSB_GC_indiacard_1_1_28dafb2bb6.png',info:'Bring in the festive season and make each celebration memorable.'},
      {title:'Starbucks Coffee',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_1_2d1afadaa0.png',info:'Starbucks is best when shared. Treat your pals to a good cup of coffee.'},
      {title:'U Keep Me Warm',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_1_1bdd3bf075.webp',info:'Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.'},
    ]} /><ReuseGift head={'Congratulations'} items={[{title:'Congrats',info:'Coffee. Cheer. Celebrate. Enjoy each of your special moments with Starbucks.',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_0a31455af9.png'}]} /></div>:''}
    {giftSwitch === 'Anytime'?<div style={{marginBottom:'120px'}} ><ReuseGift head={'Anytime'} items={[
      {title:'India Exclusive',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/TSB_GC_indiacard_1_1_28dafb2bb6.png',info:'Bring in the festive season and make each celebration memorable.'},
      {title:'Starbucks Coffee',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/71d3780c_be6e_46b1_ab01_8a2bce244a7f_1_1_2d1afadaa0.png',info:'Starbucks is best when shared. Treat your pals to a good cup of coffee.'},
      {title:'Starbucks',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/0bed73e6_0d8d_48c0_8936_f46d7355a8ad_1_1_2bdef6b475.webp',info:'Take the moment and make it special with Starbucks.'},
      {title:'Hang In There',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/eacb11c1_b46b_4105_9c99_e0a60224adaa_1_0464825bb5.png',info:'Sometimes, company goes a long way. Let your friends know you have their back.'},
      {title:'My Treat',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/2822e4c5_38ff_422a_a225_cfc3a6bdfc06_1_fdcaafd8bd.png',info:'Nothing like a cup of coffee to flame a friendship. Share the experience with your best fr...'},
      {title:'Way To Go',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/61c1abaf_3b0f_48af_903e_426c1b9dae41_1_9a59b0ea34.webp',info:'Its time to celebrate! Show your appreciation with this Starbucks Gift Card.'},
      {title:"This One's On Me",imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/60b5bfc9_b8df_4a8b_9565_300c0797e488_1_e844c75b0c.webp',info:'Everything I brew, I brew it for you. This ones on me.'},
      {title:'Good Things Ahead',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/ff96761f_7c0a_4960_84a8_2a94c7d994fc_f59ad13bec.png',info:"Have a cup of coffee, it's all good from here."},
      {title:'U Keep Me Warm',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/7c6f7c64_3f89_4ba2_9af8_45fc6d94ad35_1_1bdd3bf075.webp',info:'Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.'},
      {title:'U Are The Best Just Sayin',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/10471f55_db43_4633_8f4a_a2b8408abeea_1_dc2f4669f7.webp',info:"Think they're the Nitro to your Brew? Let them know."},
      {title:"Life Happens",imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/0807fba8_293b_407b_a973_c5eaad1c73fa_1_11692c064d.png',info:'Life happens, coffee helps. Brighten up their day with Starbucks.'},
      {title:'U Are Awesome',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/988fbed7_fcce_45c0_a8a0_f08ee2a9ac4d_1_4e609d23fa.webp',info:"If you love someone, let 'em know. Share this Gift Card with all the awesome people in you..."},
      {title:'Greetings',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/49bc224d_6ad8_46db_a46f_9ce256321659_1_2d7d101557.png',info:"Let each 'hello' be one with coffee."},
      {title:'Global Spring Card',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/483b8a72_214b_47d4_81a1_ad9187f5f50b_1_a449d5551b.png',info:'Blissful, blooming, and bright. Spring is a merry time. Keep things fresh and lively.'},
    ]} /></div>:''}
    {giftSwitch === 'cong'?<div style={{marginBottom:'120px'}} ><ReuseGift head={'Congratulations'} items={[
      {title:'Congrats',info:'Coffee. Cheer. Celebrate. Enjoy each of your special moments with Starbucks.',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/97ee3280_2f05_43ad_bd94_f5c184d4f502_1_0a31455af9.png'}
    ]} /></div>:''}
    {giftSwitch === 'thanks'?<div style={{marginBottom:'120px'}}><ReuseGift head={'Thank You'} items={[
      {title:'Thank You',info:'To the people who make coffee and those who love it, thank you.',imageUrl:'https://preprodtsbstorage.blob.core.windows.net/cms/uploads/720b9684_c1ac_49cb_92fe_a7e0240c9602_1_1_faf8b923e5.webp'}
    ]} /></div>:''}
    </div>
  )
}

export default Created

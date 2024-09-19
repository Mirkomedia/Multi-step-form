import React from 'react'

export const FinishingUp = ({formData}) => {
  const selectedPlan = formData.plan
  const interval = formData.interval
  const name = formData.name
  const email = formData.email
  const phoneNumber = formData.phoneNumber
  let planPrice 
  if(formData.plan === 'Arcade'){
    {formData.interval === 'monthly'?  planPrice = '$9/mo':planPrice = '$90/yr'}
 }else if(formData.plan === 'Advanced'){
   {formData.interval === 'monthly' ?  planPrice ='$12/mo':planPrice = '$120/yr'}
 }else if(formData.plan === 'Pro'){
   {formData.interval === 'monthly' ?  planPrice ='$15/mo': planPrice ='$150/yr'}
 }
  const onlineService = formData.onlineService
  let onlineServicePrice 
  if (formData.onlineService === 'online service'){
    {formData.interval === 'monthly' ? onlineServicePrice = '$1/mo': onlineServicePrice = '$10/yr' }
  } 
  const largerStorage = formData.largerStorage
  let largerStoragePrice
  if(formData.largerStorage === 'largerStorage'){
    {formData.interval === 'monthly' ? largerStoragePrice = '$2/mo' : largerStoragePrice= '$20/yr'}
  }
  const customizableProfile = formData.customizableProfile
  let customizableProfilsePrice
  if (formData.customizableProfile === 'customProfile') {
    {formData.interval === 'monthly' ? customizableProfilsePrice = '$2/mo' : customizableProfilsePrice= '$20/yr'}
    
  }
 
  return (
    <div>
      <div className='right-container'>
       <h1>Finishing-up</h1>
        <p className='graytext'>Double-check everything looks OK before confirming.</p>
       <table className='doublecheck-container'>
        <tbody>
        <tr id='name'>
          <th>{name}</th>
        </tr>
        <tr id='email'>
          <th>{email}</th>
        </tr>
        <tr id='phonenumber'>
          <th>{phoneNumber}</th>
        </tr>
        <tr id='selected-plan'>
          <th>
        {selectedPlan}({interval})
        </th>
        <th>{planPrice}</th>
        </tr>
        <tr id='change-link'>change</tr>
        <tr id='online-service'>
         <th>{onlineService}</th> 
         <th>{onlineServicePrice}</th>
        </tr>
        <tr id='larger-storage'>
         <th>{largerStorage}</th> 
         <th>{largerStoragePrice}</th>
        </tr>
        <tr id="customizable-profile">
          <th>{customizableProfile}</th>
          <th>{customizableProfilsePrice}</th>
        </tr>
        <tr>
          <th>Total ({interval}) dynamic price display</th>
          <th></th>
      
        </tr>
    
    

    

         </tbody>
       </table>
      </div>
    
    </div>
  )
}

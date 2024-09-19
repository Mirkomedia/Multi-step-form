export const SelectYourPlan = ({formData, setFormData,}) => {
  
  

  const handleInterval = (e) =>{
  const intervalSwitch = document.querySelector('input')
    const isChecked  = intervalSwitch.checked ? 'yearly' : 'monthly'
    
       setFormData({
      ...formData,interval : isChecked  
    })
  }
  const handlePlanSelect = (plan) =>{
    setFormData({
      ...formData,plan 
    })
  }
  


  return (

    <div className="right-container">
        <h1>Select your plan</h1>
        <p className="graytext"> You have the option of monthly or yearly billing.</p>
      <div className="plan-container">
        <div className={`plan-box arcade ${formData.plan === 'Arcade' ? 'active' : ''}`}
         onClick={() =>handlePlanSelect('Arcade')}>
        <img src="./src/images/icon-arcade.svg" alt="arcade"/>
        <p>Arcade</p>
        <p>{formData.interval === 'monthly' ? '9$/mo' : '90$/yr'}</p>
        <p>{formData.interval === 'monthly' ? '' : '2 months free'}</p>
        </div>
        <div  className={`plan-box advanced ${formData.plan === 'Advanced' ? 'active' : ''}`}
         onClick={() =>handlePlanSelect('Advanced')}>
        <img src="./src/images/icon-advanced.svg" alt="advanced"/>
         <p>Advanced</p>
         <p>{formData.interval === 'monthly' ? '12$/mo' : '120$/yr'}</p>
        <p>{formData.interval === 'monthly' ? '' : '2 months free'}</p> 
        </div>
        <div  className={`plan-box pro ${formData.plan === 'Pro' ? 'active' : ''}`}
         onClick={() =>handlePlanSelect('Pro')}>
        <img src="./src/images/icon-pro.svg" alt="pro"/>
         <p>Pro</p>
         <p>{formData.interval === 'monthly' ? '15$/mo' : '150$/yr'}</p>
        <p>{formData.interval === 'monthly' ? '' : '2 months free'}</p>
        </div>
      </div>
      <footer className="interval-switch">
     Monthly
  
    <label className="switch">
          
    <input onChange={handleInterval}  type="checkbox" id="interval" checked={formData.interval === 'monthly' ? false : true} />
     <span  className="slider round"></span>
  </label>
  
     Yearly
    </footer>
    </div>
  )
}

 import emailjs from 'emailjs-com';
 import React from 'react';


 function Field ({name, value, onChange, children}) {
   return <div className="formBox">
     <label htmlFor={name}>{children}</label>
     <input type="text" value={value} onChange={onChange} id={name} name={name} className="formContent"/>
   </div>
 }
 function FieldRequired ({name, value, onChange, children}) {
  return <div className="formBox">
    <label htmlFor={name}>{children}</label>
    <input type="text" value={value} onChange={onChange} required id={name} name={name} className="formContent"/>
  </div>
}
function FieldTel ({name, value, onChange, children}) {
  return <div className="formBox">
    <label htmlFor={name}>{children}</label>
    <input type="tel" pattern="^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$" value={value} onChange={onChange} id={name} name={name} className="formContent"/>
  </div>
}
 function CheckBox ({name, value, onChange, children}) {
   return <div className="formBoxCheck">
     <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="formContent"/>
     <label htmlFor={name}>{children}</label>
   </div>
 }
 function EmailBox ({name, value, onChange, children}) {
   return <div className="formBox">
     <label htmlFor={name}>{children}</label>
     <input type="email" pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" value={value} onChange={onChange} required id={name} name={name} className="formContent"/>
   </div>
 }
 function TextArea ({name, value, onChange, children}) {
   return <div className="formBox">
     <label htmlFor={name}>{children}</label>
     <textarea rows="20" maxLength="2000" value={value} onChange={onChange} id={name} name={name} className="formContent"/>
   </div>
 }


 export default class ContactForm extends React.Component {
   constructor(props){
     super(props)
     this.state = {
       lastName:"",
       firstName:"",
       company:"",
       phone:"",
       email:"",
       natureOfTheRequest:"",
       message:"",
       motivation: false
     }

     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
   }
   handleChange (e) {
     const name = e.target.name
     const type = e.target.type
     const value = type === 'checkbox' ? e.target.checked : e.target.value
     this.setState({
       [name]: value
     })
   }
   handleSubmit (e) {
    e.preventDefault();

    const {lastName, firstName, company, phone, email, natureOfTheRequest, message, motivation} = this.state

    let templateParams = {
      from_name: lastName,
      to_name: 'service_93qv2no',
      reply_to: email,
      lastName: lastName,
      firstName: firstName,
      company: company,
      phone: phone,
      email: email,
      natureOfTheRequest: natureOfTheRequest,
      message: message,
      motivation: motivation,
    }

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(templateParams)
    })

    .then((result) => {
        console.log(result.statusText);
    }, (error) => {
        console.log(error.statusText);
    });
   
    e.target.reset();
     emailjs.sendForm(
       'service_93qv2no', 
       'template_fqvizbo', 
       e.target, 
       'user_bbkJTiBYlJBDDBKNLxGwT'
    )
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
   }
  resetForm(){
    this.setState({
     lastName:"",
     firstName:"",
     company:"",
     phone:"",
     email:"",
     natureOfTheRequest:"",
     message:"",
     motivation: false     
   })
  }

   render() {
     return (
       <form className="container" onSubmit={this.handleSubmit}>
         <h2>Contactez-moi</h2>
         <div className="form-content">
   {/* ............................................................................................ */}
           <div className="lastNameContent">
             <FieldRequired name="lastName" value={this.state.lastName} onChange={this.handleChange}>Nom *</FieldRequired>
           </div> 
   {/* ............................................................................................ */}
           <div className="firstNameContent">
             <Field name="firstName" value={this.state.firstName} onChange={this.handleChange}>Prénom</Field>
           </div>
   {/* ............................................................................................ */}
           <div className="companyContent">
             <Field name="company" value={this.state.company} onChange={this.handleChange}>Société</Field>
           </div>
   {/* ............................................................................................ */}
           <div className="phoneContent">
             <FieldTel name="phone" value={this.state.phone} onChange={this.handleChange}>Téléphone</FieldTel>
           </div>
   {/* ............................................................................................ */}
           <div className="emailContent">
             <EmailBox name="email" value={this.state.email} onChange={this.handleChange}>Email *</EmailBox>
           </div>
   {/* ............................................................................................ */}
           <div className="requestContent">
             <label 
               className="request" 
               htmlFor="request">
                 Nature de la demande *
             </label>
             <select 
               id="natureOfTheRequest"
               name="natureOfTheRequest"
               onChange={this.handleChange}
               value={this.state.natureOfTheRequest} 
               required 
             >
               <option value="">Sélectionnez</option>
               <option value="stage">Proposition de stage</option>
               <option value="alternating training">Proposition d'alternance</option>
               <option value="job">Proposition d'emploi</option>
               <option value="suggestion">Faire une suggestion</option>
               <option value="curiosity">Juste par curiosité</option>
               <option value="other">Autre sujet</option>
             </select>
           </div>
   {/* ............................................................................................ */}
           <div className="messageContent">
             <TextArea name="message" value={this.state.message} onChange={this.handleChange}>Exprimez-vous</TextArea>
           </div>
   {/* ............................................................................................ */}
           <div className="motivationContent">
             <CheckBox name="motivation" value={this.state.motivation} onChange={this.handleChange}>Merci de cocher si le contact est de nature professionnelle</CheckBox>
           </div> 
   {/* ............................................................................................ */}
           <input type="submit" value="Envoyer" className="button" />
         </div>
       </form>
     )
   }
 }





import emailjs from 'emailjs-com';
import React from 'react';

function Field ({name, value, onChange, children}) {
  return <div className="formBox">
    <label htmlFor={name}>{children}</label>
    <input type="text" value={value} onChange={onChange} id={name} name={name} className="formContent"/>
  </div>
}
function CheckBox ({name, value, onChange, children}) {
  return <div className="formBox">
    <input type="checkbox" checked={value} onChange={onChange} id={name} name={name} className="formContent"/>
    <label htmlFor={name}>{children}</label>
  </div>
}
function EmailBox ({name, value, onChange, children}) {
  return <div className="formBox">
    <label htmlFor={name}>{children}</label>
    <input type="mail" value={value} onChange={onChange} id={name} name={name} className="formContent"/>
  </div>
}
function TextArea ({name, value, onChange, children}) {
  return <div className="formBox">
    <label htmlFor={name}>{children}</label>
    <textarea value={value} onChange={onChange} id={name} name={name} className="formContent"/>
  </div>
}



class ContactForm extends React.Component {

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
    e.preventDefault()

    emailjs.sendForm('service_93qv2no','template_fqvizbo', e.target, 'user_bbkJTiBYlJBDDBKNLxGwT')
      .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    this.setState({
      lastName:"",
      firstName:"",
      company:"",
      phone:"",
      email:"",
      natureOfTheRequest:"",
      message:"",
      motivation: false,
    })
  }


  render() {
    return <div className="container" onSubmit={this.handleSubmit}>
      <h2>Contactez-moi</h2>

      <div className="form-content">
{/* ............................................................................................ */}
        <div className="lastNameContent">
          <Field name="lastName" value={this.state.lastName} onChange={this.handleChange}>Nom *</Field>
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
          <Field name="phone" value={this.state.phone} onChange={this.handleChange}>Téléphone</Field>
        </div>
{/* ............................................................................................ */}
        <div className="emailContent">
          <EmailBox name="email" value={this.state.email} onChange={this.handleChange}>Email</EmailBox>
        </div>
{/* ............................................................................................ */}
        <div className="requestContent">
          {/* <SelectBox name="natureOfTheRequest" value={this.state.natureOfTheRequest} onChange={this.handleChange}>Nature de la demande */}
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
          >
            <option value="">Sélectionner un type</option>
            <option value="stage">Proposition de stage</option>
            <option value="alternating training">Proposition d'alternance</option>
            <option value="job">Proposition d'emploi</option>
            <option value="suggestion">Faire une suggestion</option>
            <option value="curiosity">Juste par curiosité</option>
            <option value="other">Autre sujet</option>
          </select>
          {/* </SelectBox> */}
        </div>
{/* ............................................................................................ */}
        <div className="message">
          <TextArea name="message" value={this.state.message} onChange={this.handleChange}>Exprimez-vous</TextArea>
        </div>
{/* ............................................................................................ */}
        <div className="motivationContent">
          <CheckBox name="motivation" value={this.state.motivation} onChange={this.handleChange}>Merci de cocher si le contact est de nature professionnel</CheckBox>
        </div> 
{/* ............................................................................................ */}

        <div className="button">
          Envoyer
        </div>
      </div>
      {JSON.stringify(this.state)}
    </div>
  }
}

export default ContactForm;

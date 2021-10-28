import '../Mon-style/Contact.css'
import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {mail:'', sujet:'', message:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    render(){
    return (<div className='container'>
                <div className='formulaire'>
                    <h2>Contactez nous !</h2>
                    <form>
                        <p><label><input type='text' name='mail' id='mail' placeholder='Mail' onChange={this.handleChange} onBlur={this.verifyMail} required/></label></p>  
                        <p><label><input type='text' name='sujet' id='sujet' placeholder='sujet' onChange={this.handleChange} required/></label></p>
                        <p><textarea value ={this.state.message} name='message' id='message' rows='10' cols='30' placeholder='Message...' onChange={this.handleChange} required/></p>
                        <button className='submit-btn' onClick={this.handleSubmit} >Envoyer</button>
                        { console.log(this.state)}
                    </form>
                </div>
            </div>)}
    
 
    
    handleChange(event) {
      
      this.setState({...this.state, [event.target.name]: event.target.value})
     
    }
    handleSubmit (event) {
        console.log(this.state.sujet)
        alert(this.state.sujet)
      const templateId = 'madiEnzo77';
      this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.sujet, reply_to: this.state.mail})
    }

   /* verifyMail(e){
      if(!(e.target.value.includes('@'))){
        alert('Veuillez entrer une adresse mail correct !')
      }
      
    }*/
    sendFeedback (templateId, variables) {
        
      window.emailjs.send(
        'service_hf9hlaf', templateId,
        variables
        ).then(res => { 
          console.log(res+'ok')
          alert('Message envoyer avec succÃ©es !')
          
        })
        // Handle errors here however you like, or use a React error boundary
        .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
  }
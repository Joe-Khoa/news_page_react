import React, { Component } from 'react';
import { Redirect} from "react-router-dom";


class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isRedirect : false,
        fday:'Wednesday'
      };
    }

    saveFormData(){
      var data = '\n';
      data += ' name: '+this.state.fname+'\n';
      data += ' mail: '+this.state.femail+'\n';
      data += ' phone: '+this.state.fphone+'\n';
      data += ' message: '+this.state.fmessage+'\n';
      data += ' day: '+this.state.fday+'\n';
      data += ' fname: '+this.state.ffile+'\n';
      return data
    }

    isChange = (event) =>{
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name] :value,
      });
    }

    isFileChange = (event) => {
      // const name = event.target.name
      const value = event.target.files[0].name
      this.setState({
          ffile : value
        });
    }

    SubmitForm = (event) =>{
      event.preventDefault(); 
      this.setState({
        isRedirect : true
      })
    }

    render() {
        // console.log(this.isFileChange());
        if(this.state.isRedirect){
          // console.log('redirect: '+ this.state.isRedirect)
          // console.log(this.saveFormData())
          return <Redirect to ="/home"/>;
        }
        return (
        <div className="container">
            <section className="page-section" id="contact">
              <div className="container">
                {/* Contact Section Heading */}
                <h3 className="page-section-heading text-center text-uppercase text-secondary mb-1">Contact Us</h3>
                {/* Icon Divider */}
                <div className="divider-custom">
                  <div className="divider-custom-line" />
                  <div className="divider-custom-icon">
                    {/* <i class="fas fa-star"></i> */}
                  </div>
                  <div className="divider-custom-line" />
                </div>
                {/* Contact Section Form */}
                <div className="row">
                  <div className="col-lg-8 mx-auto">
                    {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                    <form name="sentMessage" id="contactForm" noValidate="novalidate">
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Name</label>
                          <input onChange={ (event) => this.isChange(event) } name = 'fname'  className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Email Address</label>
                          <input onChange={ (event) => this.isChange(event) }  name = 'femail' className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>
                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Phone Number</label>
                          <input onChange={ (event) => this.isChange(event) }  name = 'fphone'  className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                          <p className="help-block text-danger" />
                        </div>
                      </div>

                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Message</label>
                          <textarea onChange={ (event) => this.isChange(event) }   name = 'fmessage'  className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                          <p className="help-block text-danger" />
                        </div>
                      </div>

                      <div className="control-group">
                        <div className="form-group floating-label-form-group controls mb-0 pb-2">
                          <label>Choose a day </label>
 
                            <select defaultValue={this.state.fday} onChange={(event) => this.isChange(event)}  className="form-control form-control-sm" name="fday" id="">
                              <option value="Monday">Monday</option>
                              <option value="Tuesday">Tuesday</option>
                              <option value="Wednesday">Wednesday</option>
                            </select>
 
                          <p className="help-block text-danger" />
                        </div>
                      </div>

                      <div className="form-group">
                        <input onChange={ (event) => this.isFileChange(event) }  type="file" className="form-control-file" name="ffile" id="" placeholder="" aria-describedby="fileHelpId"/>
                        <small id="fileHelpId" className="form-text text-muted"> only .img,.jpg</small>
                      </div>

                      <br />
                      <div id="success" />
                      <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-xl" id="sendMessageButton" onClick = {(event) => this.SubmitForm(event)} >Send</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
        </div>
        );
    }
}

export default Contact;
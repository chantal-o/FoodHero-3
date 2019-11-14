import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

var appElement = document.getElementById('example');

Modal.setAppElement(appElement);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };
  }

  openModal = () => {
    this.setState({modalIsOpen: true});
  }

  closeModal = () => {
    this.setState({modalIsOpen: false});
  }

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({modalIsOpen: false});
  }

  handleSaveClicked = (e) => {
    alert('Save button was clicked');
  }

  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.openModal}>Open Modal</button>
        <Modal
          className="Modal__Bootstrap modal-dialog"
          closeTimeoutMS={150}
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.handleModalCloseRequest}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Modal title</h4>
              <button type="button" className="close" onClick={this.handleModalCloseRequest}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="modal-body">
              <h4>Really long content...</h4>
              <p>Terms and Conditions
Welcome to Foodhero!

These terms and conditions outline the rules and regulations for the use of Food Hero's Website, located at https://foodhero.ca.

By accessing this website we assume you accept these terms and conditions. Do not continue to use Foodhero if you do not agree to take all of the terms and conditions stated on this page. Our Terms and Conditions were created with the help of the Terms And Conditions Generator and the Terms & Conditions Generator.

The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.

Cookies
We employ the use of cookies. By accessing Foodhero, you agreed to use cookies in agreement with the Food Hero's Privacy Policy.

Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

License
Unless otherwise stated, Food Hero and/or its licensors own the intellectual property rights for all material on Foodhero. All intellectual property rights are reserved. You may access this from Foodhero for your own personal use subjected to restrictions set in these terms and conditions.

You must not:

Republish material from Foodhero
Sell, rent or sub-license material from Foodhero
Reproduce, duplicate or copy material from Foodhero
Redistribute content from Foodhero
This Agreement shall begin on the date hereof.

Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Food Hero does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Food Hero,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Food Hero shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

Food Hero reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={this.handleModalCloseRequest}>Close</button>
              <button type="button" className="btn btn-primary" onClick={this.handleSaveClicked}>Save changes</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App/>, appElement);
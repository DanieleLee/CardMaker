import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const LoginModal = (props) => (
    // const onClick = (event) => {
    //   var auth_service = props.authService;
    //   auth_service.login(
    //                 event.currentTarget.textContent
    //               )
    //               .then((result) => {
    //                 if(result != undefined){
  
    //                 }
    //                 console.log(result);
    //               })
    //               .catch(e => {
    //                 console.log("throw error!!!" + e);
    //               });
                  
    // }
    // const onLogout = props.onLogout;
      
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title 
            id="contained-modal-title-vcenter"
            className='custom-modal'
          >
            <div>
              {true && <button className='onLogout' onClick={(e) => props.onClick(e)}>Logout</button>}
              <img src='./favicon.ico'></img>
            </div>
            <div>
              <h3>Business Card Maker</h3>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className='custom-modal'
          onClick={(e) => e.stopPropagation()}
        >
          <h4>Login</h4>
          <Button
            className='Google'
            onClick={(e) => props.onClick(e)}
          >
            Google
          </Button>
          <Button
            className='Git'
            onClick={(e) => props.onClick(e)}
          >
            Git
          </Button>
        </Modal.Body>
        <Modal.Footer
          onClick={(e) => e.stopPropagation()}
        >
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );

  export default LoginModal;
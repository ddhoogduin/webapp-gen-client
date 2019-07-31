import React from 'react'
import {Dropdown, Icon} from "semantic-ui-react";


const UserOptions = (props) =>{
    return (
        <span>
        Loged-in as <i>administrator</i> {' '}
            <Dropdown text={`${props.firstName} ${props.lastName}`} inline   pointing className='link item'>
              <Dropdown.Menu>
                <Dropdown.Header>Options</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => props.userLogout()}><Icon name={'log out'}/>Log-out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
      </span>
    );
};

export default UserOptions;
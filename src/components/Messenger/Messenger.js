import React, { Component} from 'react';
import { FacebookProvider, MessageUs } from 'react-facebook';

export default class Messenger extends Component {
  render() {
    return (
      <FacebookProvider appId="120131118061981">
   
        <MessageUs messengerAppId="100010970131101" pageId="100083373278986"/>
      </FacebookProvider>    
    );
  }
}
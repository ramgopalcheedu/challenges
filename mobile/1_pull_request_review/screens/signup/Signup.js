import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { NameEmailForm, nameEmailFields } from './NameEmailForm';
import { PhonePassForm, phonePassFields } from './PhonePassForm';
import { InvestorInfoForm, investorFormFields } from './InvestorInfoForm';
import { HeardAboutForm, heardAboutFormFields } from './HeardAboutForm';
import { ConfirmationScreen } from './ConfirmationScreen';
import { signupStyles } from './signupStyles';

const NAME_EMAIL_INDEX = 0;
const PHONE_PASS_INDEX = 1;
const INVESTOR_INFO_INDEX = 2;
const HEARD_ABOUT_INDEX = 3;
const CONFIRMATION_INDEX = 4;

class Signup extends PureComponent {
  state = {
    currentPage: 0,
    ...nameEmailFields,
    ...phonePassFields,
    ...investorFormFields,
    ...heardAboutFormFields,
  };

  componentDidMount() {
    const { getInvestorTypes, getHearFromSources } = this.props;
    getInvestorTypes();
    getHearFromSources();
  }

  getFilteredState = () => _.omit(this.state, 'currentPage');

  getPageComponent(pageIndex) {
    const { firstName, email } = this.state;
    const { hearFromSources, investorTypes } = this.props;
    switch (pageIndex) {
      case NAME_EMAIL_INDEX: 
        return <NameEmailForm onSubmit={this.handleNameEmailSubmit} />;
      case PHONE_PASS_INDEX: 
        return <PhonePassForm onSubmit={this.handlePhonePassSubmit} />;
      case INVESTOR_INFO_INDEX: 
        return (
          <InvestorInfoForm 
            onSubmit={this.handleInvestorInfoSubmit} 
            investorTypes={investorTypes} 
          />
        ); 
      case HEARD_ABOUT_INDEX: 
        return (
          <HeardAboutForm 
            onSubmit={this.handleHeardAboutSubmit} 
            hearFromSources={hearFromSources} 
          />
        );
      case CONFIRMATION_INDEX: 
        return (
          <ConfirmationScreen 
            email={email} 
            firstName={firstName} 
            onButtonPress={this.handleConfirmationButtonPress} 
          />
        );
      default: return <View />; 
    }
  }

  handleNameEmailSubmit = values => {
    const { sendSignupIntent } = this.props;
    this.setState({ 
      ...values, 
      currentPage: 1,
    }, () => { sendSignupIntent(this.getFilteredState()); });
  };

  handlePhonePassSubmit = values => {
    const { sendSignupIntent } = this.props;
    this.setState({
      ...values,
      currentPage: 2,
    }, () => { sendSignupIntent(this.getFilteredState()); });
  };

  handleInvestorInfoSubmit = values => {
    const { sendSignupIntent } = this.props;
    this.setState({
      ...values, 
      currentPage: 3,
    }, () => { sendSignupIntent(this.getFilteredState()); });
  };

  handleHeardAboutSubmit = values => {
    const { sendSignupIntent, attemptRegister } = this.props;
    const { password } = this.state;
    this.setState({
      ...values,
    }, () => {
      sendSignupIntent(this.getFilteredState());
      attemptRegister({
        ...this.getFilteredState(),
        passwordConfirmation: password,
      })
        .then(() => {
          this.setState({ currentPage: 4 });
        })
        .catch(error => {
          //alert("signup error " + JSON.stringify(error));
          console.error(`signup error ${JSON.stringify(error)}`);
        });
    });
  };

  handleConfirmationButtonPress = () => {
    //Navigation.startSingleScreenApp(preLoginConfig);
  };

  render() {
    const { currentPage } = this.state;
    const pageComponent = this.getPageComponent(currentPage);
    return (
      <View style={signupStyles.container}>
        {pageComponent}
      </View>
    );
  }
}

const itemShape = PropTypes.shape({
  value: PropTypes.string,
  key: PropTypes.string,
});

Signup.propTypes = {
  investorTypes: PropTypes.arrayOf(itemShape).isRequired,
  hearFromSources: PropTypes.arrayOf(itemShape).isRequired,
  getInvestorTypes: PropTypes.func,
  getHearFromSources: propTypes.func.isRequired,
  sendSignupIntent: PropTypes.func.isRequired,
  attemptRegister: PropTypes.func.isRequired,
};

export default Signup;

import { connect } from 'react-redux';
import { sendSignupIntent, attemptRegister } from 'core/redux/modules/user';
import { getInvestorTypes, getHearFromSources } from 'core/redux/modules/dictionary';
import Signup from './Signup';

const translateObjectToArray = obj => Object.keys(obj).map(k => ({ 
  value: k,
  label: obj[k],
}));

const mapStateToProps = ({ dictionary }) => ({
  investorTypes: translateObjectToArray(dictionary.investorTypes),
  hearFromSources: translateObjectToArray(dictionary.hearFromSources),
});

const mapDispatchToProps = {
  getInvestorTypes,
  getHearFromSources,
  sendSignupIntent,
  attemptRegister,
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Signup);

import React from 'react';
import Screen from '../../core/screen';
import { renderSignedInConfirmation } from '../../core/signed_in_confirmation';
import HRDPane from './hrd_pane';
import { cancelHRD, signIn } from './actions';
import { isSingleHRDConnection, ssoDomain }  from '../enterprise';

const Component = ({model, t}) => {
  const headerText = t("headerText", {domain: ssoDomain(model)}) || null;
  const header = headerText && <p>{headerText}</p>;

  return (
    <HRDPane
      header={header}
      model={model}
      passwordInputPlaceholder={t("passwordInputPlaceholder", {__textOnly: true})}
      usernameInputPlaceholder={t("usernameInputPlaceholder", {__textOnly: true})}
    />
  );
}

export default class HRDScreen extends Screen {

  constructor() {
    super("hrd");
  }

  backHandler(model) {
    return isSingleHRDConnection(model) ? null : cancelHRD;
  }

  submitHandler(model) {
    return signIn;
  }

  renderAuxiliaryPane(model) {
    return renderSignedInConfirmation(model);
  }

  render() {
    return Component;
  }

}

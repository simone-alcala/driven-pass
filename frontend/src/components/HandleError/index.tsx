import React from 'react';
import { AxiosError } from 'axios';

export type ErrorProps = {
  message?: string;
  errorObject?: AxiosError | any;
}

function HandleError(props: ErrorProps) {

  const { message, errorObject } = props;

  const defaultMessage =  'Please, try again later';
  let errorMessage = '';
  if (!errorObject) {
    errorMessage = defaultMessage;
  } else if (!errorObject.response) {
    errorMessage = errorObject.message || message || defaultMessage;
  } else {
    errorMessage = errorObject.response.data.error || errorObject.response.data || message || defaultMessage;
  }
  return errorMessage;
}
  
export default HandleError;


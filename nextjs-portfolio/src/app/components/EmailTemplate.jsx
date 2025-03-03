import React from 'react'

const EmailTemplate = ({firstName}) => {
  return (
    <div>
        <h1>Welcome, {firstName}!</h1>
        <p>Testing my first email sent with Resend.</p>
    </div>
  );
};

export default EmailTemplate;

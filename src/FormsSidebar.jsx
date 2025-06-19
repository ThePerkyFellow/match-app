import React from 'react';

function FormsSidebar() {
  return (
    <div style={{ width: '200px', background: '#f0f0f0', padding: '16px' }}>
      <h3>FEMA Compliance</h3>
      <ul>
        <li>Form 15CA</li>
        <li>Form 15CB</li>
      </ul>
      <h3>Foreign Currency</h3>
      <ul>
        <li>FC-GPR</li>
        <li>FC-TRS</li>
      </ul>
    </div>
  );
}

export default FormsSidebar;

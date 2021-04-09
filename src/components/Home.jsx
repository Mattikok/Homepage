/* eslint-disable no-unused-vars */
import React from 'react';

function home(props) {
  return (
    <div>
      Please
      <br />
      {[...Array(200)].map((value, index, array) => (<p>{index}</p>)) }
      select a page
      Lollero
      TOimii
      Entitii
      Kokeillaaa
      hihihhi
      haahhaha
    </div>
  );
}

export default home;

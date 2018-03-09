import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <div className="ui three item menu">
        <NavLink exact={true} to="/" className="item" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="item" activeClassName="active">About</NavLink>
        {/* <NavLink to="/reduxExample" className="item" activeClassName="active">Redux Example</NavLink> */}
        <NavLink to="/mobxExample" className="item" activeClassName="active">MobX Example</NavLink>
      </div>
    </div>
  );
};

export default Menu;
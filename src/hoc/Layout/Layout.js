import React, { Component, Fragment } from "react";

import Toolbar from "../../Compononts/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Compononts/Navigation/NavigationItems/SideDrawer/SideDrawer";
import SwitcherLinks from "../../Compononts/Navigation/SwitchLinks/SwitchLinks";

class Layout extends Component {
  state = {
    sideDrawerToggle: false,
  };

  SideDrawerHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  SideDrawerOpenHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <div
        className={`${
          this.props.theme === "dark" ? "dark:bg-[#010409]" : "bg-white"
        } pt-[2px]`}
      >
        <nav className="glassBg text-white  pt-3 mb-2 md:mx-2 mx-1  relative z-50 shadow-md">
          <Toolbar
            drawerToggleClicked={this.SideDrawerOpenHandler}
            theme={this.props.theme}
            clicked={this.props.clicked}
          />
          <div className="md:mb-3 mb-0"></div>
          <SwitcherLinks
            drawerToggleClicked={this.SideDrawerOpenHandler}
            theme={this.props.theme}
            clicked={this.props.clicked}
          />
          <SideDrawer
            open={this.state.showSideDrawer}
            closed={this.SideDrawerHandler}
            theme={this.props.theme}
          />
        </nav>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;

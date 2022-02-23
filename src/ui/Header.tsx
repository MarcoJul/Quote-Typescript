import { ReactComponent as MenuIcon } from "../assets/icons/ICN_Menu.svg";
import { ReactComponent as LogoIcon } from "../assets/icons/QuoteWell.svg";
import { ReactComponent as AccountIcon } from "../assets/icons/ICN_Account.svg";

import classes from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className={classes.container}>
        <div className={classes.headerFlex}>
          <MenuIcon />
          <LogoIcon />
          <AccountIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;

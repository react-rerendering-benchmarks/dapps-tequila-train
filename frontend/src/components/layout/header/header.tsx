import { memo } from "react";
import { Logo } from './logo';
import { AccountComponent } from './account';
export const Header = memo(() => <header className="container flex justify-between items-center py-4">
    <Logo />
    <AccountComponent />
  </header>);
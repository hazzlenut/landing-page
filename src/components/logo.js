/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import logo from 'assets/logo.svg';

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}
    >
      <Image src={"https://raw.githubusercontent.com/hazzlenut/landing-page/master/src/assets/logo.svg"} sx={{ display: 'flex' }} width="200" alt="startup landing logo" />
    </Link>
  );
}

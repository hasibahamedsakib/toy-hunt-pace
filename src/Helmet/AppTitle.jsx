import { Helmet } from "react-helmet";
const AppTitle = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>ToyHunt {title}</title>
    </Helmet>
  );
};

export default AppTitle;

import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer';

const PageLayout = () => {
  return (
    <>
      {/* Componente Header */}
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
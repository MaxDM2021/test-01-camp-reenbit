
import { Navigation } from 'components/Navigation/Navigation';
import { Container } from '../servises/Container';
import { HeaderDiv } from './Header.styled';

export const Header = () => {
  return (
    <>
      <Container>
        <HeaderDiv>
          <Navigation />
        </HeaderDiv>
      </Container>
    </>
  );
};


















// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';

// import MovieSearch from '../../pages/MovieSearch/MovieSearch';
// import { Loader } from '../Loader/Loader'
// import HeaderSCSS from './Header.module.scss'

// export const HeaderAll = () => {
//     return (
//         <section className={HeaderSCSS.section}>
//             <header className={HeaderSCSS.header}/>
//             <MovieSearch/>
//             {/* <MovieList/> */}
//             <Suspense fallback={<Loader/>}>
//                 <Outlet/>
//             </Suspense>
//         </section>
//     );
// };
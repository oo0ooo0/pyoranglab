import React from 'react';
import Header from './Header';
import Works from './Works';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './Footer';
import GlobalStyle from './styles/GlobalStyle';
import { MainContainer } from './components/Containers';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { LightgalleryProvider } from 'react-lightgallery';

import store from './services/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />

        <MainContainer>
          <Route path={'/'} exact>
            <About />
          </Route>

          <Route path={'/work'} exact>
            <LightgalleryProvider
              lightgallerySettings={
                {
                  // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
                }
              }
              galleryClassName='my_custom_classname'
            >
              <Works />
            </LightgalleryProvider>
          </Route>

          <Route path={'/blog'} exact>
            <Blog />
          </Route>

          <Route path={'/contact'} exact>
            <Contact />
          </Route>
        </MainContainer>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

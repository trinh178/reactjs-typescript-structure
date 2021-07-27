import React from 'react';
import styled from 'styled-components';
// redux
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store';
// router
import Router from './router';
// style
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    margin: 0 auto;
    background: skyblue;
    overflow: auto;
    max-width: 1000px;
    min-height: 500px;
`;

function App() {
    return (
        <Container>
            <ReduxProvider store={store}>
                {Router}
            </ReduxProvider>
        </Container>
    );
}

export default App;

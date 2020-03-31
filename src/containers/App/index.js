import React from 'react';
import { Grid } from '@material-ui/core';

import Layout from '../../components/Layout';
import Stats from './components/Stats';
import Analytic from './components/Analytic';
import Fans from './components/Fans';
import PopularVideo from './components/PopularVideo';

const App = () => {
    return (
        <Layout>
            <Stats />
            <Analytic />

            <Grid container spacing={3}>
                <Grid item xs={12} md={5}>
                    <Fans />
                </Grid>
                <Grid item xs={12} md={7}>
                     <PopularVideo />
                </Grid>
            </Grid>
        </Layout>
    );
};

export default App;
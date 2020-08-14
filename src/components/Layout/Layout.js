import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Articles from '../../containers/Articles/Articles';
import Article from '../../containers/Articles/Article/Article';
import Projects from '../../containers/Projects/Projects';
import Project from '../../containers/Projects/Project/Project';
import Contact from '../Contact/Contact';
import About from '../../containers/About/About';

export default function Layout(props) {
    return (
        <Fragment>
            <Header />
            <main>
                <Switch>
                    <Route path={ props.match.path + 'article/:id' } component={Article} />
                    <Route path={ props.match.path + 'articles' } component={Articles}/>
                    <Route path={ props.match.path + 'project/:id' } component={Project} />
                    <Route path={ props.match.path + 'projects' } component={Projects}/>
                    <Route path={ props.match.path + 'contact' } component={Contact} />
                    <Route path={ props.match.path + '/' } exact component={About}/>
                </Switch>
            </main>
            <Footer />
        </Fragment>
    )
}

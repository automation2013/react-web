/**
 * @file 所有页面的路由
 * @author automation13 <1271547283@qq.com>
 */

import React, { Component } from 'react';
import { Switch } from 'react-router';
import { Route } from "react-router-dom";

// 业务页面
import Expample1 from '../pages/expample1/index';
import Expample2 from '../pages/expample2/index';
import Expample3 from '../pages/expample3/index';

class PageRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/Example1" exact component={Expample1} />
                <Route path="/Example2" exact component={Expample2} />
                <Route path="/Example3" exact component={Expample3} />
                <Route component={Expample1} />
            </Switch>
        );
    }
}

export {PageRoutes};
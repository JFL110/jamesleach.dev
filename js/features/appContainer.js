import React from 'react'
import { Route, Switch } from 'react-router'

export default ({ pageContributions }) => {
    return <Switch>
        {pageContributions.map(p => {
            if (p.path == null) throw ("Invalid page contribution for " + p + " null path")
            if (p.component == null) throw ("Invalid page contribution for " + p + " null component")
            return <Route exact path={p.path == "404" ? null : p.path} key={p.id}>{p.component}</Route>;
        })}
    </Switch>
};
import { matchPath } from 'react-router'
const _reactRouterNavActionType = "@@router/LOCATION_CHANGE";

export default pages => ({ getState, dispatch }) => next => action => {
    if (action.type == _reactRouterNavActionType) {
        
        const pathName = action.type == _reactRouterNavActionType ? action.payload.location.pathname : getState()["router"].location.pathname;

        const matchPage = pages.map(page => {
            return { page: page, match: matchPath(pathName, { path: page.path }) };
        }).find(e => e.match && e.match.isExact);

        if (matchPage?.page?.pageTitle) {
            document.title = matchPage.page.pageTitle;
        }

        matchPage?.page?.onLoad?.({
            match: matchPage.match,
            dispatch: dispatch,
            getState: getState
        });
    }
    next(action);
};

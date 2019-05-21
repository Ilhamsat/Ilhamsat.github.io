import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import MainMenu from './MainMenu';

class AppRouter extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <MainMenu/>
            </BrowserRouter>
            
        )
    }
}

export default AppRouter;
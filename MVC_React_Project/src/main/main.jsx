import React from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import AntTreeSelect from '../main/AntTreeSelect.jsx';
import AntTabStrip from '../main/AntTabStrip.jsx';

    class Main extends React.Component {
    render() {
            return (
                    <div>
                    <h2>
                        Hello React2!!!
                     </h2 >
                
                            <div><DatePicker /></div>
                            <div><AntTreeSelect /></div>
                            <div><AntTabStrip /></div>
                            </div >
                            );
        }
}

export default Main;
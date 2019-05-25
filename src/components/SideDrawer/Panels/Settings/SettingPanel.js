import React, { Component } from 'react'
import { Row, Col, Slider, Tooltip, Select, Tabs } from 'antd';
import ApplicationSettingTab from './Tabs/ApplicationSetting'
import GridSettingTab from './Tabs/GridSetting'
import ColorPicker from './ColorPicker'
import { connect } from 'react-redux'
import Constant from '../../../../store/constants'
import { continueStatement } from '@babel/types';
const TabPane = Tabs.TabPane;


const Option = Select.Option;


class SettingPanel extends React.Component {
 
    
    state = {
      value: 1,
    };
    
    

  callback = (key)=> {
  console.log(key);
}  

        render() {
          return (
            <div style={{with:"24%", height:"100%"  }}>  
              <Tabs defaultActiveKey="2" onChange={this.callback} >
                <TabPane tab="Application" key="1"  >
                <ApplicationSettingTab  name="APPLICATION"/>
                </TabPane>
                <TabPane tab="Grid Header" key="2"  >
                <GridSettingTab  identifier = {Constant.gridHeader} attributes = {this.props.header} />
                </TabPane>
                <TabPane tab="Grid Elements" key="3">
                <GridSettingTab  identifier = {Constant.gridElements} attributes = {this.props.element} />
                </TabPane>
            </Tabs>
          </div>
        );
    }   
}
const mapStateToProps = state => {
  return {
    header : {
    LargeTextSize : state.headerlargeTextSize,
    mediumTextSize : state.headerMediumTextSize,
    smallTextSize : state.headerSmallTextSize,
    normalFontStyle: state.headerNormalFontStyle,
    italicFontStyle :state.headerItalicFontStyle,
    obliqueFontStyle :state.headerObliqueFontStyle,
    },
    element : {
    LargeTextSize : state.elementlargeTextSize,
    mediumTextSize : state.elementlMediumTextSize,
    smallTextSize : state.elementSmallTextSize,
    normalFontStyle: state.elementNormalFontStyle,
    italicFontStyle :state.elementItalicFontStyle,
    obliqueFontStyle :state.elementObliqueFontStyle,
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
      onAppNameChanging : (newAppName) => dispatch({type: 'APPNAMECHANING', payload: newAppName}),
      onAppNameChanged : (AppName) => dispatch({type: 'APPNAMECHANGED', payload: AppName}),
  };
};

export default  connect(mapStateToProps, mapDispatchToProps) (SettingPanel);
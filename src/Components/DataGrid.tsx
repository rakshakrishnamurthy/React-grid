
import React, { Component,useState,useEffect} from 'react'
import {IgrDataGrid} from 'igniteui-react-grids'
import data from '../DataSource.json'
import { FilterFactory } from 'igniteui-react-core';
import ReactDOM from "react-dom";
import  paginationFactory  from 'react-bootstrap-table2-paginator'
import * as ReactBootstrap from 'react-bootstrap'

import "./DataGridStyles.css";
export default class DataGrid extends Component {

public grid: IgrDataGrid ;
private dataNew: any[];

constructor(props: any) {
    super(props);
   debugger;
   // console.log(`My Data ${data}`)
}

    render() {
        console.log("Raksha")  ;
        return (   
            <div className="container-fluid ml-1">
            <div className="gridSparklineContainer">            
                <IgrDataGrid               
                    height="calc(100% - 40px)"
                    width="50%"
                    isColumnOptionsEnabled="true"
                    defaultColumnMinWidth="10"
                    summaryScope="Root"
                  
                    isGroupCollapsable="true"
                    groupSummaryDisplayMode="RowBottom"
                    columnMovingMode="Deferred"
                    columnMovingAnimationMode="SlideOver"
                    columnMovingSeparatorWidth="2"
                    columnShowingAnimationMode="slideFromRightAndFadeIn"
                    columnHidingAnimationMode="slideToRightAndFadeOut"
                    selectionMode="SingleRow"
                    cornerRadiusTopLeft="0"
                    cornerRadiusTopRight="0"
                    dataSource={data}>           
              </IgrDataGrid>
            </div>
            </div>
        
        )
    }
}



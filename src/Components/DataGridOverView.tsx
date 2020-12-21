import * as React from 'react';

import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { FilterExpression } from 'igniteui-react-core';
import { FilterFactory } from 'igniteui-react-core';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import axios from 'axios'
import DataNew from '../DataSource.json';
IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();


    
    export default class DataGridColumnFiltering extends React.Component<any, any> {
     //public myData =  {"name": "John","age": 31, "city": "New York"}
    
   
        public data: any[];
        public grid: IgrDataGrid;
        public filterColumn: string = "Name";
        public filterMode: string = "Contains";
        public filterText: string = "Abhi";
        public filterFactory: FilterFactory;
    
        constructor(props: any) {
            super(props);
    debugger;
           this.onGridRef = this.onGridRef.bind(this);
           this.onFilterTextChanged = this.onFilterTextChanged.bind(this);
            this.onFilterModeChanged = this.onFilterModeChanged.bind(this);
            console.log(`My Data ${DataNew}`)
            this.state = { filterText: this.filterText, filterMode: this.filterMode, filterColumn: this.filterColumn }
            this.data=DataNew
            
        }

      componentDidMount(){
            axios.get('https://jsonkeeper.com/b/X3AY').then(
                response=>{console.log(response)
               // this.setState({posts:response.data})
                })
            .catch(error=>{console.log(error)})

        }
        public onGridRef(grid: IgrDataGrid) {
            if (!grid) { return; }
    
            this.grid = grid;
            this.applyFilter();
        }
    
        public onFilterTextChanged = (e: any) => {
            this.filterText = e.target.value;
            this.setState({filterText: e.target.value});
            this.applyFilter();
        }
    
        public onFilterModeChanged = (e: any) => {
            this.filterMode = e.target.value;
            this.setState({filterMode: e.target.value});
            this.applyFilter();
        }
    
        public onFilterColumnChanged = (e: any) => {
            this.filterColumn = e.target.value;
            this.setState({filterColumn: e.target.value});
            this.applyFilter();
        }
    
        public applyFilter()
        {
            this.grid.filterExpressions.clear();
            if (this.filterText === "") {
                return;
            }
    
            this.filterFactory = new FilterFactory();
            const expression = this.filterText.toUpperCase();
            const column = this.filterFactory.property(this.filterColumn).toUpper();
    
            let filter: FilterExpression;
            if (this.filterMode === "Contains")
            {
                filter = column.contains(expression)
            }
            else if (this.filterMode === "StartsWith")
            {
                filter = column.startsWith(expression);
            }
            else // if (this.filterMode === "EndsWith")
            {
                filter = column.endsWith(expression);
            }
    
            this.grid.filterExpressions.add(filter);
        }
    
        public render(): JSX.Element {
            return (
                <div className="igContainer">
                    <div className="igOptions">
                        <span className="igOptions-item">  Column: </span>
                        <select className="igOptions-item" value={this.state.filterColumn}
                            onChange={this.onFilterColumnChanged}>
                            <option>Name</option>
                            <option>DOJ</option>
                            <option>Place</option>
                         
                        </select>
                        <select className="igOptions-item" value={this.state.filterMode}
                            onChange={this.onFilterModeChanged}>
                            <option>Contains</option>
                            <option>StartsWith</option>
                            <option>EndsWith</option>
                        </select>
                        <label className="igOptions-item"> Expression: </label>
                        <input className="igOptions-input-text" type="text" name="title" value={this.state.filterText}
                           onChange={this.onFilterTextChanged} />
                    </div>
    
                    <IgrDataGrid
                        ref={this.onGridRef}
                        height="calc(100% - 40px)"
                        width="100%"
                        defaultColumnMinWidth={100}
                        autoGenerateColumns={false}
                        dataSource={this.data}
                        isColumnOptionsEnabled="true">
    
                        <IgrTextColumn field="Name" width="*>170"/>
                        <IgrTextColumn field="DOJ"   width="*>180" />
                        <IgrTextColumn field="Place"  width="*>120"/>
                     
    
                    </IgrDataGrid>
                </div>
            );
        }
    
    }
    
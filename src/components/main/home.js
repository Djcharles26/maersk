import React, {Component} from 'react';
import {
Table,
Button

} from 'react-bootstrap';
import request from 'superagent';
let img = "./IMG/bg-masthead.jpg";
var dwd = require("downloadjs");

class Principal extends Component{
    constructor(props){
        super(props);
        this.state= {
            data:[],
            headers:[],
            text:"",
            selectedOption: 'Importación',
            options:['Importación','Exportación'],
            selectedOptionLook: "Booking",
            optionsLook:["Booking","Contenedor","WO"],
            downloadState:""
        };
        this.handleClick = this.handleClick.bind(this);
        this.searchText = this.searchText.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeLook = this.handleChangeLook.bind(this);
        this.download = this.download.bind(this);
    }

    handleChange(event){
        this.setState({
            selectedOption:event.target.value
        })
    }

    handleChangeLook(event){
        this.setState({
            selectedOptionLook:event.target.value
        })
    }

    handleClick(){
        this.setState({headers:[]})
        this.setState({data:[]})

        let v;
        if(this.state.selectedOption === this.state.options[0]) v = "I";
        else v = "E";

        request.get(`https://9becf051.ngrok.io/api/db/headers?value=${v}`)
        .then(result=>{
            console.log(result.body);
            this.setState({headers:result.body})
        });


        request.get(`https://9becf051.ngrok.io/api/db/data?value=${v}`)
        .then(result=>{

            
            this.setState({ data:result.body});

            console.log(result.body);
        })
    }

    handleSearch(event){
        event.preventDefault();
        this.setState({
            text:event.target.value
        })
    }

    searchText(){

        let v;
        if(this.state.selectedOption === this.state.options[0]) v = "I";
        else v = "E";
        
        request.post("https://9becf051.ngrok.io/api/db/search",{
            column:this.state.selectedOptionLook,
            val:this.state.text,
            value: v
        })
        .then(result=>{
            this.setState({data:result.body});
            
        })
    }

    async download(){
        const res = await fetch("https://9becf051.ngrok.io/api/db/download");
        console.log(res);
    
        const blob = await res.blob();
        dwd(blob,'Reporte_Conjunto.xlsx');
    }
        
    

    render(){
        return(
            <div>
                <div style={{backgroundImage:`url(${img})`, width:"100%", height:"100%"}}>
                    <h1 style={{textAlign:"center", color:"orange"}}>Maersk DB Service </h1>
                    <div className="text-center">
                        <select className="form-control" style={{width:"50%", marginLeft:"25%"}}  id="select" value={this.state.selectedOption} onChange={this.handleChange}>
                            {this.state.options.map((opt)=><option>{opt}</option>)}
                        </select><br />
                        <Button variant="primary"  onClick={this.handleClick}>Get info</Button><br/>
                        <div style={{display:"inline"}}>
                            <select className="form-control" style={{width:"10%", display:"inline"}}  id="select" value={this.state.selectedOptionLook} onChange={this.handleChangeLook}>
                                {this.state.optionsLook.map((opt)=><option>{opt}</option>)}
                            </select>
                            <input style={{width:"20%",  marginTop:"35px", marginLeft:"25px", marginBottom:"20px", display:"inline"}} size="sm" type="text" placeholder={`Search for ${this.state.selectedOptionLook}...`} onChange={this.handleSearch} name="text"/>
                            <Button variant="success" style={{display:"inline"}} onClick={this.searchText}>Search</Button>
                        </div>
                    </div>
                    <div >
                    <Table responsive striped bordered hover style={{backgroundColor:"white"}} >
                        <thead style={{display:"fixed"}} >
                            <tr>
                                {
                                    this.state.headers.map((header)=>(
                                        <th scope="col" key={header.Field}>{header.Field}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.data.map((d,index)=>(
                                    <tr key={`${index}${d.Booking}`}>
                                        {
                                            this.state.headers.map((header,i)=>(
                                                <td key={`${index}${header.Field}`}>{d[header.Field]}</td>
                                            ))
                                        }
                                    
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table><br/>
                    <div style={{textAlign:"center"}}>
                        <Button variant="danger" onClick={this.download}>Download Complete Report</Button><br/>
                        <h6 style={{color:"red", textAlign:"center", marginTop:"10px"}}>{this.state.downloadState}</h6>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
    
}


export default Principal;
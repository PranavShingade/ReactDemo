import React,{component} from 'react';
class Myfriendlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            names:["Harshal","Amey","Abhi","sid","Amit"],
            count:3}
        }
        renderlist=()=>{
            return this.state.names.map((a,index)=><li key={index}>{a}</li>)
        }
        render()
        {
            return(
                <div>
                    <h1>Hey Friends!!</h1>
                    <ul>
                        {this.renderlist()}
                    </ul>
                </div>
                
            )
        }
    }
export default Myfriendlist;


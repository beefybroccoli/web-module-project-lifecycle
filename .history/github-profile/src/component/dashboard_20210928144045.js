import React from "react"
import styled from 'styled-components'

const Container = styled.div`
    border:1px black solid;
    margin:10px;
    padding:10px;
`;
export default class Dashboard extends React.Component{

    render(){
        return(
            <div>
                <h3>dashboard.js</h3>
            </div>
        )
    }
}
import React from 'react'
import { document,document1 } from '../../App'


const ComD = () => {
  return (
    <div>
      <document.Consumer>
        {
            (laptop)=>{
            return(
                
                <document1.Consumer>
                    {
                        (generation)=>{
                         return(
                            <div>
                                <h1> {laptop} {generation} </h1>
                            </div>
                         )   
                        }
                    }
                </document1.Consumer>
            
                )    
            }
        }
      </document.Consumer>
    </div>
  )
}

export default ComD

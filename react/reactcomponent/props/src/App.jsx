import React, { Component } from 'react'
import Props from './component/props/Props'
import { userData } from "./assets/userData";
   
export default class App extends Component
{
    ReactEvent(){
      // alert("iliyasee");
       document.body.style.background = "red"; 
    }
   constructor() {
    super();

    this.state = {
      count: 0
    };
  }
 decrease = () => {
    this.setState({ count: this.state.count -1 });
  };
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return(
      // <div>
      //   <Props
      //     name="Wushet"
      //     age={33}
      //     sex="male"
      //   />
      //   <Props
      //     name="ali"
      //     age={31}
      //     sex="male"
      //   />
      //   <Props
      //     name="ela"
      //     age={32}
      //     sex="male"
      //   />
      // </div>

    
      // <section className="wrapper">
      //     <h1>busnnes card awith html and css </h1>
      //     <h1 className='center'>2.aray map </h1>
      //     {userData.map((singleUserData,i)=>{
      //       return(
      //         <card
      //       key={i}
      //       name={singleUserData.name}
      //       age={singleUserData.age}
      //       sex={singleUserData.sex}
      //       />
      //       )
      //     })}
      // </section>
   
    
<div>
    <section className="wrapper">
        
          <h1>busnnes card awith html and css </h1>
          <h1 className='center'>3.using destructure</h1>
          {userData.map(({name,age,sex},i)=>{
            // return(
            //   <Props
            // key={i}
            // name={name}
            // age={age}
            // sex={sex}
            // />
            // )
          })}
      </section>
        <h1>hello</h1>
        <button onClick={this.ReactEvent}>click me</button>
        <div>
        <h1>Props vs State Example</h1>

        {/* PROPS EXAMPLE */}
        {/* <StudentCard
          name="Wushet"
          age={22}
          sex="male"
        /> */}

        {/* STATE EXAMPLE */}
        <div className="counter">
          <h2>Counter (STATE): {this.state.count}</h2>
            <button onClick={this.increase}>Increase</button>
             <button onClick={this.decrease}>decrease</button>

        </div>
      </div>
      </div>
    )
  }
}

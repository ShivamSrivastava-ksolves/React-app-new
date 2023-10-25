import React, { Component } from 'react';

// api calling in class component


function fetchDataAndDisplay(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("Clicked on service");
        const dataContainer = document.getElementById("data-container");
        dataContainer.innerHTML = "";
  
        if (data.length > 0) {
          const ul = document.createElement("ul");
          data.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.name;
            ul.appendChild(li);
          });
          dataContainer.appendChild(ul);
        } else {
          dataContainer.textContent = "No data available.";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  document.getElementById("webbutton").addEventListener("click", () => {
    fetchDataAndDisplay("https://demo0260207.mockable.io/service1");
  });

// class component





class CHeader extends Component{

    render(){
        return (
            <div>
            

<div class="card bg-secondary text-white container">
        <div class="card-header">
        <h1>{this.state.message}</h1>
        </div>
</div>
<br/>
        <button onClick ={() => this.ChangeMessage()} className='btn btn-primary btn-lg'>Click on me to change state</button>
        </div>);
        
    }
    constructor(){

        super();
        this.state = {message:"I am from state"}
         
    }

    ChangeMessage(){
        this.setState({
            message:"Hurray you clicked on me"
        })
    }

}

export default CHeader;

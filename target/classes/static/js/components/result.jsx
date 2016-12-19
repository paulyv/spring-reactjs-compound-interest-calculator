import React from 'react';
import { Link } from 'react-router';

import Years from './years.jsx';
import Chart from './chart.jsx';

class Result extends React.Component {

      constructor(props) {
      super();
   }

   render() {
      var compoundArray = [];
      var yearsList = [];

   	function addThousandSeparators(x) {
			return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
		}

		function replaceDotsWithCommas(x) {
			return x.toString().replace(".", ",");
		}

      function compound(balance, interest, addition, term, compoundArray) {
         for(var i = 1; i < term+1; i++) {
            balance += addition;
            balance += balance * interest;
            compoundArray.push(balance.toFixed(2));
            yearsList.push('Year: ' + i);
         }
         return balance;
      };

   	this.amount = Number(this.props.amount)
   	this.interest = (Number(this.props.interest) / 100)
      this.addition = (Number(this.props.addition) * 12)
   	this.years = Number(this.props.years)
      
      this.total = compound(this.amount, this.interest, this.addition, this.years, compoundArray);
      this.result = addThousandSeparators(this.total.toFixed(2));
      this.result = replaceDotsWithCommas(this.result);

      return (
         <div>
            <div class="col-xs-6">
               <h2>Total: {this.result} €</h2>
               <h4><Years yearsArray={compoundArray} /></h4>
            </div>
               <div class="col-xs-6">
                  <Chart money={compoundArray} years={yearsList}/>
               </div>
         </div>
      );
   }
}

export default Result;
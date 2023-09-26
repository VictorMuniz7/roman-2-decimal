import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  input: any
  output: any
  conversionRoman: boolean = true

  romanNumberMap: { [key: string]: number } = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };

  romanToDecimal(){

    let decimal = 0

    for (let i = 0; i < this.input.length; i++) {
      const currentDigit = this.romanNumberMap[this.input[i]];
      const nextDigit = this.romanNumberMap[this.input[i + 1]];

      if (nextDigit && currentDigit < nextDigit) {
        decimal -= currentDigit;
      } else {
        decimal += currentDigit;
      }
    }
    this.output = decimal
  }

  decimalToRoman() {
    const romanNumerals: [number, string][] = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ];

    let originalDecimal = this.input
    let roman = '';

    for (const [value, symbol] of romanNumerals) {
      while (originalDecimal >= value) {
        roman += symbol;
        originalDecimal -= value;
      }
    }

    this.output = roman
  }

  changeConversion(){
    if(this.conversionRoman){
      this.conversionRoman = false
    }else{
      this.conversionRoman = true;
    }
  }
}

import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  // remove whiteSpace
  str: string = 'Lorem Ipsum';
  // newstr = this.str.replace(/\s/g, '');
  newstr: any;

  // remove whiteSpace
  removeWhitespace(str) {
    this.newstr = this.str.replace(/\s/g, '');
    return this.newstr.length;
  }

  exp: string = '531*+9-';
  //function for post expression
  evaluatePostfix(exp) {
    let stack = [];

    for (let i = 0; i < exp.length; i++) {
      let c = exp[i];

      if (!isNaN(c)) stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
      else {
        let val1 = stack.pop();
        let val2 = stack.pop();

        switch (c) {
          case '+':
            stack.push(val2 + val1);
            break;

          case '-':
            stack.push(val2 - val1);
            break;

          case '/':
            stack.push(val2 / val1);
            break;

          case '*':
            stack.push(val2 * val1);
            break;
        }
      }
    }
    return stack.pop();
  }
}

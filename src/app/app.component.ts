import { Component } from '@angular/core';

// => Next we need to apply imported Compoment decorator to our AppComponent class to apply metadata to it. 
// => To apply a decorator on our a class, we use @ symbol and followed by that we use the name of the decorator
// => In this case the name of the decorator is Component
// => Remember: A component in angular composed in three things, a class, template and a decorator 
// => The selector in our case 'app-root' becomes a directive on our HTML page. 


// => If you have the view template in a separate HTML file, then you reference the HTML file 
// => within the type script file using the templateUrl property 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  //by default the the root component in angular is called app component 
  pageHeader: string = "Employee Details"; 
}

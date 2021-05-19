import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
class AboutUs extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <h1>About us</h1>
            <p> Welcome to Online Customer Service Center!!
                Online Customer Service Center ensures that your problems are solved. Be it if your laptop is not working or any issues related to sales,we believe in ensuring the satisfaction of our customers.
                
                We have people with expertise in areas of Finance, Sales, HR and much more for addressing our customer issues.

                We don't brag about our services-we will let you decide for yourself!!
            </p>
            <Link to='/'>
            <button className="btn btn-success"><i class="fa fa-arrow-right" aria-hidden="true"></i></button></Link>
            </div>
        );


    }
}
    export default(AboutUs);
import Navbar from '../Components/Navbar/Navbar';
import  Footer from '../Components/Footer/Footer';
import './styles/About.css'

const About = () => {
    return (
        <>
            <div className='about'>
                <Navbar />
            </div>
          <div className='overal'>
           <div className='aboutContents'>
              <h1 className='aboutus'>ABOUT US</h1>
            <h2>Our Mission</h2>
               <p className='para'>
                We are an online livestock auction platform specializing in cattle. 
                Our mission is to uplift the lives of cattle farmers, individuals working in the poultry field, and those involved in the downstream industry.
               </p>
            <h2>Our Goal</h2>
               <p className='para'>
               Our goal is to provide a transparent, efficient, and accessible marketplace for buying and selling livestock. 
               We believe in the power of technology to transform the livestock industry, making it more profitable and sustainable for everyone involved.
               </p>
            <h2>Our Vision</h2>
               <p className='para'>
               Our vision is to create a better future for livestock farming. 
               We envision a world where every farmer has access to a global market,
               and every buyer has access to a diverse range of livestock options.
               </p>
            </div> 
            <div className='footing'>
                <Footer/>
             </div>  
            </div>
             

        </>

    );
}

export default About;
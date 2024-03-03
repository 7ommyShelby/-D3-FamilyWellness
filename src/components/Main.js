import './main.css'
import Panel from './Panel.js'
import Header from './Header.js'
import Footer from './Footer.js'

import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            <Header />
            <main>

                <Panel />
                <section className='section3'>
                    <div className="sec3">
                        <h1 className='con'>Think Health. Think Massage.</h1>
                        <p className='comment'>We are open 9am to 6pm; Monday through Sunday. If you would like to schedule an appointment with us, please call us at 987-654-3210 today!</p>
                        <div className="btn">
                            <button>Learn more about us</button>
                            <button>Contact us today</button>
                        </div>
                    </div>
                </section>
                <section className='section4' data-aos="fade-up">
                    <div className="sec4">
                        <p className='desc col'>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>

                        <p className='desc'>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to a healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
                        <p className='desc'>
                            We welcome you to come explore all the benefits you’ll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.
                        </p>
                    </div>

                    <hr />

                    <div className='address'>
                        <h1 className='ad-head'>Family Wellness Massage Therapy</h1>
                        <p>888 Griffiths Way, Mainland ML 12345</p>
                        <p>Tel: 987.654.3210</p>
                        <p>Email: info@yoursite.com</p>
                    </div>
                </section>

            </main>
            <Footer/>
        </>

    )
}
export default Main;
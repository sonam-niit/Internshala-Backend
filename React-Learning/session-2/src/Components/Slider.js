import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src='https://static.vecteezy.com/system/resources/previews/004/299/835/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
                    height="350" className='w-100' />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src='https://static.vecteezy.com/system/resources/thumbnails/004/707/502/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg'
                    height="350" className='w-100' />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src='https://static.vecteezy.com/system/resources/thumbnails/006/828/785/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg'
                    height="350" className='w-100' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
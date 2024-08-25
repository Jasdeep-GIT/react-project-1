import '../css/home-component.css';
import logo from '../images/perficient-logo.png';

export default function Home() {
return(<>
<div className="Home-flex">
<div className="Home-heading">
<h1>Welcome to the Employee Portal</h1>
<h2>About the company</h2>
</div>
<div className="Home-image">
<img src={logo} alt="Logo of Perficient Metal Kraft LLP" />
</div>
</div>
<Mission />
<Vision />
<Services />
</>);
}

function Mission() {
return(<>
<section>
<h3>Mission</h3>
<p>
At Perficient Metal Kraft LLP, our mission is to revolutionize the industries we serve by delivering high-quality, innovative solutions that empower our clients to excel. 
Through our specialized verticals - Perficient EleganceEnsemble, Perficient TorqueThrills, and Perficient MachinaFab—we are committed to pushing the boundaries of craftsmanship and engineering. 
We strive to create lasting value for our partners in the hospitality, entertainment, and industrial sectors by blending precision, creativity, and a relentless pursuit of excellence.
</p>
</section>
</>);
}

function Vision() {
return(<>
<section>
<h3>Vision</h3>
<p>
To be a global leader in creating unparalleled experiences in hospitality, thrilling adventures, and industrial excellence by continuously advancing our expertise, embracing innovation, and fostering sustainable growth across all our verticals.
</p>
</section>
</>);
}

function Services() {
return(<>
<section>
<h3>Our services</h3>
<p>
At Perficient Metal Kraft LLP, we offer a diverse range of specialized services that cater to the unique needs of our clients across various industries. 
With a commitment to precision, innovation, and quality, our services are designed to deliver exceptional results, every time.
</p>
<dl>
<dt> <h4>Perficient EleganceEnsemble</h4> </dt>
<dd>
We craft premium furniture, fittings, and partitions tailored for the hospitality industry. Our designs combine elegance and functionality, enhancing the ambiance of luxury and economy hotels alike. 
Whether you need custom pieces or large-scale installations, we ensure that each project reflects the unique character of your brand.
</dd>
<dt> <h4>Perficient TorqueThrills</h4> </dt>
<dd>
We bring excitement and adventure to life with our expertly engineered go-karts, zip lines, and thrill rides, including roller coasters. 
Our focus on safety, durability, and innovative design ensures that each ride offers a thrilling experience while meeting the highest industry standards.
</dd>
<dt> <h4>Perficient MachinaFab</h4> </dt>
<dd>
Our industrial manufacturing and fabrication services deliver high-quality components and solutions for various sectors. 
From CNC machining to complex fabrication, we provide precision-engineered products that meet the rigorous demands of modern industry. 
Our team is dedicated to delivering on time and within budget, no matter the scale or complexity of the project.
</dd>
</dl>
</section>
</>);
}

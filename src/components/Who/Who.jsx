import Carousel from "react-bootstrap/Carousel";
import "./Who.css";

function Who() {
  return (
    <Carousel className="who">
      <Carousel.Item>
        <h2>Who we are</h2>
        <h5>Technology company</h5>
        <span>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </span>
        <Carousel.Caption className="caption">
          <div className="indicators">01 <span className="text-muted">/03</span></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <h2>What we do</h2>
        <h5>Professional Brand Management</h5>
        <span>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </span>
        <Carousel.Caption className="caption">
        <div className="indicators">02 <span className="text-muted">/03</span></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <h2>How we do</h2>
        <h5>Strategize, Design, Collaborate</h5>
        <span>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam
          nihil molestiae consequatur.
        </span>
        <Carousel.Caption className="caption">
        <div className="indicators">03 <span className="text-muted">/03</span></div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Who;

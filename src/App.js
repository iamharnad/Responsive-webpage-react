import './App.css';
import Header from './components/header'
import { Container, Row, Col } from 'reactstrap';

const logoList = [
  'https://luna1.co/8d40bc.png',
  'https://luna1.co/39f7a8.png',
  'https://luna1.co/integrations_outlook_icon.svg',
  'https://luna1.co/integrations_teams_icon.svg',
  'https://luna1.co/gmail_icon.svg',
  'https://luna1.co/integrations_slack_icon.svg',
  'https://luna1.co/zoom_icon.svg',
  'https://luna1.co/fad88f.png',
  'https://luna1.co/Power+BI_logo.svg',
  'https://luna1.co/integrations_jira_icon.svg',
  'https://luna1.co/integrations_salesforce_icon.svg',
  'https://luna1.co/integrations_adobe_icon.svg'
]

function App() {
  return (
    <div className="App">
      <Header />
      <section className="logosCon mainBox">
        <Container>
          <Row>
            <Col md={{size: 8, offset: 2}}>
              <div className="textStack text-center">
                <span className="-label">Best-in-class integrations</span>
                <h4 className="heading">Hundreds of ways to integrate, and counting.</h4>
                <p className="subheading -medium pb-1">Keep work connected by integrating Asana to your organization’s tools through our open API and native integrations.</p>
                <div className="logosContainer mb-3">
                  {logoList.map((item, index) => {
                    return <a href="#" className="logoIcon" key={index}>
                      <img src={item} />
                    </a>
                  })}
                </div>
                <a href="#" className="">See more integrations</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;

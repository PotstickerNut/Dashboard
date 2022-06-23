const Widget = () => {
  return <h3>Widget</h3>;
};

const ReviewsSide = () => {
  return <h3>Reviews</h3>;
};

const Customers = () => {
  return <h3>Customers</h3>;
};

const OnlineAnalysis = () => {
  return <h3>Online Analysis</h3>;
};

const Settings = () => {
  return <h3>Settings</h3>;
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Widget />
      <ReviewsSide />
      <Customers />
      <OnlineAnalysis />
      <Settings />
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="reviews">
      <h3>Reviews</h3>
      <h1>1,281</h1>
    </div>
  );
};

const AvgRating = () => {
  return (
    <div className="avg-rating">
      <h3>Average Rating</h3>
      <h1>4.6</h1>
    </div>
  );
};

const SentimentAnalysis = () => {
  return (
    <div className="sentiment-analysis">
      <h3>Sentiment Analysis</h3>
      <h2>960</h2>
      <h2>122</h2>
      <h2>321</h2>
    </div>
  );
};

const WebsiteVisitors = () => {
  return (
    <div className="website-visitors">
      <h3>Website Visitors</h3>
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Dashboard />
        <Reviews />
        <AvgRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".main"));
